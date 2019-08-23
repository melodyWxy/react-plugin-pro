/*
 * @Date: 2019-08-24 00:42:05
 * @LastEditors: melodyWxy
 * @LastEditTime: 2019-08-24 00:51:24
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
// import { Provider } from './utils/Store'
import store from './utils/Store'
import { Provider } from './utils/melody-redux'

function App (){
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App />,root);