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
import { useMatch, useParams } from 'react-router-dom'

export default function Mes () {
    // 使用指定的钩子接收参数
    let params = useParams()
    
    // 使用这个钩子也能拿到数据，数据必须是完整路径，不过不常用
    let match = useMatch('/home/message/mes/:id/:title/:context')
    console.log(match)
    return (
        <ul>
            <li>
                id:{params.id}
            </li>
            <li>
                title:{params.title}
            </li>
            <li>
                context:{params.context}
            </li>
        </ul>
    )
}
