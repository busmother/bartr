import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { CSSTransition } from 'react-transition-group'

import './cart-stylesheet.css'
import Button from './Button.js'
import { connect } from 'react-redux'
import { fetchItems } from '../actions/item'
import { fetchCurrentOrder } from '../actions/user'

const items = [
    {id: 1, name: `insulin`, price: `everything at a price`}
]

class Cart extends Component {

    handleClick = (e) => {
        e.preventDefault();
        // update this to initiate a checkout instead
        console.log("you clicked the checkout button!")
    }

    componentDidMount() {
        let user_id = this.props.user_id;
        let order_id = this.props.open_order_id
        fetchItems(user_id, order_id)
        // fetchCurrentOrder(user_id)
        console.log("this.props in the Cart", this.props)
    }
    
    render(props){
        console.log("this.props from Cart", this.props)
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

const mapStateToProps = state => {
    return {
        user_id: state.user.user.id,
        open_order_id: state.orderReducer.orders.data.[0].attributes.open_order_id
    }
}

const mapDispatchToProps = state => {
    return {
        fetchCurrentOrder: state.fetchCurrentOrder,
    }
}

export default connect(mapStateToProps, { fetchItems })(Cart)