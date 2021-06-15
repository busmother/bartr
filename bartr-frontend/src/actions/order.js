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

export function fetchOrderTotal(user_id, order_id){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/orders/${order_id}`)
        .then(response => response.json())
        .then(order => dispatch({
            type: 'FETCH_ORDER_TOTAL',
            payload: order?.attributes?.order_total
        }))
        .catch(error=>console.log("error", error))
    }
}

export const addOrder = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/orders', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify({
                // order: { 
                //     user_id: {user_id: user.id},
                //     open: {open: true},
                //     recipient: {recipient: recipient},
                //     street_address: {street_address: street_address},
                //     city: {city: city},
                //     state: {state: state},
                //     area_code: {area_code: area_code}
                // },
                // user: {username: user}
            })
        })
        .then(response => response.json())
        .then(order => dispatch({type: 'ADD_ORDER', payload: order}))
    }
}

export const clearOrders = () => {
    return (dispatch) => {
        dispatch({type: "CLEAR_ORDERS"})
    }
}