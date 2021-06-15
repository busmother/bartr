import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { CSSTransition } from 'react-transition-group'

import './cart-stylesheet.css'
import Button from './Button.js'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/order'
import { fetchItems, removeItem } from '../actions/item'

class Cart extends Component {

    componentDidMount() {
        let user_id = this.props.user_id
        this.props.fetchOrders(user_id)
        let open_order_id = this.props.open_order_id
        this.props.fetchItems(user_id, open_order_id)
    }

    checkoutClick = (e) => {
        e.preventDefault();
    }

    removeClick = (e, item_id) => {
        e.preventDefault();
        this.props.removeItem(this.props.user_id, this.props.open_order_id, item_id)
    }

    cartTotal() {
        let cartItems 
        if (this?.props?.items){
            cartItems = this?.props?.items
            let total = cartItems.map(item => parseInt(item.attributes.product.price)).reduce((a, b) => a+b, 0)
            return `Total: $ ${total}`
        }else{
            return " Loading..."
        }
    }
    
    render(props){ 
        return(
            <div>
                <em><p className="cart-header"> Your cart:</p></em>
                <CSSTransition transitionName="animation">
                <ul>
                {this?.props?.items?.map((item) => (
                    <Grid
                    item
                    key={item.id}
                    >
                        <li id={item.id}>{item?.attributes?.product?.name} - ${item?.attributes?.product?.price} 
                        <Button key={item.id} handleClick={(e) => this.removeClick(e, item.id)} item_id={item.id} label="Remove"/> </li>
                    </Grid>
                ))}
                </ul>
                </CSSTransition>
                <em>{this.cartTotal()}</em><br></br>
                <Button handleClick={this.checkoutClick} label="Checkout"/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const last_order_index = state?.orderReducer?.orders?.length - 1
    return {
        user_id: state?.user?.user?.data?.attributes?.id,
        open_order_id: state?.user?.user?.data?.attributes?.open_order_id,
        order_total: state?.orderReducer?.orders?.[last_order_index]?.attributes.order_total,
        items: state?.itemReducer?.items 
    }
}

export default connect(mapStateToProps, { fetchOrders, fetchItems, removeItem })(Cart)

