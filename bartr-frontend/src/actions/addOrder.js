export function addOrder(action){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users/:id/orders')
        .then(response => response.json())
        .then(products => dispatch({
            type: '',
            payload: products
        }))
        .catch(error=>console.log("error", error))
    }
}

export const addOrder = (data) => { 
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users/:id/orders', {
            headers: {
                'Content-Type': 'application/json'
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}

