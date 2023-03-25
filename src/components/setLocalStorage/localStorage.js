function fakeDb(id) {
    let shoppingCart;

    const localData = localStorage.getItem('shopping-cart')
    if (localData) {
        shoppingCart = JSON.parse(localData)
    }else{
        shoppingCart = {}
    }

    const quantity = shoppingCart[id]
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    }else{
        shoppingCart[id] = 1;
    }
    

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}
export {fakeDb}