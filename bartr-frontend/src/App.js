import React, { Component } from 'react'
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Cart from './components/Cart.js'
import './app-stylesheet.css'
import ProductsContainer from './components/ProductsContainer'
import PopUp from './components/PopUp'


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
                <br></br>
                </nav>
                <div className="main"> 
                <Switch>
                    <Route path = '/cart' component = {Cart}/>
                    <Route path = '/' component = {ProductsContainer}/>
                </Switch>
                    {/* <ProductsContainer addToCart={this.addToCart}/>  */}
                </div>
                <aside className="sidebar">
                <Cart togglePop={this.togglePop}/>
                </aside>
                <footer className="footer">
                    Footer
                </footer>
            </div>
            </Router>
        )
    }
}

export default App;