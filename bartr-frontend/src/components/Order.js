import React from 'react';

const Order = ({ order }) => {
    return (
        <div>
            <h5>Order Number: {order.attributes.id}</h5>
            <ul>
                {order.attributes.items.map((item) => (
                    <li>{item.name} - {item.price}</li>
                ))}
            </ul>
            <h5>Order total: </h5>
        </div>
    )

}

Order.defaultProps = {
    id: "Order ID number missing",
    items: "Order Items missing"
}

export default Order