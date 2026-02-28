const addproduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;

    // clear korar jonno
    productField.value = '';
    quantityField.value = '';

    // product adding
    console.log(product, quantity);
    displayProduct(product,quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');

    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}