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
<<<<<<< HEAD
=======
import { loading } from './utils/utils'
>>>>>>> 6e28a2c21affc19e8c72e18097ac8e5efa16ee48
import { Provider } from './utils/melody-redux'

function App (){
    return (
<<<<<<< HEAD
        <Provider store={store}>
=======
        <Provider store={store} utils={{loading}}>
>>>>>>> 6e28a2c21affc19e8c72e18097ac8e5efa16ee48
            <Home />
        </Provider>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App />,root);