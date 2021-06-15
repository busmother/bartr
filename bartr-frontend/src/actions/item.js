export function fetchItems(user_id, order_id){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/orders/${order_id}/items`)
        .then(response => response.json())
        .then(items => dispatch({
            type: 'FETCH_ITEMS',
            payload: items.data
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
        .then(item => dispatch({
            type: 'ADD_ITEM', 
            payload: item}))
        .catch(error=>console.log("error", error))
    }
}

export const removeItem = (user_id, order_id, item_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/orders/${order_id}/items/${item_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'DELETE',
        })
        .then(dispatch({type: 'REMOVE_ITEM', payload: item_id}))
        .catch(error=>console.log("error", error))
    }
}



