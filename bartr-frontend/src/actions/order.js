export function fetchOrders(user_id){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/orders`)
        .then(response => response.json())
        .then(orders => dispatch({
            type: 'FETCH_ORDERS',
            payload: orders.data
        }))
        .catch(error=>console.log("error", error))
    }
}

export const addOrder = (data, user_id, order_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/orders/${order_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'PATCH',
            body: JSON.stringify({
                    open: false,
                    recipient: data.recipient,
                    street_address: data.streetAddress,
                    city: data.city,
                    state: data.state,
                    zip_code: data.zipCode
            })
        })
        .then(response => response.json())
        .then(order => console.log("order from fetch", order))
        .then(order => dispatch({type: 'ADD_ORDER', payload: order}))
        .catch(error=>console.log("error", error))
    }
}

export const clearOrders = () => {
    console.log("you hit clearOrders action")
    return (dispatch) => {
        dispatch({type: "CLEAR_ORDERS"})
    }
}