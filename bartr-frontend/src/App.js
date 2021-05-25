import React, { Component } from 'react'
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

    addToCart = () => {
        const configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
    
            body: JSON.stringify({ 
                "product_id": //the current product id that we're clicking
                "order_id": recipient_id,
            })
        }
    }

    render(){
        
        return (
            <div className="wrap">
                {this.state.open ? <PopUp open={this.state.open} /> : null }  
                <div className="header">
                    <h1>Bartr</h1>
                </div>
                <nav className="nav">
                <br></br>
                </nav>
                <div className="main"> 
                    <ProductsContainer addToCart={this.addToCart}/> 
                </div>
                <aside className="sidebar">
                    <Cart togglePop={this.togglePop}/>
                </aside>
                <footer className="footer">
                    Footer
                </footer>
            </div>
        )
    }
}

export default App;