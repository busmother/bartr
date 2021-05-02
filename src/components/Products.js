import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product.js'
import './products-stylesheet.css'

const products = [
    { id: 1, name: `insulin`, description: `the good stuff`, image: 'https://image.flaticon.com/icons/png/512/1914/1914515.png', price: 'everything at a price'},
    { id: 2, name: `monkey's paw`, description: `three more things, what could go wrong?`, image: 'https://www.pngitem.com/pimgs/m/119-1194045_monkey-paw-png-transparent-png.png', price: 'everything at a price'},
    { id: 3, name: `insulin again`, description: `the good stuff`, image: 'https://image.flaticon.com/icons/png/512/1914/1914515.png', price: 'everything at a price'},
    { id: 4, name: `more insulin`, description: `the good stuff`, image: 'https://image.flaticon.com/icons/png/512/1914/1914515.png', price: 'everything at a price'},
    { id: 5, name: `insulin for days`, description: `the good stuff`, image: 'https://image.flaticon.com/icons/png/512/1914/1914515.png', price: 'everything at a price'},
    { id: 6, name: `even more insulin`, description: `the good stuff`, image: 'https://image.flaticon.com/icons/png/512/1914/1914515.png', price: 'everything at a price'}
]

const Products = () => {
    return(
        <main className="container">
            <Grid 
            container 
            direction="row"
            justify="center" 
            spacing = {2}>
                {products.map((product) => (
                    <Grid 
                    item 
                    key={product.id}
                    xs={4}>
                        <Product product={product} className="product"/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products