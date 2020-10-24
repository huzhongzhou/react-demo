import { INCREMENT, DECREMENT } from "./actiontypes";

//包含所有的action creator，创建action的函数

export const increment =(num)=>({
    type:INCREMENT, data:num
})
export const decrement =(num)=>({
    type:DECREMENT, data:num
})