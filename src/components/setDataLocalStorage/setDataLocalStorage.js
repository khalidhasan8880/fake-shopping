function setDataLocalStorage(id) {
    let shoppingCart;

    const localStorageData = localStorage.getItem('shopping-cart')
    if (localStorageData) {
        shoppingCart = JSON.parse(localStorageData)
    }else{
        shoppingCart = {}
    }

    const quantity = shoppingCart[id]
    if (quantity) {
        shoppingCart[id] = quantity+1;
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

export{setDataLocalStorage}