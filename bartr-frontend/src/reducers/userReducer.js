export default (state = {user: {username: ''}, status: "pending" }, action) => {
    switch (action.type) {
        case "SET_USER":
            console.log("action.payload from SET_USER", action.payload)
            return {user: action.payload, status: "resolved"};
        case "NO_USER":
            return { status: "idle"};
        case "LOGOUT":
            return {...state, user: {username: ''}, status: "idle"};
        default:
            return state;
    }
}