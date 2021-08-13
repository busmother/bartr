import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import allActions from './actions'


// Components
import Cart from './components/Cart.js'
import PopUp from './components/PopUp'
import ProductsContainer from './components/ProductsContainer'
import Button from './components/Button'
import LoginComponent from './components/Login'
import OrdersContainer from './components/OrdersContainer'
import Checkout from './components/Checkout'
import CheckoutValidated from './components/CheckoutValidated'

import './app-stylesheet.css'

import { fetchOrders, clearOrders } from './actions/order'
import { fetchItems } from './actions/item'

const App = () => {

    const loggedIn = useSelector(state => state.loggedIn)
    // const toggleLoginPop = useSelector(state => state.useSelector)

    const toggleLoginPop = () => {
        setState(state => ({
            loggedIn: !state.loggedIn
        }));
    }

    const loggedIn = () => {
        setState(state = {
            loggedIn: false
        })
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allActions.fetchOrders(user_id))
    }, [])

    loginSequence = () => {
        let user_id = props.user_id
        let open_order_id = props.open_order_id
        props.fetchOrders(user_id)
        props.fetchItems(user_id, open_order_id)
    }

    logoutSequence = () => {
        toggleLoginPop()
        props.clearOrders();
        props.clearItems();
        props.clearProducts();
        props.logout();
    }

    greeting = () => {
        if (props?.loggedIn === true){
            return(<h4>Hi {props?.user?.data?.attributes?.username}</h4>)
        }
    }

    useEffect = () => {
        loginSequence()
    }

    return(
        <Router>
            <div className="wrap">
                {props.loggedIn ? null : <PopUp loggedIn = {props.loggedIn}/>}
                <div className="header">
                    <h1>Bartr</h1>
                    {greeting()}
                </div>
                <nav className="nav">
                <br></br>
                <ul className="nav-list">
                    <li className="nav-link"><Link to="/products">Products</Link></li>
                    <li className="nav-link"><Link to="/past-orders">PastOrders</Link></li>
                    <li className="nav-link"><Link to="/checkout">Checkout</Link></li>
                    <li className="nav-link"><Button handleClick={() => {
                                                        logoutSequence();
                                                        }}
                                                        label = "Logout" /></li>
                </ul>
                <br></br>
                </nav>
                <div className="main">
                    <Switch>
                        <Route path = '/products' component = {ProductsContainer}/>
                        <Route path = '/cart' component = {Cart}/>
                        <Route path = '/checkout' component = {CheckoutValidated}/>
                        <Route path = 'past-orders' component = {OrdersContainer}/>
                    </Switch>
                </div>
            </div>
                <aside className="sidebar">
                    <Cart/>
                </aside>
                <footer classname="footer">
                    <p></p>
                </footer>
        </Router>
    )
}

const dispatcher = useDispatch(dispatch) => {
    return {
        fetchOrders: () => dispatch({type: 'FETCH_ORDERS'}),
        fetchItems: () => dispatch({type: 'FETCH_ITEMS'}),
        clearOrders: () => dispatch({type: 'CLEAR_ORDERS'}),
        clearItems: () => dispatch({type: 'CLEAR_ITEMS'}),
        clearProducts: () => dispatch({type: 'CLEAR_PRODUCTS'}),
        logout: () => dispatch({type: 'LOGOUT'})
    }
}

const propper = useSelector(state) => {
    return{
        loggedIn: state?.user?.loggedIn,
        user: state.user,
        user_id: state?.user?.user?.data?.dispatch,
        current_order_id: state?.user?.user?.data?.current_order_id
    }
}

export default connect(mapper, dispatcher)(App);



