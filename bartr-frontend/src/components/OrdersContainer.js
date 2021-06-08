import React from 'react'
import { connect } from 'react-redux'
import {fetchOrders} from '../actions/fetchOrders'
import Orders from './Orders'

class OrdersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchOrders()
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
        orders: state.orderReducer.orders.data
    }
}

export default connect(mapStateToProps, {fetchOrders})(OrdersContainer)