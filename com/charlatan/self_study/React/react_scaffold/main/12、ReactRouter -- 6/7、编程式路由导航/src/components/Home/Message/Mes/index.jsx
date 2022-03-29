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
  let state = useLocation().state
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
