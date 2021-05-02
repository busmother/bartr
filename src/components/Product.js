import React, { Component } from 'react'
import Button from './Button.js'
import './stylesheet.css'

class Product extends Component {

    handleClick = (e) => {
        e.preventDefault()
        console.log("you clicked the button")
    }


    render(){


        return (
            <div className="product-card" style={this.productCardStyle}>
                <img className="product-image" src={this.props.product.image} style={this.productImageStyle}></img>
                <h3>{this.props.product.name}</h3>
                <em><p className="description"> {this.props.product.description}</p></em>
                <p>{this.props.product.price}</p>
                
                <Button handleClick={this.handleClick} label="Add to cart"> </Button>
            </div>
        )
    }
} 

export default Product