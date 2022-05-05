/**
 * Date:2022/1/10 19:58 35
 * Name:获取滚动条高度.js
 * Path:Web代码/src/com/charlatan/MyTools
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
function getScrollTop () {
	let scroll_top = 0
	if ( document.documentElement && document.documentElement.scrollTop ) {
		scroll_top = document.documentElement.scrollTop
	} else if ( document.body ) {
		scroll_top = document.body.scrollTop
	}
	return scroll_top
}
