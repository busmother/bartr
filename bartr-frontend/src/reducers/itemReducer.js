export default function itemReducer(state = {items: []}, action) {

    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, items: [...state.items, action.payload]}
        case 'REMOVE_ITEM':
            const removalIndex = state.items.findIndex(item => item.id === action.id);
            return (
                {...state, 
                    items: [
                        ...state.items.slice(0, removalIndex),
                    ...state.items.slice(removalIndex + 1)
                    ]
                }
            )
        default:
            return state
    }
}