import React, { Component } from 'react'
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'


import Cart from './components/Cart.js'
import './app-stylesheet.css'
import PopUp from './components/PopUp'

import ProductsContainer from './components/ProductsContainer'
import { connect } from 'react-redux'
import { clearOrders } from './actions/order'
import Button from './components/Button'
import LoginComponent from './components/Login'
import OrdersContainer from './components/OrdersContainer'
import Checkout from './components/Checkout'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        this.toggleLoginPop = this.toggleLoginPop.bind(this);
    }

    toggleLoginPop = () => {
        this.setState(state => ({
            loggedIn: !state.loggedIn
        }));
    }

    logoutSequence = () => {
        this.toggleLoginPop()
        this.props.clearOrders();
        this.props.clearItems();
        this.props.clearProducts();
        this.props.logout();
        
    }

    greeting = () => { 
        if (this?.props?.loggedIn == true){ 
                return (<h4>Hi {this?.props?.user?.user?.data?.attributes?.username}</h4>)
            }
        }

    render(){
        return(
            <Router>
            <div className="wrap">
                {this.props.loggedIn ?  null : <PopUp loggedIn = {this.props.loggedIn}/>}  
                <div className="header">
                    <h1>Bartr</h1>
                    {this.greeting()}
                </div>
                <nav className="nav">
                <br></br>
                <ul className="nav-list">
                    <li className="nav-link"><Link to="/products">Products </Link></li>
                    <li className="nav-link"><Link to="/cart">Cart </Link></li>
                    <li className="nav-link"><Link to="/checkout">Checkout</Link></li>
                    <li className="nav-link"><Link to="/past-orders">Past Orders</Link></li>
                    <li className="nav-link"><Button handleClick={() => {
                                                        this.logoutSequence(); 
                                                        }} 
                                                        label = "Logout" /></li>
                </ul>
                <br></br>
                </nav>
                <div className="main">
                <Switch>
                    <Route path = '/products' component = {ProductsContainer}/> 
                    <Route path = '/cart' component = {Cart}/>
                    <Route path = '/checkout' component = {Checkout}/>
                    <Route path = '/past-orders' component = {OrdersContainer}/>
                    <Route path = '/login' component = {LoginComponent}/>
                </Switch>
            </div>
                <aside className="sidebar">
                <Cart/>
                </aside>
                <footer className="footer">
                    <p></p>
                </footer>
            </div>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearOrders: () => dispatch({type: 'CLEAR_ORDERS'}),
        clearItems: () => dispatch({type: 'CLEAR_ITEMS'}),
        clearProducts: () => dispatch({type: 'CLEAR_PRODUCTS'}),
        logout: () => dispatch({type: 'LOGOUT'})
    }
 }

const mapStateToProps = state => {
    return {
        loggedIn: state?.user?.loggedIn,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);