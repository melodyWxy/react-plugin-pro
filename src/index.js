/*
 * @Date: 2019-08-24 00:42:05
 * @LastEditors: melodyWxy
 * @LastEditTime: 2019-08-24 01:24:21
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
// import { Provider } from './utils/Store'
import store from './utils/Store'
import utils from './utils/utils'
import { Provider } from './utils/melody-redux'

function App (){
    return (
        <Provider store={store} utils={utils}>
            <Home />
        </Provider>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App />,root);