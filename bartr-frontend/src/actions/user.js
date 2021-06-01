export const setStatus = () => {
    return (dispatch) => {
        let user = { username: window.localStorage.getItem("username")};
        if (user.username){
            dispatch({type: "setUser", payload: user})
        }       
    }
}

export const login = (user) => {
    return {type: "setUser", payload: user}
}

export const logout = () => {
    window.localStorage.removeItem("username", )
    return {type: "logout"}
}