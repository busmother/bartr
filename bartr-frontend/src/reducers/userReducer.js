export default (state = { status: "pending" }, action) => {
    switch (action.type) {
        case "setStatus":
            return {...state, status: action.payload };
        case "setUser":
            return {...action.payload, status: "resolved"}
        default:
            return state;

    }
}