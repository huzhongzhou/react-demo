

//根据指定的reducer函数创建一个store对象并返回
export function createStore(reducer){
    //用来存储监听state更新回调的数组中
    const listeners = []
    //用来存储内部状态的数据变量
    let state =reducer()
    //返回当前内部的state数据
    function getState(){
        return state
    }
    //分发action，触发reducer调用，产生新state
    function dispatch(action){
        const newstate = reducer(state,action)
        state=newstate
        listeners.forEach(listener=>listener())
    }
    //绑定内部state更新的监听回调,可以给一个store绑定多个监听
    function subscribe(listener){
        保存到缓存listener的容器数组中
        listeners.push(listener)
    }
    return {
        getState,
        dispatch,
        subscribe,
    }
}
//整合传入参数对象中的多个reducer函数，返回一个新的reducer
//新的reducer管理的总状态是一个对象：{} //内部是每个子reducer的状态
export function combinReducers(reducers){
 return  (state,action)=>{

 }
}