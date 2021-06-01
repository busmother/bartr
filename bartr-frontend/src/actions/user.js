export const checkStatus = () => {
    return {type: "setStatus", payload: "idle"}
}

export const login = (user) => {
    return {type: "setUser", payload: user}
}