export function fetchItems(user_id, order_id){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${user_id}/orders/${order_id}/items`)
        .then(response => response.json())
        .then(items => dispatch({
            type: 'FETCH_ITEMS',
            payload: items
        }))
        .catch(error=>console.log("error", error))
    }
}

export const addItem = (data, user_id, order_id) => { 
    console.log("data, user_id, order_id from addItem", data, user_id, order_id)
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
        // .then(item => console.log("item", item))
        .then(item => dispatch({type: 'ADD_ITEM', payload: item}))
        .catch(error=>console.log("error", error))
    }
}




