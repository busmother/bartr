import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product.js'

const products = [
    { id: 1, name: `insulin`, description: `the good stuff`, image: 'https://image.flaticon.com/icons/png/512/1914/1914515.png', price: 'everything at a price'},
    { id: 1, name: `monkey's paw`, description: `three more things, what could go wrong?`, image: 'https://www.pngitem.com/pimgs/m/119-1194045_monkey-paw-png-transparent-png.png', price: 'everything at a price'}
]

const Products = () => {
    return(
        <main>
            <Grid conatiner justify="center" spacing = {4}>
                {products.map((product) => (
                    <Grid item key={product.id}>
                        <Product product={product}/>
                    </Grid>

                ))}
            </Grid>
        </main>
    )

}

export default Products