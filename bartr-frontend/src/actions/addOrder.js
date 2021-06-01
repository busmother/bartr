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

