export default function popUpReducer(state = {open: false}, action) {
    switch (action.type) {
        case 'CLOSE':
            return {...state, open: false};
        default:
            return state;
    }
}