import React from 'react';
import Button from './Button.js'
import './product-stylesheet.css'
import {useDispatch} from 'react-redux'
import {addItem} from '.././actions/addItem'

const Product = ({ product }) => {
    const dispatch = useDispatch()
    
    return(
        <div className="product-card" >
        <img className="product-image" src={product.attributes.image} alt={"product"}></img>
        <h3>{product.attributes.name}</h3>
        <em><p className="description"> {product.attributes.description}</p></em>
        <p>${product.attributes.price}</p>
        
        <Button handleClick={() => addItem(product)(dispatch)} label="Add to cart"> </Button>
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