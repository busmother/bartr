import React from 'react';

const Order = ({ order }) => {
    return (
        console.log("order.data from Order", order.data)
        <div>
            {/* <h5>Order Number: {order.data.id}</h5>
            <ul>
                {order.data.attributes.items.map((item) => (
                    <li>{item.name} - {item.price}</li>
                ))}
            </ul> */}
            <h5>"Order total:</h5>
        </div>
    )

}

Order.defaultProps = {
    id: "Order ID number missing",
    items: "Order Items missing"
}

export default Order