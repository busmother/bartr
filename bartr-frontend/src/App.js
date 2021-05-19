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

    render(){
        console.log("state in App", this.state)
        return (
            <div className="wrap">
                <div className="header">
                    <h1>Bartr</h1>
                </div>
                <nav className="nav">
                {this.state.open ? <PopUp open={this.state.open} /> : null }  
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