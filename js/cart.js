const handleAddProduct = () => {
   const productEl = document.getElementById('product')
   const quantityEl = document.getElementById('quantity')
   const product = productEl.value;
   const quantity = parseInt(quantityEl.value);
//    console.log('Add Product', product, quantity);
    displayProduct(product, quantity)
    addProductToCart(product, quantity)
   productEl.value = ''
   quantityEl.value = ''

}

const getCart = () => {
    let cart = {}
    const getCartJson = localStorage.getItem('cart')
    if (getCartJson) {
        cart = JSON.parse(getCartJson)
    }
    
    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCart()
   
    if (cart[product]) {
        cart[product] = cart[product] + quantity;
    }

    else { 
        cart[product] = quantity
    }
    
    console.log('cart', cart);
     const cartJSON = JSON.stringify(cart)
    localStorage.setItem('cart', cartJSON)
    
}

const displayProduct = (product, quantity) => {
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`;
    const ul = document.getElementById('product-container');
    ul.appendChild(li);
}


// display products from stored local storage

const displayStoredProducts = () => { 
    const cart = getCart();
    for(const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
        displayProduct(product, quantity)
        
    }
}

displayStoredProducts();

/**
 * to save object/array in the local storage
 * 1. covert the object to json string by using json.stringify
 * 2. localStorage.setItem()
 */

/**
 * to get object/array from the local storage
 * 1. get the item from local storage and it will be in json string
 * 2. convert the json string to js object by using json.parse
 */