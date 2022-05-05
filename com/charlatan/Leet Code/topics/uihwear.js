/**
 * Time:2022/4/23 22:05 56
 * Name:uihwear.js
 * Path:topics
 * ProjectName:Leet Code
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

var ListNode = function (l1, l2) {
	let head = null, tail = null
	let carry = 0
	while ( l1 || l2 ) {
		const n1 = l1 ? l1.val : 0
		const n2 = l2 ? l2.val : 0
		const sum = n1 + n2 + carry
		if ( !head ) {
			head = tail = new ListNode (sum % 10)
		} else {
			tail.next = new ListNode (sum % 10)
			tail = tail.next
		}
		carry = Math.floor (sum / 10)
		if ( l1 ) {
			l1 = l1.next
		}
		if ( l2 ) {
			l2 = l2.next
		}
	}
	if ( carry > 0 ) {
		tail.next = new ListNode (carry)
	}
	return head
}
console.log (ListNode ([9, 9, 9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))
