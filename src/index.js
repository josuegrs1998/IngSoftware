import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css'
import { Provider } from 'unistore/react'
import store from './store'

const app = document.getElementById('root')
ReactDOM.render( 
<Provider store={store} > 
    <App/>
</Provider>
, app)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
