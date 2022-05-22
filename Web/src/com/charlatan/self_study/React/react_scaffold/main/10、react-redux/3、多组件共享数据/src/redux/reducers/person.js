/**
 * Time:2022/3/28 16:20 31
 * Name:person.js
 * Path:src/redux/reducers
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import { ADD_PERSON } from '../constant'

const initState = [
    { name: '123', age: 1, id: 1 },
]

export default function person (preState = initState, action) {
    const { type, data } = action
    
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
    
}

