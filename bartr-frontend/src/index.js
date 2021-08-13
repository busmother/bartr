import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index'

import App from './App';
import AppFunctional from './AppFunctional'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

let store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(

    <Provider store={store}>
        <AppFunctional />
    </Provider>
, 
document.getElementById('root'));