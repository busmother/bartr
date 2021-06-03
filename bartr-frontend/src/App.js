import React, { Component } from 'react'
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'


import Cart from './components/Cart.js'
import './app-stylesheet.css'
import ProductsContainer from './components/ProductsContainer'
import PopUp from './components/PopUp'
import Login from './components/Login'
import { connect } from 'react-redux'
import { setStatus, logout } from "./actions/user"


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

    displayLogin = () => {

        if(this.props.user.status === "idle"){
            return <Login></Login>
        }if(this.props.user.status === "pending"){
            return <div>Loading...</div>
        }if(this.props.user.status === "resolved"){
            return (
            <div>
                <p>
                Welcome {this.props.username}
                </p>
                <button onClick={this.logout}>Logout</button>
            </div>
            );
        }if(this.props.user.status === "rejected"){
            return <div>Oops you're not logged in</div>
        }else{
            return <div>This is the footer</div>
        }
    }

    componentDidMount = () => this.props.setStatus()
    //what other lifecycle events could do this? 
    //componentDidUpdate creates infinite loop, can it take conditions?


    render(){
        console.log("this.props.user", this.props.user)
        return (
            <Router>
            <div className="wrap">
                {this.state.open ? <PopUp open={this.state.open} /> : null }  
                <div className="header">
                    <h1>Bartr</h1>
                    <h2>Hi {this.props.user.username.username}</h2> 
                    {/* ^this only updates when you refresh, so this info needs a condition and componentDidUpdate */}
                </div>
                <nav className="nav">
                <br></br>
                <ul className="nav-list">
                    <li className="nav-link"><Link to="/">Products </Link></li>
                    <li className="nav-link"><Link to="/cart">Cart </Link></li>
                    <li className="nav-link">Checkout</li>
                    <li className="nav-link"> Past Orders </li>
                    <li className="nav-link"><Link to="/login">Logout</Link></li>
                </ul>
                <br></br>
                </nav>
                <div className="main">
                <Switch>
                    <Route path = '/login' component = {Login}/>
                    <Route path = '/cart' component = {Cart}/>
                    <Route path = '/' component = {ProductsContainer}/>
                </Switch>
            </div>
                <aside className="sidebar">
                <Cart togglePop={this.togglePop}/>
                </aside>
                <footer className="footer">
                    <div>{this.displayLogin()}</div>
                </footer>
            </div>
            </Router>
        )
    }
}

export default connect((state) => {
    return { user: state.userReducer.user }
}, {setStatus})(App);