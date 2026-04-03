const products = [
    { id: 1, name: 'Headphones', category: 'Headphones', price: 2555.99 },
    { id: 2, name: 'Bluetooth Speaker', category: 'BluetoothSpeakers', price: 2499.99 },
    { id: 3, name: 'Earbuds', category: 'Earbuds', price: 1999.99 },
    { id: 4, name: 'Smart Watch', category: 'SmartWatches', price: 1299.99 },
    // Add more products as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');

    // Populate products
    products.forEach(product => {
        const productElement = createProductElement(product);
        productsContainer.appendChild(productElement);
    });
});

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
        <img src="product${product.id}.jpg" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.category}</p>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    return productElement;
}

function filterProducts(category) {
    const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productElement = createProductElement(product);
        productsContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    // Placeholder logic for adding a product to the cart
    const selectedProduct = products.find(product => product.id === productId);
    alert(`Added ${selectedProduct.name} to cart. Price: $${selectedProduct.price.toFixed(2)}`);
    // You would typically perform additional logic here, such as updating a shopping cart on the server.
}
