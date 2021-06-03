export const setStatus = () => {
    return (dispatch) => {
        let user = { username: window.localStorage.getItem("username")};
        console.log("user from setStatus", user)
        if (user.username !== "undefined"){
            dispatch({type: "setUser", payload: user})
        }       
    } 
}

export const login = (user) => {
    console.log("user from login method", user)
    window.localStorage.setItem("username", user)
    return {
        type: "setUser", 
        payload: user}
}

export const logout = () => {
    window.localStorage.removeItem("username", )
    return {type: "logout"}
}

export const addUser = (data) => {
    return (dispatch) => {

        fetch('http://localhost:3000/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(user => console.log("user", user))
        .then(user => dispatch({type: 'setUser', payload: user}))
        .catch(error=>console.log("error", error))
    }
}