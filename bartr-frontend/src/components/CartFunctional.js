import React, { useState, useEffect } from 'react';
import { useSelector, useStore } from 'react-redux'
import { Grid } from '@material-ui/core'
import { CSSTransition } from 'react-transition-group'

import './cart-stylesheet.css'
import Button from './Button.js'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/order'
import { fetchItems, removeItem } from '../actions/item'

const CartFunctional = (props) => {

    useEffect( () => {
        let user_id = props.user_id
        props.fetchOrders(user_id)
        let open_order_id = props.open_order_id
        props.fetchItems(user_id, open_order_id)
    }, [])

    removeClick = (e, item_id) => {
        e.preventDefault();
        props.removeItem(props.user_id, props.open_order_id, item_id)
    }

    cartTotal() {
        let cartItems
        if (props?.items){
            cartItems = props?.items
            let total = cartItems.map(item => parseInt(item.attributes.product.price)).reduce((a, b) => a+b, 0)
            return `Total: $ ${total}`
        }else{
            return " Loading..."
        }
    }

    return (
        <div>
            <em><p className="cart-header> Your cart:</p></em>
            <ul>
            {props?.items?.map((item) => (
                <Grid
                item
                key={item.id}
                >
                    <li id={item.id}>{item?.attributes?.product?.name} = ${item?.attributes?.product?.price}
                    <Button key={item.id} handleClick={(e) => removeClick(e, item.id)} item_id={item.id} label="Remove"/> </li>
                </Grid>
            ))}
            </ul>
            <em>{this.cartTotal()}</em><br></br></br></em>
        </div>
    )
}

export default connect(mapStateToProps, { fetchOrders, fetchItems, removeItem })(Cart)