import React from 'react';
import Order from './Order'

const Orders = (props) => {

    return(
        <div>
            <ul>
            {props.orders &&
            props.orders.map((order) => (
                <li><Order key={order.id} className = "order" /></li>
            ))}
            </ul>
        </div>
    )
}

export default Orders