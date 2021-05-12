export function fetchProducts(action){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/products')
        .then(response => response.json())
        .then(products => dispatch({
            type: 'FETCH_PRODUCTS',
            payload: products
        }))
        .catch(error=>console.log("error", error))
    }
}

