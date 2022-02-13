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
    
    if (this.WORKER_ID > this.MAX_WORKER_ID || this.WORKER_ID < 0) {
      throw new Error('WORKER_ID 的最大值必须大于 0 且小于 MAX_WORKER_ID [' + this.MAX_WORKER_ID + ']')
    }
    if (this.DATA_CENTER_ID > this.MAX_DATA_CENTER_ID || this.DATA_CENTER_ID < 0) {
      throw new Error('DATA_CENTER_ID 必须最大大于 0 且小于 MAX_DATA_CENTER_ID [' + this.MAX_DATA_CENTER_ID + ']')
    }
    
    this.#workerId = BigInt(workerId)
    this.#dataCenterId = BigInt(dataCenterId)
    this.#sequence = BigInt(sequence)
  }
  
  /**
   * 产生一个新的时间戳，并判断是否和上一个时间戳在同一个毫秒，如果是的话，生成下一个毫秒的时间戳
   * @param lastTimestamp 上一个产生的时间戳
   * @returns {bigint} 返回最新的时间戳，绝对不在上一个毫秒
   */
  nextMilliSecond (lastTimestamp) {
    let timestamp = this.timestamps()
    while (timestamp <= lastTimestamp) {
      timestamp = this.timestamps()
    }
    return BigInt(timestamp)
  }
  
  /**
   * 生成时间戳
   * @returns {bigint} 返回BigInt类型的时间戳
   */
  timestamps () {
    return BigInt(Date.now())
  }
  
  /**
   * 产生下一个ID
   * - 一毫秒能产生 4096 个ID，如果超过这个数值会通过产生新的时间戳并继续生成新的ID
   * - 发生时钟回拨问题会抛出异常
   * @returns {number} 将通过或运算进行数字的组合并返回
   */
  nextId = function () {
    let timestamp = this.timestamps()
    if (timestamp < this.LAST_TIMESTAMP) {
      throw new Error('发生时钟回拨，相差时间为： ' + (this.LAST_TIMESTAMP - timestamp))
    }
    if (this.LAST_TIMESTAMP === timestamp) {
      this.SEQUENCE = (this.SEQUENCE + 1n) & this.MAX_SEQUENCE
      if (this.SEQUENCE === 0n) {
        timestamp = this.tilNextMillis(this.LAST_TIMESTAMP)
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

module.exports = Snowflake
