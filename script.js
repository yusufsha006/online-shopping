// Sample product data with images
const products = [
  { id: 1, name: "Product 1", price: 10, image: "Product1.jpg" },
  { id: 2, name: "Product 2", price: 20, image: "Product2.jpg" },
  { id: 3, name: "Product 3", price: 30, image: "Product3.jpg" }
];

// Function to display products with images
function displayProducts() {
  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-item';
    productDiv.innerHTML = `
      <img src="img/${product.image}" alt="${product.name}">
      <p>${product.name} - $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsDiv.appendChild(productDiv);
  });
}

// Function to add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    const cartDiv = document.getElementById('cart');
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `<p>${product.name} - $${product.price}</p>`;
    cartDiv.appendChild(cartItem);
  }
}

// Function to checkout
function checkout() {
  const cartItems = document.getElementById('cart').children;
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const price = parseFloat(cartItems[i].innerText.match(/\d+(\.\d+)?/)[0]);
    totalPrice += price;
  }
  alert(`Total Price: $${totalPrice.toFixed(2)}`);
}

// Display products when the page loads
displayProducts();
