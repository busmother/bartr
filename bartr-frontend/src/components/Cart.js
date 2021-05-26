import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import Button from './Button.js'

const items = [
    {id: 1, name: `insulin`, price: `everything at a price`}
]

class Cart extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.togglePop()
    }

    render(props){
        return(
            <div>
                <p className="cart-header"> Hi there! I'm the cart!</p>
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
                <Button handleClick={this.handleClick} label="Checkout"/>
            </div>
        )
    }
}

export default Cart