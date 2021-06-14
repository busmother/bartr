import React from 'react';
import Moment from 'react-moment'


const Order = ({ order }) => {
    //refactor-this
    return (
        
        <div>
            <h4>Order #{order.id} – <em><Moment format='MMMM Do YYYY, h:mm:ss a'>{order.attributes.updated_at}</Moment></em> </h4> 
            <h5>Summary: </h5>
            <h5>Delivery address:<br></br>
            {order.attributes.recipient}<br></br>
            {order.attributes.street_address}<br></br>
            {order.attributes.city}, {order.attributes.state} {order.attributes.zip_code}</h5>
            <ul>
                {order.attributes.products.map((product) => (
                    <li className="product-list">{product.name} - ${product.price}</li>
                ))}
            </ul>
            <h5>Order total: ${order.attributes.order_total}</h5>
        </div>
    )

}

Order.defaultProps = {
    id: "Order ID number missing",
    items: "Order Items missing"
}

export default Order