export default function itemReducer(state = {items: []}, action) {
    
    switch (action.type) {
        case 'FETCH_ITEMS':
            return {items: action.payload}
        case 'ADD_ITEM':
            return {items: [...state.items, action.payload.data]}
        case 'REMOVE_ITEM':
            const removalIndex = state.items.findIndex(item => item.id === action.payload);
            return (
                {...state, 
                    items: [
                        ...state.items.slice(0, removalIndex),
                    ...state.items.slice(removalIndex + 1)
                    ]
                }
            )
        case 'CLEAR_ITEMS':
            return {items: []}
        default:
            return state
    }
}

