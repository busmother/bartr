export default function orderReducer(state = {orders: []}, action) {

    switch (action.type) {
        case 'ADD_ORDER':
            return {...state, orders: [...state.orders, action.payload]}
        default:
            return state
    }
}

//is there a reason there's not one reducer with different cases?
//is the state here the same as the state in the productReducer?