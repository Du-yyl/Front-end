// Time: 2022-04-22 20:13:27	
// topic: 2、add-two-numbers【两数相加】
// Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let num1 = []
    let num2 = []
    for (let i = 0, len = l1.length; i < len; i++) {
        num1.push(l1[len - i - 1])
    }
    num1 = num1.join('')
    for (let i = 0, len = l2.length; i < len; i++) {
        num2.push(l2[len - i - 1])
    }
    num2 = num2.join('')
    let ans = num1 * 1 + num2 * 1
    let answ = []
    for (const sElement of ans + '') {
        answ.push(sElement)
    }
    return answ
}

//leetcode submit region end(Prohibit modification and deletion)


