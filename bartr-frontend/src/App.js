import React, { Component } from 'react'
import Cart from './components/Cart.js'
import './app-stylesheet.css'
import ProductsContainer from './components/ProductsContainer.js'

class App extends Component {

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
                    <ProductsContainer/>   
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


// export default connect(mapStateToProps, {fetchProducts})(App)

// export default connect(null, {fetchProducts})(App)

export default App;