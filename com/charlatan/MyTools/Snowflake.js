/**
 * Time:2022/2/9 13:54 04
 * Name:Snowflake.js
 * Path:Web代码/src/com/charlatan/MyTools
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * Twitter_Snowflake(雪花算法)
 *
 * SnowFlake的结构如下(共64bits，每部分用-分开):
 *  >  0 - 0000000000 0000000000 0000000000 0000000000 0 - 00000 - 00000 - 000000000000
 *  >  |   ----------------------|----------------------   --|--   --|--   -----|------
 *  >  1bit不用                41bit 时间戳                  数据标识id 机器id     序列号id
 *
 * - 1位标识，二进制中最高位为1的都是负数，但是我们生成的id一般都使用整数，所以这个最高位固定是0
 * - 41位时间截(毫秒级)，注意，41位时间截不是存储当前时间的时间截，而是存储时间截的差值（当前时间截 - 开始时间截得到的值），
 *   这里的的开始时间截，一般是我们的id生成器开始使用的时间，由我们程序来指定的（如下下面程序IdWorker类的startTime属性）。
 *   41位的时间截，可以使用69年，年T = (1L << 41) / (1000L * 60 * 60 * 24 * 365) = 69
 * - 10位的数据机器位，可以部署在1024个节点，包括5位datacenterId和5位workerId
 * - 12位序列，毫秒内的计数，12位的计数顺序号支持每个节点每毫秒(同一机器，同一时间截)产生4096个ID序号
 * - 加起来刚好64位，为一个Long型。
 *
 *  > SnowFlake的优点是：
 *  > - 整体上按照时间自增排序
 *  > - 并且整个分布式系统内不会产生ID碰撞(由数据中心ID和机器ID作区分)
 *  > - 并且效率较高，经测试，SnowFlake每秒能够产生26万ID左右。
 *   @type {Snowflake}
 */

class Snowflake {
	// 机器ID
	#workerId
	// 数据中心ID
	#dataCenterId
	// 序列号（在 0 ~　4096 中循环）
	#sequence
	
	/**
	 * 新建对象时传入的参数，作为生成ID的基本区分
	 * > 偏移量：
	 * > > 通过指定不同元素的偏移量，来在一定长度的ID中按照一定的规则进行显示和排布
	 *
	 * @param workerId 机器码ID
	 * @param dataCenterId　数据中心ID
	 * @param sequence 序列号
	 */
	constructor (workerId, dataCenterId, sequence) {
		// 指定参考时间【2020-01-01】（设置系统时间，通过产生ID时的时间戳来减去这个时间戳）
		this.START_TIME = 1288834974657n
		
		// 序列号占用的位数
		this.SEQUENCE_BITS = 12n
		// 机器ID占用的位数
		this.WORKER_ID_BITS = 5n
		// 数据中心ID占用的位数
		this.DATA_CENTER_ID_BITS = 5n
		
		// 机器ID的偏移量。值为：12
		this.WORKER_ID_SHIFT = this.SEQUENCE_BITS
		// 数据中心ID较机器ID的偏移量。值为：17
		this.DATA_CENTER_ID_SHIFT = this.SEQUENCE_BITS + this.WORKER_ID_BITS
		// 时间戳较数据中心ID的偏移量。值为：22
		this.TIMESTAMP_LEFT_SHIFT = this.SEQUENCE_BITS + this.WORKER_ID_BITS + this.DATA_CENTER_ID_BITS
		
		// 机器码ID的最大值。值为：31
		this.MAX_WORKER_ID = -1n ^ (-1n << this.WORKER_ID_BITS)
		// 数据中心ID最大值。值为：31
		this.MAX_DATA_CENTER_ID = -1n ^ (-1n << this.DATA_CENTER_ID_BITS)
		// 序列号最大值。值为：4095
		this.MAX_SEQUENCE = -1n ^ (-1n << this.SEQUENCE_BITS)
		
		// 初始化上一个时间戳
		this.LAST_TIMESTAMP = -1n
		// 初始化机器ID
		this.WORKER_ID = 1n
		// 初始化数据中心ID
		this.DATA_CENTER_ID = 1n
		// 初始化没毫秒内产生ID的序列号（可以理解为一个计数器，在 0 ~ 4095 之间）
		this.SEQUENCE = 0n
		
		// 判断初始化的机器码ID是否合法
		if ( this.WORKER_ID > this.MAX_WORKER_ID || this.WORKER_ID < 0 ) {
			throw new Error ('WORKER_ID 的最大值必须大于 0 且小于 MAX_WORKER_ID [' + this.MAX_WORKER_ID + ']')
		}
		
		// 判断初始化的中心ID是否合法
		if ( this.DATA_CENTER_ID > this.MAX_DATA_CENTER_ID || this.DATA_CENTER_ID < 0 ) {
			throw new Error ('DATA_CENTER_ID 必须最大大于 0 且小于 MAX_DATA_CENTER_ID [' + this.MAX_DATA_CENTER_ID + ']')
		}
		
		this.#workerId = BigInt (workerId)
		this.#dataCenterId = BigInt (dataCenterId)
		this.#sequence = BigInt (sequence)
	}
	
	/**
	 * 产生一个新的时间戳，并判断是否和上一个时间戳在同一个毫秒，如果是的话，生成下一个毫秒的时间戳
	 * >因为雪花算法产生的数据是在短时间内产生的，所以要用毫秒进行衡量数据是否重复。通过 nextId（）
	 * >产生的ID为 4096 个，如果达到 4096 个数据，那么就需要进入下一个毫秒内来改变获取时的时间戳
	 * @param lastTimestamp 上一个产生的时间戳
	 * @returns {bigint} 返回最新的时间戳，绝对不在上一个毫秒
	 */
	nextMilliSecond (lastTimestamp) {
		// 获取现在时刻的时间戳
		let timestamp = this.timesTamp ()
		
		// 判断新的时间戳是否在同一毫秒内，如果是继续进行循环获取，直到获取到下一个毫秒
		while ( timestamp <= lastTimestamp ) {
			timestamp = this.timesTamp ()
		}
		return BigInt (timestamp)
	}
	
	/**
	 * 生成新的时间戳
	 * @returns {bigint} 返回BigInt类型的时间戳
	 */
	timesTamp () {
		return BigInt (Date.now ())
	}
	
	/**
	 * 产生下一个ID
	 * - 一毫秒能产生 4096 个ID，如果超过这个数值会调用 nextMilliSecond（） 方法来创建新的ID，这一毫秒内不会产生ID，防止ID的重复
	 * - 发生时钟回拨问题会抛出异常
	 * @returns {number} 将通过或运算进行数字的组合并返回
	 */
	nextId = function () {
		// 产生一个新的时间戳
		let timestamp = this.timesTamp ()
		
		// 判断是否发生了时钟回拨
		if ( timestamp < this.LAST_TIMESTAMP ) {
			throw new Error ('发生时钟回拨，相差时间为： ' + (this.LAST_TIMESTAMP - timestamp))
		}
		
		// 如果在同一毫秒内生成的ID，通过生成不同序列号进行区分
		if ( this.LAST_TIMESTAMP === timestamp ) {
			
			/**
			 * 这里进行与运算，通过与运算的特性来判断是否达到了 4096 这个最大值
			 * 如果不是达到这个值，那么就可以将需要的数字进行返回，如果是的话返回的结果是 0
			 * 如果这里为 0 时，说明已经在这一毫秒内达到了最大的容量 ： 4096 ，需要进入下一毫秒继续获取
			 * 1 & 1 = 1 其他的结果都是 0
			 * 4095 和 其他数字的与结果：
			 *    4095 : 0000 0000 1111 1111 1111 1111
			 *    4096 : 0000 0001 0000 0000 0000 0000 -> 0000 0000 0000 0000 0000 0000
			 *    4094 : 0000 0000 1111 1111 1111 1110 -> 0000 0000 1111 1111 1111 1110
			 *    4093 : 0000 0000 1111 1111 1111 1101 -> 0000 0000 1111 1111 1111 1101
			 *    4092 : 0000 0000 1111 1111 1111 1100 -> 0000 0000 1111 1111 1111 1100
			 *    1 :    0000 0000 0000 0000 0000 0001 -> 0000 0000 0000 0000 0000 0001
			 *
			 * 可以看出：当 4095 和其他的数字进行与运算时，除了 4096 之外都输出原来的值，通过这个进行判断是否达到了 4096 这个最大值
			 */
			this.SEQUENCE = (this.SEQUENCE + 1n) & this.MAX_SEQUENCE
			
			// 判断是否达到了最大每毫秒内的最大序列数目
			if ( this.SEQUENCE === 0n ) {
				// 将现在的使用的时间戳传入，并返回新的时间戳
				timestamp = this.tilNextMillis (this.LAST_TIMESTAMP)
			}
			
		} else {
			// 如果新旧时间戳不相同，那么就代表是在不同的毫秒内生成的，所以直接将序列号清零
			this.SEQUENCE = 0n
		}
		
		// 将旧的时间戳进行刷新，保证是刚刚进行的那个
		this.LAST_TIMESTAMP = timestamp
		
		// 将数据按照一定的格式进行或运算，
		return ((timestamp - this.START_TIME) << this.TIMESTAMP_LEFT_SHIFT)
				| (this.DATA_CENTER_ID << this.DATA_CENTER_ID_SHIFT)
				| (this.WORKER_ID << this.WORKER_ID_SHIFT)
				| this.SEQUENCE
	}
}

// 直接使用版--------------------------------------------------

/**
 * 雪花算法
 * @param workerId 机器码ID
 * @param dataCenterId　数据中心ID
 * @param sequence 序列号
 * @constructor 产生一个新的对象，并可以调用这个对象的 nextID 方法产生新的　ID
 */
function Snowflake (workerId, dataCenterId, sequence) {
	this.START_TIME = 1288834974657n
	
	this.SEQUENCE_BITS = 12n
	this.WORKER_ID_BITS = 5n
	this.DATA_CENTER_ID_BITS = 5n
	
	this.WORKER_ID_SHIFT = this.SEQUENCE_BITS
	this.DATA_CENTER_ID_SHIFT = this.SEQUENCE_BITS + this.WORKER_ID_BITS
	this.TIMESTAMP_LEFT_SHIFT = this.SEQUENCE_BITS + this.WORKER_ID_BITS + this.DATA_CENTER_ID_BITS
	
	this.MAX_WORKER_ID = -1n ^ (-1n << this.WORKER_ID_BITS)
	this.MAX_DATA_CENTER_ID = -1n ^ (-1n << this.DATA_CENTER_ID_BITS)
	this.MAX_SEQUENCE = -1n ^ (-1n << this.SEQUENCE_BITS)
	
	this.LAST_TIMESTAMP = -1n
	this.WORKER_ID = 1n
	this.DATA_CENTER_ID = 1n
	this.SEQUENCE = 0n
	
	if ( this.WORKER_ID > this.MAX_WORKER_ID || this.WORKER_ID < 0 ) {
		throw new Error ('WORKER_ID 的最大值必须大于 0 且小于 MAX_WORKER_ID [' + this.MAX_WORKER_ID + ']')
	}
	if ( this.DATA_CENTER_ID > this.MAX_DATA_CENTER_ID || this.DATA_CENTER_ID < 0 ) {
		throw new Error ('DATA_CENTER_ID 必须最大大于 0 且小于 MAX_DATA_CENTER_ID [' + this.MAX_DATA_CENTER_ID + ']')
	}
	this.workerId = BigInt (workerId)
	this.dataCenterId = BigInt (dataCenterId)
	this.sequence = BigInt (sequence)
}

/**
 * 产生一个新的时间戳，并判断是否和上一个时间戳在同一个毫秒，如果是的话，生成下一个毫秒的时间戳
 * @param lastTimestamp 上一个产生的时间戳
 * @returns {bigint} 返回最新的时间戳，绝对不在上一个毫秒
 */
Snowflake.prototype.tilNextMillis = function (lastTimestamp) {
	let timestamp = this.timeGen ()
	while ( timestamp <= lastTimestamp ) {
		timestamp = this.timeGen ()
	}
	return BigInt (timestamp)
}

/**
 * 生成时间戳
 * @returns {bigint} 返回BigInt类型的时间戳
 */
Snowflake.prototype.timeGen = function () {
	return BigInt (Date.now ())
}

/**
 * 产生下一个ID
 * - 一毫秒能产生 4096 个ID，如果超过这个数值会通过产生新的时间戳并继续生成新的ID
 * - 发生时钟回拨问题会抛出异常
 * @returns {number} 将通过或运算进行数字的组合并返回
 */
Snowflake.prototype.nextId = function () {
	let timestamp = this.timeGen ()
	if ( timestamp < this.LAST_TIMESTAMP ) {
		throw new Error ('时间的向后移动，相差时间为： ' + (this.LAST_TIMESTAMP - timestamp))
	}
	if ( this.LAST_TIMESTAMP === timestamp ) {
		this.SEQUENCE = (this.SEQUENCE + 1n) & this.MAX_SEQUENCE
		if ( this.SEQUENCE === 0n ) {
			timestamp = this.tilNextMillis (this.LAST_TIMESTAMP)
		}
	} else {
		this.SEQUENCE = 0n
	}
	this.LAST_TIMESTAMP = timestamp
	return ((timestamp - this.START_TIME) << this.TIMESTAMP_LEFT_SHIFT)
			| (this.DATA_CENTER_ID << this.DATA_CENTER_ID_SHIFT)
			| (this.WORKER_ID << this.WORKER_ID_SHIFT)
			| this.SEQUENCE
}

// 直接使用 Class 语法糖实现----------------------------------------------
/**
 * 雪花算法
 */
class Snowflake {
	
	#workerId
	#dataCenterId
	#sequence
	
	/**
	 * 新建对象时传入的参数，作为生成ID的基本元素
	 * @param workerId 机器码ID
	 * @param dataCenterId　数据中心ID
	 * @param sequence 序列号
	 */
	constructor (workerId, dataCenterId, sequence) {
		this.START_TIME = 1288834974657n
		
		this.SEQUENCE_BITS = 12n
		this.WORKER_ID_BITS = 5n
		this.DATA_CENTER_ID_BITS = 5n
		
		this.WORKER_ID_SHIFT = this.SEQUENCE_BITS
		this.DATA_CENTER_ID_SHIFT = this.SEQUENCE_BITS + this.WORKER_ID_BITS
		this.TIMESTAMP_LEFT_SHIFT = this.SEQUENCE_BITS + this.WORKER_ID_BITS + this.DATA_CENTER_ID_BITS
		
		this.MAX_WORKER_ID = -1n ^ (-1n << this.WORKER_ID_BITS)
		this.MAX_DATA_CENTER_ID = -1n ^ (-1n << this.DATA_CENTER_ID_BITS)
		this.MAX_SEQUENCE = -1n ^ (-1n << this.SEQUENCE_BITS)
		
		this.LAST_TIMESTAMP = -1n
		this.WORKER_ID = 1n
		this.DATA_CENTER_ID = 1n
		this.SEQUENCE = 0n
		
		if ( this.WORKER_ID > this.MAX_WORKER_ID || this.WORKER_ID < 0 ) {
			throw new Error ('WORKER_ID 的最大值必须大于 0 且小于 MAX_WORKER_ID [' + this.MAX_WORKER_ID + ']')
		}
		if ( this.DATA_CENTER_ID > this.MAX_DATA_CENTER_ID || this.DATA_CENTER_ID < 0 ) {
			throw new Error ('DATA_CENTER_ID 必须最大大于 0 且小于 MAX_DATA_CENTER_ID [' + this.MAX_DATA_CENTER_ID + ']')
		}
		
		this.#workerId = BigInt (workerId)
		this.#dataCenterId = BigInt (dataCenterId)
		this.#sequence = BigInt (sequence)
	}
	
	/**
	 * 产生一个新的时间戳，并判断是否和上一个时间戳在同一个毫秒，如果是的话，生成下一个毫秒的时间戳
	 * @param lastTimestamp 上一个产生的时间戳
	 * @returns {bigint} 返回最新的时间戳，绝对不在上一个毫秒
	 */
	nextMilliSecond (lastTimestamp) {
		let timestamp = this.timestamp ()
		while ( timestamp <= lastTimestamp ) {
			timestamp = this.timestamp ()
		}
		return BigInt (timestamp)
	}
	
	/**
	 * 生成时间戳
	 * @returns {bigint} 返回BigInt类型的时间戳
	 */
	timestamp () {
		return BigInt (Date.now ())
	}
	
	/**
	 * 产生下一个ID
	 * - 一毫秒能产生 4096 个ID，如果超过这个数值会通过产生新的时间戳并继续生成新的ID
	 * - 发生时钟回拨问题会抛出异常
	 * @returns {number} 将通过或运算进行数字的组合并返回
	 */
	nextId = function () {
		let timestamp = this.timestamp ()
		if ( timestamp < this.LAST_TIMESTAMP ) {
			throw new Error ('发生时钟回拨，相差时间为： ' + (this.LAST_TIMESTAMP - timestamp))
		}
		if ( this.LAST_TIMESTAMP === timestamp ) {
			this.SEQUENCE = (this.SEQUENCE + 1n) & this.MAX_SEQUENCE
			if ( this.SEQUENCE === 0n ) {
				timestamp = this.tilNextMillis (this.LAST_TIMESTAMP)
			}
		} else {
			this.SEQUENCE = 0n
		}
		this.LAST_TIMESTAMP = timestamp
		return ((timestamp - this.START_TIME) << this.TIMESTAMP_LEFT_SHIFT)
				| (this.DATA_CENTER_ID << this.DATA_CENTER_ID_SHIFT)
				| (this.WORKER_ID << this.WORKER_ID_SHIFT)
				| this.SEQUENCE
	}
}

