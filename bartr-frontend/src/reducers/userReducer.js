export default (state = { user: {username: 'Geoff', status: "pending" }}, action) => {
    switch (action.type) {
        case "setStatus":
            return {...state, status: action.payload };
        case "setUser":
            return {state, user: {username: action.payload, status: "resolved"}}
        case "noUser":
            return { status: "idle"};
        case "logout":
            return { status: "idle"}
        default:
            return state;
    }
}