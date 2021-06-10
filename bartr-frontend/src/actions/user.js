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
        .then(user => dispatch({type: 'setUser', payload: user}))
        .catch(error=>console.log("error", error))
    }
}

// export const fetchCurrentOrder = (user_id) => {
//     console.log("the user_id from fetchCurrentOrder", user_id)
//     return (dispatch) => {
//         fetch(`http://localhost:3000/api/v1/users/${user_id}`)
//         .then(response => console.log("response.json()", response.json()))
//         .then(data => console.log("data from fetchCurrentOrder", data))
//         .then(order => dispatch({
//             type: 'fetchCurrentOrder',
//             payload: order
//         }))
//         .catch(error=>console.log("error", error))
//     }
// }