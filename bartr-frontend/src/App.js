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
        this.props.clearOrders(); // changes state to orders = [] 
        // need a clearItems() function too to clear the cart
        this.props.logout(); //sets status to idle
        
    }

    greeting = () => { 
        if (this.props?.loggedIn && this.props.user.username){ 
                return (<h4>Hi {this?.props?.user?.user?.data?.attributes?.username}</h4>)
            }
        }

    render(){
        console.log("this.props from App", this.props)
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
                    <li className="nav-link">Checkout</li>
                    <li className="nav-link"> <Link to="/orders">Past Orders</Link></li>
                    <li className="nav-link"><Button handleClick={() => {
                                                        this.logoutSequence(); 
                                                        }} 
                                                        label = "Logout" /></li>
                </ul>
                <br></br>
                </nav>
                <div className="main">
                <Switch>
                    <Route path = '/cart' component = {Cart}/>
                    <Route path = '/products' component = {ProductsContainer}/>
                    <Route path = '/orders' component = {OrdersContainer}/>
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
        logout: () => dispatch({type: 'LOGOUT'}),
        clearOrders: () => dispatch({type: 'CLEAR_ORDERS'})
    }
 }

const mapStateToProps = state => {
    return {
        loggedIn: state?.user?.loggedIn,
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);