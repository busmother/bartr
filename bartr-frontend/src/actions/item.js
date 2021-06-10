export const fetchItems = (user_id, order_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/orders/${order_id}`)
        .then(response => response.json())
        .then(orders => dispatch({
            type: 'FETCH_ITEMS',
            payload: orders
        }))
        .catch(error=>console.log("error", error))
    }
}

export const addItem = (data, user_id, order_id) => { 
    return (dispatch) => {

        fetch(`http://localhost:3000/api/v1/users/${user_id}/orders/${order_id}/items`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(item => console.log("item", item))
        // .then(order => dispatch({type: 'ADD_ITEM', payload: item}))
        .catch(error=>console.log("error", error))
    }
}




