export default function orderReducer(state = {orders: []}, action) {

    switch (action.type) {
        case 'FETCH_ORDERS':
            return {proders: action.payload}
        case 'ADD_ORDER':
            return {...state, orders: [...state.orders, action.payload]}
        case 'REMOVE_ORDER':
            const removalIndex = state.orders.findIndex(order => order.id === action.id);
            return (
                {...state, 
                    orders: [
                    ...state.orders.slice(0, removalIndex),
                    ...state.orders.slice(removalIndex + 1)
                    ]
                }
            )
        default:
            return state
    }
}