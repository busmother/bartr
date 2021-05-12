import React, { Component } from 'react'
import Button from './Button.js'
import './product-stylesheet.css'

class Product extends Component {

    handleClick = (e) => {
        e.preventDefault()
        console.log("you clicked the add to cart button")
    }


    render(){
        return (
            <div className="product-card" >
                <img className="product-image" src={this.props.product.attributes.image} ></img>
                <h3>{this.props.product.attributes.name}</h3>
                <em><p className="description"> {this.props.product.description}</p></em>
                <p>{this.props.product.attributes.price}</p>
                
                <Button handleClick={this.handleClick} label="Add to cart"> </Button>
            </div>
        )
    }
} 

export default Product