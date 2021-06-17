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

export const closeOrder = (data, user_id, order_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/orders/${order_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'PATCH',
            body: JSON.stringify({
                    order_id: order_id,
                    recipient: data.recipient,
                    street_address: data.streetAddress,
                    city: data.city,
                    state: data.state,
                    zip_code: data.zipCode
            })
        })
        .then(response => response.json())
        .catch(error=>console.log("error", error))
    }
}

export const newOrder = (user_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/orders`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify({
                    open: true,
                    user_id: user_id,
                    recipient: null,
                    street_address: null,
                    city: null,
                    state: null,
                    zip_code: null
            })
        })
        .then(response => response.json())
        .then(order => console.log("order from newOrder", order))
        .catch(error=>console.log("error", error))
    }
}

export const clearOrders = () => {
    console.log("you hit clearOrders action")
    return (dispatch) => {
        dispatch({type: "CLEAR_ORDERS"})
    }
}