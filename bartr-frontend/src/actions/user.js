export const setStatus = () => {
    return (dispatch) => {
        let username = window.localStorage.getItem("username");
        if (username !== "undefined"){
            dispatch({type: "setUser", payload: username})
        }       
    } 
}

export const login = (username) => {
    console.log("user from login method", username)
    window.localStorage.setItem("username", username)
    return {
        type: "setUser", 
        payload: username}
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