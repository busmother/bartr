import React from 'react';
import {moment} from 'moment'

const Order = ({ order }) => {
    return (
        
        <div>
            <h5>Order number: #{order.id}, {moment(order.attributes.updated_at).format('MMMM Do YYYY, h:mm:ss a')} </h5>
            <h5>Order info: </h5>
            <h5>{order.attributes.recipient}<br></br>
            {order.attributes.street_address}<br></br>
            {order.attributes.city}, {order.attributes.state} {order.attributes.zip_code}</h5>
            <ul>
                {order.attributes.products.map((product) => (
                    <li className="product-list">{product.name} - {product.price}</li>
                ))}
            </ul>
            <h5>Order total:</h5>
        </div>
    )

}

Order.defaultProps = {
    id: "Order ID number missing",
    items: "Order Items missing"
}

export default Order