import React, { Component } from 'react'
import Products from './components/Products.js'
import Cart from './components/Cart.js'
import './app-stylesheet.css'

class App extends Component {
    render(){
        return (
            <div className="wrap">
                <div className="header">
                    <h1>Bartr</h1>
                </div>
                <nav className="nav">
                    Nav
                </nav>
                <div className="main"> 
                    <Products />    
                </div>
                <aside className="sidebar">
                    <Cart/>
                </aside>
                <footer className="footer">
                    Footer
                </footer>
            </div>
        )
    }
}

export default App
