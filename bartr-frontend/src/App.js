import React, { Component } from 'react'
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'

import Cart from './components/Cart.js'
import './app-stylesheet.css'
import ProductsContainer from './components/ProductsContainer'
import PopUp from './components/PopUp'
import Login from './components/Login'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.togglePop = this.togglePop.bind(this);
    }

    togglePop = () => {
        this.setState(state => ({
            open: !state.open
        }));
    }

    displayLogin = () => {
        if(this.props.status === "idle"){
            return <Login></Login>
        }if(this.props.status === "pending"){
            return <div>Loading...</div>
        }if(this.props.status === "resolved"){
            return <div>You're signed in!</div>
        }if(this.props.status === "rejected"){
            return <div>Oops you're not logged in</div>
        }else{
            return <div>This is the footer</div>
        }
    }

    render(){
        
        return (
            <Router>
            <div className="wrap">
                {this.state.open ? <PopUp open={this.state.open} /> : null }  
                <div className="header">
                    <h1>Bartr</h1>
                </div>
                <nav className="nav">
                <br></br>
                <Link to="/">Products </Link>
                <Link to="/cart">Cart </Link>
                Shipping info 
                Checkout 
                Switch user
                <br></br>
                </nav>
                <div className="main"> 
                <Switch>
                    <Route path = '/cart' component = {Cart}/>
                    <Route path = '/' component = {ProductsContainer}/>
                </Switch>
                </div>
                <aside className="sidebar">
                <Cart togglePop={this.togglePop}/>
                </aside>
                <footer className="footer">
                    <p>{this.displayLogin}</p>
                </footer>
            </div>
            </Router>
        )
    }
}

export default App;