export default function itemReducer(state = {items: []}, action) {

    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, items: [...state.items, action.payload]}
        // case 'REMOVE_ITEM':
        //     return {...state, items: [...state.items]} //this needs more
        default:
            return state
    }
}