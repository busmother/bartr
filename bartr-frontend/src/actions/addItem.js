export const addItem = (data) => { 
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users/:id/orders/:id/items', {
            headers: {
                'Content-Type': 'application/json'
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(order => dispatch({type: 'ADD_ITEM', payload: item}))
    }
}

