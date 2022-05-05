/**
 * 数组内容反向相加
 * @param l1
 * @param l2
 * @return {*[]}
 */
function solution1 (l1, l2) {
	let arr1
	let arr2
	if ( l1.length >= l2.length ) {
		arr1 = l1
		arr2 = l2
	} else {
		arr1 = l2
		arr2 = l1
	}
	let residue = 0
	for ( let i = arr1.length - 1, j = arr2.length - 1; i >= 0; --i, --j ) {
		let add = arr1[i] + (arr2[j] || 0) + residue
		if ( add >= 10 ) {
			residue = Math.floor (add / 10)
			arr1[i] = add % 10
			if ( !i ) arr1.unshift (1)
		} else {
			arr1[i] = add
		}
	}
	let arr = []
	for ( let i = 0, len = arr1.length; i < len; i++ ) {
		arr[i] = arr1[len - 1 - i]
	}
	return arr
}

// console.log(solution1([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4]))
console.log (solution1 ([2, 4, 3], [5, 6, 4]))
// 807
// console.log(solution1([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))
// [8,9,9,9,0,0,0,1]
// 10009998
//     9, 9, 9, 9, 9, 18, 18, 18, 18
//  1, 0, 0, 0, 0, 0,  9,  9,  9,  8
console.log ()
// [2,4,3]
// [5,6,4]
