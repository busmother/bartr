import React from 'react'
import { connect } from 'react-redux'
import { fetchOrders, clearOrders } from '../actions/order'
import { fetchItems } from '../actions/item'
import Orders from './Orders'
import './orders-container-stylesheet.css'

class OrdersContainer extends React.Component {

    componentDidMount() {
        let user_id = this.props.user_id
        this.props.fetchOrders(user_id)
        let open_order_id = this.props.open_order_id
        this.props.fetchItems(user_id, open_order_id)
    }

    render() {
        return(
            <div className="container">
                <Orders orders={this?.props?.orders?.filter(order => {
                    return order?.attributes?.open === false
                })} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state?.orderReducer?.orders,
        user_id: state?.user?.user?.data?.id
    }
}

export default connect(mapStateToProps, {fetchOrders, fetchItems, clearOrders})(OrdersContainer)