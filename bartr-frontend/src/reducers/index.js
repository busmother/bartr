import { combineReducers } from 'redux'
import productReducer from './productReducer'
import orderReducer from './orderReducer'
import itemReducer from './itemReducer'
import userReducer from './userReducer'

export default combineReducers({
    productReducer,
    orderReducer,
    itemReducer,
    userReducer
})