/*
 * @Date: 2019-08-24 00:42:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-24 03:03:51
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
// import { Provider } from './utils/Store'
import store from './utils/Store'
import * as plugin from './utils/plugin'
import { Provider } from './utils/melody-redux'

function App (){
    return (
        <Provider store={store} plugin={plugin}>
            <Home />
        </Provider>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App />,root);