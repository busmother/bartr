import React from 'react'
import { connect } from 'react-redux'
import {fetchProducts} from '../actions/fetchProducts'
import Products from './Products'

class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    };

    

    render() {
        console.log("props from ProductsContainer", {props: this.props})
        return(
            <div>
                <Products products={this.props.products} addToCart={this.props.addToCart}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    console.log("state", state)
    return {
        products: state.productReducer.products.data
    }
}

export default connect(mapStateToProps, {fetchProducts})(ProductsContainer)