/* 包含多个reducer函数的模块（对象） */
import {INCREMENT,DECREMENT} from './actiontypes'
export function counter(state =0,action){
    switch(action.type){
        case INCREMENT:
        return state+action.data
        case DECREMENT:
        return state-action.data
        default:
            return state
    }
}