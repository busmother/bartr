export default function productReducer(state = {products: []}, action) {

    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {products: action.payload}
        case 'CLEAR_PRODUCTS':
            return {products: []}
        default:
            return state
    }
}