import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import Button from './Button.js'

const items = [
    {id: 1, name: `insulin`, price: `everything at a price`}
]

class Cart extends Component {

    handleClick = (e) => {
        e.preventDefault()
        console.log("you clicked the checkout button")
    }

    render(){


        return(
            <div>
                <p>Hi there! I'm the cart!</p>
                <ul>
                {items.map((item) => (
                    <Grid
                    item
                    key={item.id}
                    >
                        <li>{item.name}, {item.price}</li>
                    </Grid>

                ))}
                </ul>
                <Button handleClick={this.handleClick} label="Checkout"/>
            </div>
        )
    }
}

export default Cart