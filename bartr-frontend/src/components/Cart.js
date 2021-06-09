import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { CSSTransition } from 'react-transition-group'

import './cart-stylesheet.css'
import Button from './Button.js'

const items = [
    {id: 1, name: `insulin`, price: `everything at a price`}
]

class Cart extends Component {

    handleClick = (e) => {
        e.preventDefault();
        // update this to initiate a checkout instead
        console.log("you clicked the checkout button!")
    }

    render(props){
        return(
            <div>
                <p className="cart-header"> Hi there! I'm the cart!</p>
                <CSSTransition transitionName="animation">
                <ul>
                {items.map((item) => (
                    <Grid
                    item
                    key={item.id}
                    >
                        <li>{item.name} - {item.price}</li>
                    </Grid>

                ))}
                </ul>
                </CSSTransition>
                <Button handleClick={this.handleClick} label="Checkout"/>
            </div>
        )
    }
}

export default Cart