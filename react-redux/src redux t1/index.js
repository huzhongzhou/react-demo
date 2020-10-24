import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'




ReactDOM.render(<App store={store}/>, document.getElementById('root'));

function render(){
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));

}
render()
//订阅监听（store中的状态变化了，就会自动调用进行重绘）
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
