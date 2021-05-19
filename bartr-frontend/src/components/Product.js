import React from 'react';
import Button from './Button.js'
import './product-stylesheet.css'
import {useDispatch} from 'react-redux'

const Product = ({ product }) => {
    return(
        <div className="product-card" >
        <img className="product-image" src={product.attributes.image} ></img>
        <h3>{product.attributes.name}</h3>
        <em><p className="description"> {product.description}</p></em>
        <p>{product.attributes.price}</p>
        
        <Button handleClick={() => console.log("you clicked the button")} label="Add to cart"> </Button>
    </div>
    )

}

export default Product