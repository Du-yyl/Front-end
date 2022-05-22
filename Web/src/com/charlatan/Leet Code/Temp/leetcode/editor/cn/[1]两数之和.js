// Time: 2022-04-22 20:13:03	
// topic: 1、two-sum【两数之和】
// Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let maps = new Map()
    for (let i = 0, len = nums.length; i < len; i++) {
        if (maps.has(target - nums[i])) return [maps.get(target - nums[i]), i]
        maps.set(nums[i], i)
    }
}
//leetcode submit region end(Prohibit modification and deletion)
console.log(solution2([3, 2, 4], 6))

/**
 * 通过 `双重for循环` 进行暴力解决
 * @param{number} nums 要进行查找的数组
 * @param{number} target 要找的目标元素
 * @return {(number|number)[]} 将查找的结果按照数组的形式进行返回
 */
function solution1 (nums, target) {
    // 将数组长度进行提取
    let length = nums.length
    // 使用双重 for 循环，将所有内容进行遍历
    for (let i = 0; i < length; i++) {
        // 因为如果两个数字相等，即使等于结果那么也不满足要求，所以直接在 i 下标加一的时候再开始进行遍历提高效率
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

/**
 * 通过 `Map` 进行处理
 * - 先声明一个数据保存已经遍历的结果
 * - 将数组进行循环，并将每一次 `目标数字` 和 `当前循环数字` 的相减结果进行计算，并在 Map 中进行查找
 * - 如果存在找到这个元素的下标并返回，和本次的循环下标一起返回
 * - 反之，将这次循环的数字保存在 Map 中，交给下一次循环查找使用
 * @param nums 要遍历的数组
 * @param target 要找的目标元素
 * @return {(any|number)[]} 找到结果后返回的内容
 */
function solution2 (nums, target) {
    // 创建一个 Map 通过 Map 存储计算的结果和要匹配的数据
    let maps = new Map()
    // 将所有的内容进行循环
    for (let i = 0, len = nums.length; i < len; i++) {
        // 计算插值，查看 Map 中是否已经遍历过这个元素了
        let diff = target - nums[i]
        // 如果 Map 中已经有了要找的数据
        if (maps.has(diff)) {
            // 如果存在，获取到当时存储的下标进行返回，并将这次遍历的下标作为第二个数组元素进行返回处理
            return [maps.get(diff), i]
        } else {
            // 如果不存在，那么证明是第一次遍历，将遍历的内容和下标保存在 Map 中
            maps.set(nums[i], i)
        }
    }
}
