const products = [
    { name: 'T-Shirt', price: '$20' },
    { name: 'Jeans', price: '$40' },
    { name: 'Jacket', price: '$60' }
];

function renderProducts() {
    const container = document.querySelector('.product-list');
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';

        div.innerHTML = `<h3>${p.name}</h3><p class="price">${p.price}</p>` +
            `<button class="buy-btn" onclick="alert('Added to cart!')">Buy</button>`;

        div.innerHTML = `<h3>${p.name}</h3><p class="price">${p.price}</p>`;

        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', renderProducts);
