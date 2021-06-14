export const setStatus = () => {
    let username = window.localStorage.getItem("username");
    return (dispatch) => {
        if (username === "undefined"){
            dispatch({type: "noUser",}) // added this 6/10, doesn't do anything?
        }
        if (username !== "undefined"){
            dispatch({type: "setUser", payload: username})
        }       
    } 
}

export const login = (username) => {
    window.localStorage.setItem("username", username)
    return {
        type: "setUser", 
        payload: username 
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({type: "logout"})
    }
}

export const addUser = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({user: {username: data}})
        })
        .then(response => response.json())
        .then(user => dispatch({type: 'setUser', payload: user})) //update this to user.data.attributes and it will break everything but reduces boilerplate
        .catch(error=>console.log("error", error))
    }
}