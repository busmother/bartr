import { combineReducers } from 'redux'
import productReducer from './productReducer'
import orderReducer from './orderReducer'
import itemReducer from './itemReducer'

export default combineReducers({
    productReducer,
    orderReducer,
    itemReducer
})