/**
 * Time:2022/3/29 17:01 39
 * Name:index.jsx
 * Path:src/components/Home/Message/Message
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Mes () {
    // params 参数
    // 使用指定的钩子接收参数
    // let params = useParams()
    
    // // search 参数，通过 useSearchParams 进行获取，并通过 get（value） 获取指定内容
    // let [search,setSearch] = useSearchParams()
    // // setSearch 用于更新收到的 search 参数
    // setTimeout(() => {
    //   setSearch('id=123&title=qwe&context=asdf')
    // },1000)
    // // 也能使用 useLocation 拿到指定内容，因为 search 本质就是从 Location 拿到的
    // console.log(useLocation())
    
    let state = useLocation().state
    console.log(state)
    return (
        <ul>
            <li>
                id:{state.id}
            </li>
            <li>
                title:{state.title}
            </li>
            <li>
                context:{state.context}
            </li>
        </ul>
    )
}
