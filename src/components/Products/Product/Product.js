import React, { Component } from 'react'
import Button from './Button.js'
// import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
// import { AddShoppingCart } from '@material-ui/icons'
// import classes  from '*.module.css';

class Product extends Component { //destructure product from the props

    handleClick = (e) => {
        e.preventDefault()
        console.log("you clicked the button")
    }

    render(){
        return (
            <div className="product-card">
                <p>"I'm a product!"</p>
                <Button handleClick={this.handleClick} label="Add to cart"></Button>
            </div>
        )
    }
} 

export default Product