/**
 * Time:2022/3/26 18:49 07
 * Name:index.jsx
 * Path:src/components/About
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function About () {
  const [sum, setSum] = useState(1)
  console.log(sum)
  return (
    <div>
      <h1>这个是 About 中的内容</h1>
      {sum === 2 ? <Navigate to="/home/"/> : <div>现在的数字是：{sum}</div>}
      <button onClick={() => {
        setSum(2)
      }}>点击将数字改变
      </button>
    </div>
  
  )
  
}
