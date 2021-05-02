import React, { Component } from 'react'
import Products from './components/Products.js'
import Cart from './components/Cart.js'

class App extends Component {
    render(){
        return (
            <div>
                Bartr
                <Products />
                <Cart/>
            </div>
        )
    }
}

export default App
