/**
 * Time:2022/3/28 16:20 27
 * Name:person.js
 * Path:src/redux/actions
 * ProjectName:react_scaffold
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import { ADD_PERSON } from '../constant'

const createAddPersonAction = (data) => {
    return {
        type: ADD_PERSON,
        data,
    }
}

export {
    createAddPersonAction,
}
