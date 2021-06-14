import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { CSSTransition } from 'react-transition-group'

import './cart-stylesheet.css'
import Button from './Button.js'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/order'

class Cart extends Component {

    handleClick = (e) => {
        e.preventDefault();
        console.log("you clicked the checkout button!")
    }

    currentItems(order_id){
        let orders = this.props.orders
        let itemsInCart = orders.filter(function(order){
            return order.id === order_id
        })
        itemsInCart()
    }

    componentDidMount() {
        let user_id = this.props.user_id
        this.props.fetchOrders(user_id)
    }
    
    render(props){
        console.log("this.props from Cart", this.props)
        return(
            <div>
                <p className="cart-header"> Hi there! I'm the cart!</p>
                <CSSTransition transitionName="animation">
                <ul>
                {this.props.order_items.map((item) => (
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
    const last_order = state.orderReducer.orders.data.length - 1
    return {
        user_id: state?.user?.user?.data?.id,
        open_order_id: state?.orderReducer?.orders?.data?.[0]?.attributes?.open_order_id,
        order_items: state?.orderReducer?.orders?.data?.[last_order]?.attributes?.items
        // items: state.orderReducer.orders // last order, items
    }
}

export default connect(mapStateToProps, { fetchOrders })(Cart)

