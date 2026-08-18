const products = [
  {
    id: 1,
    name: "Aster Everyday Tee",
    category: "Women",
    price: 1499,
    oldPrice: 1899,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    badge: "New"
  },
  {
    id: 2,
    name: "North Loop Hoodie",
    category: "Men",
    price: 2299,
    oldPrice: 2899,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    badge: "Hot"
  },
  {
    id: 3,
    name: "Kite Travel Tote",
    category: "Accessories",
    price: 1999,
    oldPrice: 2499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    badge: "Sale"
  },
  {
    id: 4,
    name: "Summit Runner",
    category: "Shoes",
    price: 3499,
    oldPrice: 4199,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
    badge: "Best Seller"
  },
  {
    id: 5,
    name: "Harbor Knit Set",
    category: "Women",
    price: 2799,
    oldPrice: 3399,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    badge: "Limited"
  },
  {
    id: 6,
    name: "Ash Street Jacket",
    category: "Men",
    price: 4299,
    oldPrice: 4999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    badge: "New"
  },
  {
    id: 7,
    name: "Piper Sunglasses",
    category: "Accessories",
    price: 1299,
    oldPrice: 1699,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1577803947579-9f5d3f3f7f5c?auto=format&fit=crop&w=900&q=80",
    badge: "Top Pick"
  },
  {
    id: 8,
    name: "Drift Court Sneaker",
    category: "Shoes",
    price: 2899,
    oldPrice: 3299,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    badge: "Trending"
  },
  {
    id: 9,
    name: "Luna Layered Dress",
    category: "Women",
    price: 3299,
    oldPrice: 3899,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    badge: "Editor’s Pick"
  },
  {
    id: 10,
    name: "Stonefield Chino",
    category: "Men",
    price: 2199,
    oldPrice: 2699,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    badge: "Popular"
  },
  {
    id: 11,
    name: "Halo Leather Belt",
    category: "Accessories",
    price: 999,
    oldPrice: 1299,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
    badge: "New"
  },
  {
    id: 12,
    name: "Metro Street Boot",
    category: "Shoes",
    price: 3899,
    oldPrice: 4599,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
    badge: "Limited"
  }
];

const state = {
  searchTerm: "",
  selectedCategory: "All",
  priceRange: "all",
  sortOption: "featured",
  cart: []
};

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortSelect = document.getElementById("sortSelect");
const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const emptyCart = document.getElementById("emptyCart");
const cartToggle = document.getElementById("cartToggle");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const continueShopping = document.getElementById("continueShopping");

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function buildCategoryOptions() {
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  categoryFilter.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");
}

function getFilteredProducts() {
  let filtered = [...products];

  if (state.searchTerm) {
    const query = state.searchTerm.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
  }

  if (state.selectedCategory !== "All") {
    filtered = filtered.filter((product) => product.category === state.selectedCategory);
  }

  if (state.priceRange !== "all") {
    filtered = filtered.filter((product) => {
      if (state.priceRange === "under-1500") return product.price < 1500;
      if (state.priceRange === "1500-3000") return product.price >= 1500 && product.price <= 3000;
      if (state.priceRange === "3000-plus") return product.price > 3000;
      return true;
    });
  }

  switch (state.sortOption) {
    case "low-high":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "high-low":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "az":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filtered = filtered;
      break;
  }

  return filtered;
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    productGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card" aria-label="${product.name} product card">
          <div class="product-image-wrap">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
          </div>
          <div class="product-meta">
            <span class="product-category">${product.category}</span>
            <h3 class="product-name">${product.name}</h3>
            <div class="rating-row" aria-label="Rated ${product.rating} out of 5">
              <span>★</span>
              <span>${product.rating.toFixed(1)}</span>
            </div>
            <div class="price-row">
              <span class="current-price">${formatCurrency(product.price)}</span>
              ${product.oldPrice ? `<span class="old-price">${formatCurrency(product.oldPrice)}</span>` : ""}
            </div>
          </div>
          <button class="add-cart-btn" type="button" data-product-id="${product.id}">Add to Cart</button>
        </article>
      `
    )
    .join("");
}

function updateCartSummary() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  const totalPrice = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  subtotal.textContent = formatCurrency(totalPrice);
}

function renderCart() {
  if (!state.cart.length) {
    cartItems.innerHTML = "";
    emptyCart.classList.remove("hidden");
    subtotal.textContent = formatCurrency(0);
    updateCartSummary();
    return;
  }

  emptyCart.classList.add("hidden");

  cartItems.innerHTML = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return "";

      return `
        <div class="cart-item">
          <img class="cart-item-image" src="${product.image}" alt="${product.name}" />
          <div class="cart-item-details">
            <p class="cart-item-name">${product.name}</p>
            <div class="cart-price">${formatCurrency(product.price)}</div>
            <div class="cart-controls">
              <div class="quantity-box" aria-label="Quantity controls for ${product.name}">
                <button class="quantity-button" type="button" data-action="decrease" data-product-id="${product.id}" aria-label="Decrease quantity for ${product.name}">−</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-button" type="button" data-action="increase" data-product-id="${product.id}" aria-label="Increase quantity for ${product.name}">+</button>
              </div>
              <button class="cart-remove" type="button" data-action="remove" data-product-id="${product.id}">Remove</button>
            </div>
          </div>
          <strong class="cart-item-total">${formatCurrency(product.price * item.quantity)}</strong>
        </div>
      `;
    })
    .join("");

  updateCartSummary();
}

function addToCart(productId) {
  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }

  openCart();
  renderCart();
}

function updateQuantity(productId, change) {
  const item = state.cart.find((entry) => entry.id === productId);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== productId);
  }

  renderCart();
}

function removeProduct(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  renderCart();
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
}

function resetFilters() {
  state.searchTerm = "";
  state.selectedCategory = "All";
  state.priceRange = "all";
  state.sortOption = "featured";

  searchInput.value = "";
  categoryFilter.value = "All";
  priceFilter.value = "all";
  sortSelect.value = "featured";

  renderProducts();
}

searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value.trim();
  renderProducts();
});

categoryFilter.addEventListener("change", (event) => {
  state.selectedCategory = event.target.value;
  renderProducts();
});

priceFilter.addEventListener("change", (event) => {
  state.priceRange = event.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  state.sortOption = event.target.value;
  renderProducts();
});

clearFiltersBtn.addEventListener("click", resetFilters);

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-cart-btn");

  if (!button) return;

  const productId = Number(button.dataset.productId);
  addToCart(productId);
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest(".quantity-button");
  if (button) {
    const productId = Number(button.dataset.productId);
    const action = button.dataset.action;
    if (action === "increase") updateQuantity(productId, 1);
    if (action === "decrease") updateQuantity(productId, -1);
    return;
  }

  const removeButton = event.target.closest(".cart-remove");
  if (removeButton) {
    const productId = Number(removeButton.dataset.productId);
    removeProduct(productId);
  }
});

cartToggle.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
continueShopping.addEventListener("click", closeCartDrawer);
overlay.addEventListener("click", closeCartDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCartDrawer();
  }
});

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  alert("This is a UI-only checkout experience for the static storefront demo.");
});

buildCategoryOptions();
renderProducts();
renderCart();
