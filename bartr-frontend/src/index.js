import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import combineReducers from './reducers/index'

import App from './App';
import LoginComponent from './components/Login'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

let store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(

    <Provider store={store}>
        {/* <Router props={props}>
        {(function() {
            if (window.localStorage['username'] === ''){
                return (<LoginComponent />)
            }else{
                return (<App />)
            }
        })()}
        </Router> */}
        <App />
    </Provider>
, 
document.getElementById('root'));