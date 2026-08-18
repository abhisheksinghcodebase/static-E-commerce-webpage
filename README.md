# Vela Studio | Modern E-commerce Storefront

A modern, fully responsive static e-commerce webpage built with HTML, CSS, and vanilla JavaScript. This project showcases a complete frontend shopping experience with product filtering, search functionality, and an interactive shopping cart.

> **Project Type:** GNCIPL Internship Program - Week 01  
> **Repository:** [static-E-commerce-webpage](https://github.com/abhisheksinghcodebase/static-E-commerce-webpage)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [File Descriptions](#file-descriptions)
- [Key JavaScript Functions](#key-javascript-functions)
- [Testing](#testing)
- [Design System](#design-system)
- [Responsive Design](#responsive-design)
- [Future Enhancements](#future-enhancements)

---

## 🎯 Overview

**Vela Studio** is a static e-commerce storefront designed to demonstrate modern web development practices. The site features a curated collection of fashion and accessories with an elegant, minimalist design language. It provides users with an intuitive shopping experience through:

- **Responsive Layout:** Mobile-first design that works on all screen sizes
- **Dynamic Product Rendering:** Products loaded from JavaScript data structures
- **Interactive Filtering:** Filter by category and price range
- **Real-time Search:** Instant product search functionality
- **Shopping Cart:** Functional cart system with quantity management
- **Modern UI/UX:** Clean, professional design with smooth interactions

This is a **frontend-only project** with no backend server, database, or payment processing system.

---

## ✨ Features

### 1. **Responsive Header Navigation**
   - Sticky navigation bar with smooth blur effect
   - Mobile menu toggle button
   - Brand logo with home link
   - Navigation links (Home, Shop, New Arrivals, Offers)
   - Integrated search box
   - Shopping cart button with item counter

### 2. **Hero Section**
   - Eye-catching promotional banner
   - Call-to-action buttons (Shop Now, Explore Deals)
   - Store statistics (customer count, ratings, shipping time)
   - Featured product showcase with discount badge

### 3. **Product Catalog**
   - Dynamic grid layout (responsive: 1-4 columns)
   - 12 featured products with high-quality images
   - Product details: name, category, price, original price, rating
   - Special badges (New, Hot, Sale, Best Seller, etc.)
   - Quick add-to-cart functionality

### 4. **Search & Filter System**
   - **Search:** Real-time product name and category search
   - **Category Filter:** Filter by Women, Men, Shoes, Accessories
   - **Price Filter:** Filter by price range
   - **Sorting:** Sort by price (Low to High / High to Low) and rating
   - Results counter showing filtered product count

### 5. **Shopping Cart**
   - Cart drawer with smooth slide-in animation
   - Add/remove items functionality
   - Quantity adjustment (increment/decrement)
   - Real-time cart count display in header
   - Subtotal calculation
   - Empty cart state with messaging

### 6. **Product Details**
   - High-quality Unsplash images
   - Star ratings (4.4 - 4.9 out of 5)
   - Price comparison (current vs. original price)
   - Category classification
   - Seasonal badges for marketing

---

## 📁 Project Structure

```
.
├── index.html           # Main HTML markup and structure
├── style.css            # Complete styling and responsive design
├── script.js            # JavaScript logic (cart, search, filters)
├── test.js              # Smoke tests for cart functionality
├── presentation.md      # Project slides and overview
└── README.md            # This file
```

### Directory Overview:
- **Root Level:** All project files are in the root directory for simplicity (static site)
- **No Build System:** Project runs directly in the browser without compilation
- **Single Page Application:** All content loads in one HTML file with JavaScript routing

---

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|-----------|---------|---------|
| **HTML5** | Semantic markup and structure | Latest |
| **CSS3** | Styling, animations, and responsive layout | Latest |
| **JavaScript (ES6+)** | DOM manipulation, event handling, state management | Vanilla JS |
| **Google Fonts** | Typography (Inter font family) | Latest |
| **Unsplash API** | Product images | Free tier |

### No External Dependencies:
- ❌ No framework (React, Vue, Angular)
- ❌ No CSS preprocessor (SASS, Less)
- ❌ No build tools (Webpack, Vite)
- ❌ No package manager (npm, yarn) required

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor for code editing (VS Code, Sublime, etc.)
- Basic understanding of HTML, CSS, and JavaScript

### Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/abhisheksinghcodebase/static-E-commerce-webpage.git
   cd static-E-commerce-webpage
   ```

2. **Open in Browser:**
   - Option A: Double-click `index.html` to open locally
   - Option B: Use VS Code Live Server extension
   - Option C: Run a local HTTP server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. **Access the Site:**
   - If using local server, navigate to `http://localhost:8000`
   - Start shopping!

---

## 📱 How to Use

### For Shoppers:

1. **Browse Products:**
   - Scroll through the main product grid
   - Click product cards to view details
   - View prices, ratings, and special badges

2. **Search for Products:**
   - Use the search bar in the header
   - Type product name or category
   - Results update in real-time

3. **Filter Products:**
   - Use category filters on the left (Women, Men, Shoes, Accessories)
   - Set price range using the price slider
   - Combine multiple filters for precise results
   - Sort by Price or Rating

4. **Add to Cart:**
   - Click "Add to Cart" button on any product
   - Cart counter updates in the header
   - Click cart button to open cart drawer

5. **Manage Cart:**
   - View all items in the cart drawer
   - Increase/decrease quantity with +/- buttons
   - Remove items with delete button
   - See real-time subtotal calculation
   - Close cart when done shopping

### For Developers:

- **Modify Products:** Edit the `products` array in `script.js`
- **Customize Colors:** Update CSS variables in `:root` selector in `style.css`
- **Add New Features:** Extend event listeners and functions in `script.js`
- **Change Images:** Update `image` URLs in product data

---

## 📄 File Descriptions

### `index.html`
**Purpose:** Main HTML structure and semantic markup  
**Key Sections:**
- `<header>` - Navigation, search, cart button
- `<section class="hero">` - Hero banner with CTA
- `<section class="catalog">` - Product grid and filters
- `<section class="newsletter">` - Email subscription section
- `<footer>` - Links and copyright

**Key Attributes:**
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels for accessibility
- Meta tags for SEO and viewport
- Google Fonts preconnect for performance

### `style.css`
**Purpose:** Complete visual styling and responsive design  
**Key Sections:**
- `:root` CSS variables - Colors, spacing, typography
- Base styles - Reset, fonts, HTML defaults
- Layout components - Header, hero, catalog, footer
- Interactive elements - Buttons, inputs, modals
- Responsive breakpoints - Mobile (320px), Tablet (768px), Desktop (1024px+)
- Animations - Smooth transitions and hover effects

**CSS Features:**
- CSS Grid for product layout
- Flexbox for component alignment
- CSS custom properties for theming
- Media queries for responsiveness
- Backdrop filters for glass-morphism effects

### `script.js`
**Purpose:** JavaScript logic for interactivity and state management  
**Key Functionality:**
- **Product Data:** Array of 12 products with full details
- **Cart Management:** Add, remove, update quantities
- **Search:** Filter products by name and category
- **Filtering:** Category and price range filtering
- **Sorting:** Sort by price and rating
- **DOM Manipulation:** Dynamically render products and cart
- **Event Listeners:** Handle user interactions

**Main Functions:**
```javascript
// Cart Operations
addToCart(productId)
removeFromCart(productId)
updateQuantity(productId, quantity)
getCartCount()
getSubtotal()

// Filtering & Search
filterProducts()
searchProducts(query)
sortProducts(sortBy)

// DOM Rendering
renderProducts(productsToRender)
renderCart()
updateCartDisplay()

// Event Handlers
handleAddToCart(id)
handleRemoveFromCart(id)
handleSearch(query)
```

### `test.js`
**Purpose:** Automated testing for cart functionality  
**Test Coverage:**
- Adding items to cart
- Quantity accumulation for duplicate items
- Cart count calculation
- Subtotal calculation

**Run Tests:**
```bash
node test.js
```

**Expected Output:**
```
JavaScript smoke test passed.
```

### `presentation.md`
**Purpose:** Project slides and presentation notes  
**Contains:**
- Project overview
- Objectives and goals
- Feature descriptions
- Technology stack
- Development highlights

---

## 💻 Key JavaScript Functions

### Cart Management

```javascript
/**
 * Add product to cart or increase quantity if already present
 * @param {number} productId - ID of product to add
 */
addToCart(productId)

/**
 * Remove product completely from cart
 * @param {number} productId - ID of product to remove
 */
removeFromCart(productId)

/**
 * Update quantity of item in cart
 * @param {number} productId - ID of product
 * @param {number} quantity - New quantity
 */
updateQuantity(productId, quantity)

/**
 * Get total number of items in cart
 * @returns {number} Total item count
 */
getCartCount()

/**
 * Calculate cart subtotal
 * @returns {number} Sum of all items with quantities
 */
getSubtotal()
```

### Search & Filter

```javascript
/**
 * Apply all active filters and search
 * Updates displayed products in real-time
 */
filterProducts()

/**
 * Sort products by selected criteria
 * @param {string} sortBy - 'price-low', 'price-high', 'rating'
 */
sortProducts(sortBy)

/**
 * Filter products by search term
 * @param {string} query - Search term
 * @returns {array} Matching products
 */
searchProducts(query)
```

### Rendering

```javascript
/**
 * Render products to the DOM
 * @param {array} productsToRender - Products to display
 */
renderProducts(productsToRender)

/**
 * Update cart drawer display
 */
renderCart()

/**
 * Update cart count in header
 */
updateCartDisplay()
```

---

## 🧪 Testing

### Manual Testing Checklist:

#### ✅ Functionality Tests
- [ ] Products load correctly on page load
- [ ] Search filters products in real-time
- [ ] Category filter works correctly
- [ ] Price range filter constrains products
- [ ] Sorting by price works (ascending/descending)
- [ ] Sorting by rating works
- [ ] Add to cart increases cart count
- [ ] Duplicate items increase quantity instead of adding new entry
- [ ] Remove from cart removes item completely
- [ ] Quantity +/- buttons work in cart
- [ ] Subtotal calculation is accurate

#### ✅ Responsive Tests
- [ ] Page displays correctly on mobile (320px)
- [ ] Page displays correctly on tablet (768px)
- [ ] Page displays correctly on desktop (1024px+)
- [ ] Navigation menu toggle works on mobile
- [ ] Product grid adapts to screen size
- [ ] Cart drawer is usable on all sizes

#### ✅ Accessibility Tests
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Buttons have clear labels
- [ ] Color contrast is sufficient
- [ ] Keyboard navigation works
- [ ] ARIA labels are present

### Automated Testing:

**Run the included test suite:**
```bash
node test.js
```

**Test File:** [test.js](test.js)  
**Tests Covered:**
- Cart count calculation
- Duplicate item handling
- Subtotal accuracy

---

## 🎨 Design System

### Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#f7f1ee` | Background color |
| `--surface` | `#fffdfb` | Card backgrounds |
| `--primary` | `#b85840` | Brand color (buttons, accents) |
| `--primary-dark` | `#81422f` | Darker brand shade |
| `--accent` | `#f7d7c8` | Light accent color |
| `--text` | `#1b1716` | Main text color |
| `--text-soft` | `#6d5d58` | Secondary text |
| `--border` | `rgba(28, 20, 18, 0.08)` | Border color |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Body | Inter | 400 | 1rem |
| Headings | Inter | 600-800 | 1.5-2.5rem |
| Labels | Inter | 700 | 0.75rem |

### Spacing Scale

- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px

### Border Radius

- `--radius-sm`: 12px (small elements)
- `--radius-md`: 18px (cards, buttons)
- `--radius-lg`: 28px (large components)

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile-first approach */
320px   - Small phones
480px   - Large phones
768px   - Tablets
1024px  - Desktop
1440px  - Large desktop
```

### Responsive Features

- **Header:** Hamburger menu on mobile, full nav on desktop
- **Hero:** Single column on mobile, two-column layout on desktop
- **Product Grid:**
  - 1 column: 320px - 480px
  - 2 columns: 480px - 768px
  - 3 columns: 768px - 1024px
  - 4 columns: 1024px+
- **Cart Drawer:** Full-screen on mobile, side drawer on desktop
- **Images:** Responsive with `max-width: 100%` and `height: auto`

### Mobile Optimizations

- Touch-friendly button sizes (48px minimum)
- Larger font sizes on small screens
- Optimized spacing for thumb-friendly interaction
- Full-width forms and inputs
- Collapsible navigation menu

---

## 🔮 Future Enhancements

### Immediate Improvements (Phase 1)
- [ ] Add product detail page modal/overlay
- [ ] Implement wishlist/favorites functionality
- [ ] Add product image gallery with zoom
- [ ] Customer reviews and ratings section
- [ ] Product recommendations based on category

### E-commerce Features (Phase 2)
- [ ] User authentication/login
- [ ] Customer account and order history
- [ ] Product size/color variants
- [ ] Coupon and promo code system
- [ ] Checkout process (frontend mockup)

### Backend Integration (Phase 3)
- [ ] Connect to backend API for products
- [ ] Real database for inventory management
- [ ] Payment gateway integration (Stripe, Razorpay)
- [ ] User authentication with JWT
- [ ] Order management system

### Performance & Analytics (Phase 4)
- [ ] Image optimization and lazy loading
- [ ] Analytics integration (Google Analytics)
- [ ] A/B testing framework
- [ ] Performance monitoring
- [ ] CDN integration for assets

### Advanced Features (Phase 5)
- [ ] Dark mode support
- [ ] Multi-language support (i18n)
- [ ] PWA capabilities (offline support)
- [ ] Real-time inventory status
- [ ] Social media integration

---

## 📊 Product Data Structure

Each product object contains:

```javascript
{
  id: number,              // Unique identifier
  name: string,            // Product name
  category: string,        // Category (Women, Men, Shoes, Accessories)
  price: number,           // Current price in INR
  oldPrice: number,        // Original price (for discount display)
  rating: number,          // Star rating (0-5)
  image: string,           // Image URL (from Unsplash)
  badge: string            // Special label (New, Hot, Sale, etc.)
}
```

**Example:**
```javascript
{
  id: 1,
  name: "Aster Everyday Tee",
  category: "Women",
  price: 1499,
  oldPrice: 1899,
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1521572267360-...",
  badge: "New"
}
```

---

## 🤝 Contributing

This is an internship project. For suggestions or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open-source and available under the MIT License. See LICENSE file for details.

---

## 👨‍💻 Author

**Abhishek Singh**
- GitHub: [abhisheksinghcodebase](https://github.com/abhisheksinghcodebase)
- Repository: [static-E-commerce-webpage](https://github.com/abhisheksinghcodebase/static-E-commerce-webpage)

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

✅ **HTML5** - Semantic markup and structure  
✅ **CSS3** - Modern layouts (Grid, Flexbox), animations, responsive design  
✅ **JavaScript (ES6+)** - DOM manipulation, event handling, data management  
✅ **Frontend Architecture** - Modular code, clean functions, reusable components  
✅ **Responsive Design** - Mobile-first approach, adaptive layouts  
✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation  
✅ **Performance** - Optimized rendering, efficient filtering  
✅ **UI/UX** - Modern design, intuitive interactions, visual hierarchy  

---

## 🙏 Acknowledgments

- **GNCIPL Internship Program** for the project opportunity
- **Google Fonts** for the Inter typeface
- **Unsplash** for high-quality product images
- **Web Development Best Practices** for design inspiration

---

**Last Updated:** August 2026  
**Project Status:** ✅ Complete (Week 1 Internship Project) 
