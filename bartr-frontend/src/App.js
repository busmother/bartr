import React, { Component } from 'react'
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'


import Cart from './components/Cart.js'
import './app-stylesheet.css'
import PopUp from './components/PopUp'

import ProductsContainer from './components/ProductsContainer'
import { connect } from 'react-redux'
import { setStatus, logout } from "./actions/user"
import { clearOrders } from './actions/order'
import { openPopUp } from './actions/popUp'
import Button from './components/Button'
import LoginComponent from './components/Login'
import OrdersContainer from './components/OrdersContainer'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            user: {
                status: "idle"
            }
        };
        this.togglePop = this.togglePop.bind(this);
    }

    togglePop = () => {
        this.setState(state => ({
            open: !state.open
        }));
    }

    componentWillMount = () => {
        this.props.setStatus()
        this.setState()
    }

    // componentDidUpdate = (preprops) => {
    //     if (preprops.user.user.status !== this.props.user.user.status){
    //         this.props.clearOrders()
    //     }
    // }

    componentWillReceiveProps = () => {
        if (this.props.user.status !== "resolved"){
        this.togglePop();
        }
    }

    greeting = () => {
        if (this.props.user?.status && this.props.user.status === "resolved"){
                return (<h4>Hi {this.props.user.user.username}</h4>)
            }
        }

    render(){
        return(
            <Router>
            <div className="wrap">
                {this.state.open ? <PopUp open={this.state.open} /> : null }  
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
                                                        this.props.logout(); 
                                                        this.props.clearOrders();
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
        logout: () => dispatch({type: 'logout'}),
        openPopUp: () => dispatch({type: 'OPEN'}),
        setStatus,
        clearOrders
    }
 }


export default connect((state) => {
    return { user: state.user }
}, mapDispatchToProps)(App);