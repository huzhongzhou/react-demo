import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import {Provider} from 'react-redux'




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById('root'));


    



//订阅监听（store中的状态变化了，就会自动调用进行重绘）

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
