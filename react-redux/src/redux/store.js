import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {counter} from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const store =createStore(counter, 
    composeWithDevTools(applyMiddleware(thunk))
    ) //后面应用方法时调用结果
//应用异步中间件
export default store