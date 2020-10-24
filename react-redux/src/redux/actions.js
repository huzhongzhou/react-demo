import { INCREMENT, DECREMENT } from "./actiontypes";

//包含所有的action creator，创建action的函数

export const increment =(num)=>({
    type:INCREMENT, data:num
})
export const decrement =(num)=>({
    type:DECREMENT, data:num
})
//异步action
export const incrementAsync =(number)=>{
    return dispatch =>{
        setTimeout(() => {
            dispatch(increment(number))   
        }, 1000);
    }
}
//同步Action返回对象， 异步action返回函数