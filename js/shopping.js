const addproduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;

    // clear korar jonno
    productField.value = '';
    quantityField.value = '';

    // product adding
    // akhan thaka call kora hocca
    console.log(product, quantity);
    displayProduct(product,quantity);
    saveProductToLocalStorage(product, quantity);
}


const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');

    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

// local storage a add korar jonno
const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

// local storage a save rakhar jonno
const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    // console.log(cartStringified);
    // stringifyjodii kora tayla akhon localstorage a save korta parbo
    localStorage.setItem('cart',cartStringified);
}

// akhon jahatu data gula roya gacha 
// abar data gulaka dakanor jonno
const displayProductsForLocalStorage = () => {
    const saveCart = getStoredShoppingCart();
    console.log(saveCart);
    // kono akta object ar property jodii dhora dhora payta chay sa jonno
    for(const product in saveCart){
        console.log(product);
    }
}

displayProductsForLocalStorage();

