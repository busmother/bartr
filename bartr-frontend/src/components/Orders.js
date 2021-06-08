import React from 'react';

const Orders = (props) => {

    return(
        <div>
            <ul>
            {props.orders &&
            props.orders.map((order) => (
                <li><Order key={order.id} items = {items} className = "order" /></li>
            ))}
            </ul>
        </div>
    )
}