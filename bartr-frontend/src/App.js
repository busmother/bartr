import React, { Component } from 'react'
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'


import Cart from './components/Cart.js'
import './app-stylesheet.css'
import PopUp from './components/PopUp'

import Products from './components/Products'
import { connect } from 'react-redux'
import { setStatus, logout } from "./actions/user"
import Button from './components/Button'
import LoginGate from './components/LoginGate'
import LoginComponent from './components/Login'



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

    componentDidMount = () => {
        this.props.setStatus()
        this.setState()
    }

    isString = (x) => {
        return Object.prototype.toString.call(x) === '[object String]'
    }

    greeting = () => {
        if (this.props.status === "resolved"){
            return (<h4>Hi {this.props.user.user}</h4>)
        }
    }

    render(){
        console.log("this.props from App", this.props)
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
                    <li className="nav-link"><Link to="/">Products </Link></li>
                    <li className="nav-link"><Link to="/cart">Cart </Link></li>
                    <li className="nav-link">Checkout</li>
                    <li className="nav-link"> Past Orders </li>
                    <li className="nav-link"><Button handleClick={() => logout()} label = "Logout" /></li>
                </ul>
                <br></br>
                </nav>
                <div className="main">
                <LoginGate />
                <Switch>
                    <Route path = '/login' component = {LoginComponent}/>
                    <Route path = '/cart' component = {Cart}/>
                    <Route path = '/products' component = {Products}/>
                </Switch>
            </div>
                <aside className="sidebar">
                <Cart togglePop={this.togglePop}/>
                </aside>
                <footer className="footer">
                    <p></p>
                </footer>
            </div>
            </Router>
        )
    }
}

export default connect((state) => {
    return { user: state.user }
}, {setStatus})(App);