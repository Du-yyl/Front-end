import React from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Time:2022/3/29 21:52 37
 * Name:index.jsx
 * Path:src/components/Heard
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

export default function Heard () {
    const navigate = useNavigate()
    
    return (
        <div>
            <div className="page-header"><h2>React Router Demo</h2></div>
            <button onClick={() => {
                navigate(-1)
            }}>后退
            </button>
            <button onClick={() => {
                navigate(1)
            }}>前进
            </button>
        </div>
    
    )
}
