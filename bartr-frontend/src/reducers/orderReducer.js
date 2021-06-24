export default function orderReducer(state = {orders: []}, action) {
console.log("payload for orderReducer", action.payload)
    switch (action.type) {
        case 'FETCH_ORDERS':
            return {orders: action.payload}
        case 'CLEAR_ORDERS': 
            return {orders: []}
        default:
            return state
    }
}