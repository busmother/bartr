export default function popUpReducer(state = {open: false}, action) {
    switch (action.type) {
        case 'CLOSE':
            return {open: false}
        default:
            return state;
    }
}