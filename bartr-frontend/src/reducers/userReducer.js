export default (state = {user: {username: ''}, status: "pending" }, action) => {
    switch (action.type) {
        case "setStatus":
            return {...state, status: action.payload };
        case "setUser":
            return {user: action.payload, status: "resolved"};
        case "noUser":
            return { status: "idle"};
        case "logout":
            return {...state, user: {username: ''}, status: "idle"};
        default:
            return state;
    }
}