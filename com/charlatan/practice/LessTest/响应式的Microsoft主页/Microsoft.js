/**
 * Time:2022/1/15 21:32 54
 * Name:Microsoft.js
 * Path:Web代码/src/com/charlatan/practice/LessTest/响应式的Microsoft主页
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// heard
let header_center = document.getElementById ('heard-center')
let header_right_all = document.getElementById ('heard-right-all-div')
let header_right_all_show = document.getElementById ('heard-right-all-show')
let header_right_search_div = document.getElementById ('heard-right-search-div')
let header_right_search = document.getElementById ('heard-right-search')
let header_right_search_span = document.getElementById ('heard-right-search-span')
let header_right_input = document.getElementById ('heard-right-search-input')
let header_right_shopping = document.getElementById ('heard-right-shop')
let header_right_user = document.getElementById ('heard-right-user')
let header_right_all_img = document.getElementById ('heard-right-all-img')
let h_r_s_flag = true
let h_r_l_flag = true
let document_flag = false

header_right_all.onclick = function () {
	if ( h_r_l_flag ) {
		header_right_all_show.style.width = '60rem'
		h_r_l_flag = false
		header_right_all_img.src = 'file/arrow-top.png'
		document.onclick = heard_right_all_onclick
	} else {
		header_right_all_show.style.width = '0'
		document.onclick = null
		h_r_l_flag = true
		header_right_all_img.src = 'file/arrow-bottom.png'
	}
}

header_right_all_show.onclick = function () {
	document.onclick = null
	setTimeout (function () {
		document.onclick = heard_right_all_onclick
	}, 50)
}

function heard_right_all_onclick () {
	if ( document_flag ) {
		header_right_all_show.style.width = '0'
		h_r_l_flag = true
		document.onclick = null
		document_flag = false
		header_right_all_img.src = 'file/arrow-bottom.png'
	} else {
		header_right_all_show.style.width = '60rem'
		h_r_l_flag = false
		header_right_all_img.src = 'file/arrow-top.png'
		document_flag = true
	}
}

header_right_search_div.onclick = function () {
	if ( h_r_s_flag ) {
		header_right_search.classList.add ('heard-right-search-show')
		header_right_input.focus ()
		header_center.style.display = 'none'
		header_right_search_span.style.display = 'none'
		h_r_s_flag = false
		header_right_all.style.display = 'none'
		header_right_shopping.style.display = 'none'
		header_right_user.style.display = 'none'
	}
}
header_right_input.onblur = function () {
	header_right_search.classList.remove ('heard-right-search-show')
	header_center.style.display = 'flex'
	h_r_s_flag = true
	header_right_search_span.style.display = 'inline'
	header_right_all.style.display = 'block'
	header_right_shopping.style.display = 'block'
	header_right_user.style.display = 'block'
	
}
