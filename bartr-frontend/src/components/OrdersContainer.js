import React from 'react'
import { connect } from 'react-redux'
import {fetchOrders, clearOrders} from '../actions/order'
import Orders from './Orders'

class OrdersContainer extends React.Component {

    componentDidMount() {
        let user_id = this.props.user_id
        this.props.fetchOrders(user_id)
    }

    componentDidUpdate = (preprops) => {
        if (preprops.orders !== this.props.orders){
            this.props.clearOrders()
        }
    }

    render() {
        return(
            <div>
                <Orders orders={this.props.orders} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders.data,
        user_id: state.user.user.id
    }
}

export default connect(mapStateToProps, {fetchOrders, clearOrders})(OrdersContainer)