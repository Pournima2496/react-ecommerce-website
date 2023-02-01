// For add item to cart
export const addCart = (product) =>{
    return{
        type: "ADDCART",
        payload:product
    }
}

// For remove item to cart
export const removeCart = (product) =>{
    return{
        type: "REMOVECART",
        payload:product
    }
}