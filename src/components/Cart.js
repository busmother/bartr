import React, { Component } from 'react'
import Button from './Button.js'

class Cart extends Component {

    render(){

        return(
            <div>
                <p>Hi there! I'm the cart!</p>
                <Button label="Checkout"/>
            </div>
        )
    }
}

export default Cart