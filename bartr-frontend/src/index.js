import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index'

import App from './App';
import Login from './components/Login'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

let store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk)))


// const loggedIn = () => {
//     window.localStorage['username'] === 'undefined' ? <Login /> : <App />
// }

// isAUserLoggedIn = () => {
//     if (window.localStorage['username'] === 'undefined') {
//         return <Login />;
//     } else {
//         return <App />
//     }
// }


ReactDOM.render(
    <Provider store={store}>
            <App />
            {/* {this.isAUserLoggedIn} */}
            {/* <loggedIn /> */}
    </Provider>
, 
document.getElementById('root'));