import React from 'react'
import Button from './Button'
import './product-stylesheet.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '.././actions/item'

const Product = ({ product }) => {
    const dispatch = useDispatch()
    const user_id = useSelector(state => state?.user?.user?.data?.id)
    const open_order_id = useSelector(state => state?.user?.user?.data?.attributes?.open_order_id)
    
    return(
        <div className="product-card" >
        <img className="product-image" src={product.attributes.image} alt={"product"}></img>
        <h3>{product.attributes.name}</h3>
        <em><p className="description"> {product.attributes.description}</p></em>
        <p>${product.attributes.price}</p>
        
        <Button handleClick={() => dispatch(addItem(product, user_id, open_order_id))} label="Add to cart"> </Button>
    </div>
    )

}

Product.defaultProps = {
    name: "name",
    description: "missing description, whoops!",
    image: "https://static.thenounproject.com/png/82078-200.png",
    price: "Everything for a price",
    availability: "false"
}

export default Product