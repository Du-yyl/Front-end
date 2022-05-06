/**
 * Time:2022/3/24 21:44 38
 * Name:index.jsx
 * Path:src/components/Welcome
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import css from './index.module.css'

export default class Welcome extends Component {
    
    render () {
        return (
            <div className={css.title}>
                欢迎来到，React 测试你好
            </div>
        )
    }
    
}
