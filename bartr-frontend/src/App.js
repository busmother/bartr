import React, { Component } from 'react'
import Cart from './components/Cart.js'
import './app-stylesheet.css'
import ProductsContainer from './components/ProductsContainer.js'


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
            <div className="wrap">
                <div className="header">
                    <h1>Bartr</h1>
                </div>
                <nav className="nav">
                    Nav
                </nav>
                <div className="main"> 
                    <ProductsContainer addToCart={this.addToCart}/>   
                </div>
                <aside className="sidebar">
                    <Cart open={this.open} togglePop={this.togglePop}/>
                </aside>
                <footer className="footer">
                    Footer
                </footer>
            </div>
        )
    }
}

export default App;