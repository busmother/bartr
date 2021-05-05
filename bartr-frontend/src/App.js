import React, { Component } from 'react'
import Products from './components/Products.js'
import Cart from './components/Cart.js'
import './app-stylesheet.css'

class App extends Component {

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/products')
        .then(response => response.json())
        .then(data => console.log("data", data))
        .catch(error=>console.log("error", error))
    }

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
