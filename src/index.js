/*
 * @Date: 2019-08-24 00:42:05
 * @LastEditors: melodyWxy
 * @LastEditTime: 2019-08-26 13:44:39
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
// import { Provider } from './utils/Store'
import store from './utils/Store'
import  plugins from './utils/plugins';
import { Provider } from './utils/melody-redux'

function App (){
    return (
        <Provider store={store} plugins={plugins}>
            <Home />
        </Provider>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App />,root);