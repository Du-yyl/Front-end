/**
 * Time:2022/3/28 16:08 19
 * Name:index.jsx
 * Path:src/containers/Person
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'
import { nanoid } from 'nanoid'

class Person extends Component {
    nameRef = React.createRef()
    ageRef = React.createRef()
    
    render () {
        console.log(this.props)
        return (
            <div id="Person">
                名字：<input type="text" ref={this.nameRef} placeholder="输入名字"/>
                年龄：<input type="text" ref={this.ageRef} placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.person.map((item) => {
                            return <li key={item.id}>
                                名字：{item.name}
                                年龄：{item.age}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    
    addPerson = () => {
        let name = this.nameRef.current.value.trim()
        let age = this.ageRef.current.value.trim()
        if (name === '' || age === '') {
            console.log('输入不能为空')
            this.nameRef.current.value = ''
            this.ageRef.current.value = ''
        } else {
            
            this.props.addPerson({
                name, age, id: nanoid(),
            })
            
        }
    }
}

// 这里原来将内容直接保存在 state 对象中，并且将这个对象直接进行了赋值 返回，但是如果是多个对象时，需要将需要的内容拆出来
export default connect(
    state => {
        console.log('--------------', state)
        return { person: state.person, count: state.count }
    },
    {
        addPerson: createAddPersonAction,
    },
)(Person)
