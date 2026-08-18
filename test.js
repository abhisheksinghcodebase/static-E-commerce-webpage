// Simple JavaScript smoke test for the storefront logic
// Run with: node test.js

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
};

const products = [
  { id: 1, name: 'Classic Tee', category: 'Women', price: 1499, rating: 4.7 },
  { id: 2, name: 'Street Hoodie', category: 'Men', price: 2299, rating: 4.8 },
  { id: 3, name: 'Travel Tote', category: 'Accessories', price: 1999, rating: 4.5 }
];

const cart = [];

function addToCart(productId) {
  const item = cart.find((product) => product.id === productId);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getSubtotal() {
  return cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

addToCart(1);
addToCart(1);
addToCart(2);

assert(getCartCount() === 3, 'Cart count should be 3 after adding 3 items');
assert(getSubtotal() === 5297, 'Subtotal should equal 1499*2 + 2299');
assert(cart[0].quantity === 2, 'Duplicate product should increase quantity instead of creating a new entry');

console.log('JavaScript smoke test passed.');
