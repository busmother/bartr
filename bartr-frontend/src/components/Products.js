import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product.js'
import './products-stylesheet.css'


const Products = (props) => {
    console.log("props from Products", {props})
    return(
        <main className="container">
            <Grid 
            container 
            direction="row"
            justify="center" 
            spacing = {2}>
            {props.products &&
            props.products.map((product) => (

                <Grid
                item
                key={product.id}
                xs={4}>

                    <Product product={product} className="product"/>

                </Grid>

            ))}
            >
            </Grid>
        </main>
    )
}

export default Products