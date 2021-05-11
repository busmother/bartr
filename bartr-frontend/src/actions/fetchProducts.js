export function fetchProducts(action){

    
    fetch('http://localhost:3000/api/v1/products')
    .then(response => response.json())
    .then(data => console.log("data", data))
    .catch(error=>console.log("error", error))
}