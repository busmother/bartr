export default function orderReducer(state = {orders: []}, action) {

    switch (action.type) {
        case 'ADD_ORDER':
            return {...state, orders: [...state.orders, action.payload]}
        case 'REMOVE_ORDER':
            const removalIndex = state.orders.findIndex(order => order.id === action.id);
            return {...state, orders: [
                ...state.orders.slice(0, removalIndex),
                ...state.orders.slice(removalIndex + 1)
            ]}
        default:
            return state
    }
}

//is there a reason there's not one reducer with different cases?
//is the state here the same as the state in the productReducer?