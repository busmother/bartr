export default (state = {user: {username: ''}, loggedIn: false }, action) => {
    switch (action.type) {
        case "SET_USER":
            return {user: action.payload, loggedIn: true};
        case "NO_USER":
            return { user: {username: ''}, loggedIn: false};
        case "LOGOUT":
            return {user: {username: ''}, loggedIn: false};
        default:
            return state;
    }
}