export const setStatus = () => {
    let username = window.localStorage.getItem("username");
    return (dispatch) => {
        if (username === "undefined"){
            dispatch({type: "NO_USER",}) // added this 6/10, doesn't do anything?
        }
        if (username !== "undefined"){
            dispatch({type: "SET_USER", payload: username})
        }       
    } 
}

export const login = (username) => {
    window.localStorage.setItem("username", username)
    return {
        type: "SET_USER", 
        payload: username 
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({type: "LOGOUT"})
    }
}

export const addUser = (name) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({user: {username: name}})
        })
        .then(response => response.json())
        .then(user => dispatch({type: 'SET_USER', payload: user}))
        .catch(error=>console.log("error", error))
    }
}