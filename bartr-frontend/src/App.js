import React, { Component } from 'react'
import Products from './components/Products.js'
import Cart from './components/Cart.js'
import './app-stylesheet.css'
import {fetchProducts} from './actions/fetchProducts'
import { connect } from 'react-redux'

class App extends Component {

    // componentDidMount(){
    //     fetch('http://localhost:3000/api/v1/products')
    //     .then(response => response.json())
    //     .then(data => console.log("data", data))
    //     .catch(error=>console.log("error", error))
    // }

    componentDidMount(){
        this.props.fetchProducts({type: 'FETCH_ACCOUNTS', payload: {name: 'name'}})
    }

    render(){
        return (
            <div className="wrap">
                <div className="header">
                    <h1>Bartr</h1>
                </div>
                <nav className="nav">
                    Nav
                </nav>
                <div className="main"> 
                    <Products />    
                </div>
                <aside className="sidebar">
                    <Cart/>
                </aside>
                <footer className="footer">
                    Footer
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
         state
    )
}

// export default connect(mapStateToProps, {fetchProducts})(App)

export default connect(null, {fetchProducts})(App)

// export default App;