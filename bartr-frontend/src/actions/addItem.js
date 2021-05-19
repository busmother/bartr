export const addItem = (data) => { 
    return (dispatch) => {

        fetch('http://localhost:3000/api/v1/orders/1/items', {
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

