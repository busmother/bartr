import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { CSSTransition } from 'react-transition-group'

import './cart-stylesheet.css'
import Button from './Button.js'
import { connect } from 'react-redux'
import { fetchOrders } from '../actions/order'
import { fetchItems } from '../actions/item'

class Cart extends Component {

    handleClick = (e) => {
        e.preventDefault();
        console.log("you clicked the checkout button!")
    }

    componentDidMount() {
        let user_id = this.props.user_id
        let open_order_id = this.props.open_order_id
        this.props.fetchOrders(user_id)
        this.props.fetchItems(user_id, open_order_id)
    }
    
    render(props){ 
        console.log("this.props from Cart", this.props)
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
                        <li>{item.attributes.product.name} - ${item.attributes.product.price}</li>
                    </Grid>

                ))}
                </ul>
                </CSSTransition>
                <em>Total: ${this?.props?.order_total}</em><br></br>
                <Button handleClick={this.handleClick} label="Checkout"/>
            </div>
        )
    }
}

const mapStateToProps = state => { //refactor-this
    const last_order = state?.orderReducer?.orders?.data?.length - 1
    return {
        user_id: state?.user?.user?.data?.id, //refactor-this
        open_order_id: state?.user?.user?.data?.attributes?.open_order_id, //refactor-this
        order_total: state?.orderReducer?.orders?.data?.[last_order]?.attributes.order_total, //refactor-this
        items: state?.itemReducer?.items //refactor-this
    }
}

export default connect(mapStateToProps, { fetchOrders, fetchItems })(Cart)

