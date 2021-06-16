export default function orderReducer(state = {orders: []}, action) {

    switch (action.type) {
        case 'FETCH_ORDERS':
            return {orders: action.payload}
        case 'ADD_ORDER':
            return {...state, orders: [...state.orders, action.payload]}
        case 'CLEAR_ORDERS': 
            return {orders: []}
        default:
            return state
    }
}