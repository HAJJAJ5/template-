# 🔥 HoodieStore - E-Commerce Website

A modern, fully-functional e-commerce website for selling premium hoodies with fixed background parallax effects.

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog** - 8+ premium hoodie products
- **Shopping Cart** - Full cart functionality with localStorage
- **Product Filtering** - Filter by color, size, and price
- **Product Sorting** - Sort by price, newest, featured
- **Responsive Design** - Works on all devices

### 🎨 Design
- **Fixed Background Parallax** - Beautiful scrolling effects
- **Modern UI** - Clean, professional design
- **Color Variations** - Multiple color options per product
- **Size Selection** - XS to XXL sizes available

### 💻 Technical Features
- **LocalStorage Cart** - Cart persists on page reload
- **Dynamic Product Rendering** - JavaScript-powered catalog
- **Form Validation** - Checkout form validation
- **Smooth Animations** - Hover effects and transitions
- **Mobile Responsive** - Mobile-first design

## 📁 File Structure

```
HoodieStore/
├── index.html          # Homepage
├── shop.html           # Product catalog
├── cart.html           # Shopping cart
├── checkout.html       # Checkout page (to be added)
├── about.html          # About page (to be added)
├── contact.html        # Contact page (to be added)
│
├── css/
│   ├── main.css       # Main styles & navigation
│   ├── products.css   # Product card styles
│   └── cart.css       # Cart & checkout styles
│
├── js/
│   ├── main.js        # General functionality
│   ├── cart.js        # Shopping cart logic
│   └── products.js    # Product database & filters
│
└── images/            # Product images (using Unsplash URLs)
```

## 🚀 Getting Started

1. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for best results

2. **Browse Products**
   - Click "Shop Now" or navigate to the Shop page
   - Use filters to find your perfect hoodie

3. **Add to Cart**
   - Click "Add to Cart" on any product
   - Cart badge updates automatically

4. **Checkout**
   - View cart and adjust quantities
   - Proceed to checkout (UI only, no payment processing)

## 🎨 Color Palette

- **Primary Blue**: #2563eb
- **Secondary Purple**: #7c3aed
- **Accent Amber**: #f59e0b
- **Dark Gray**: #1f2937
- **Success Green**: #10b981
- **Danger Red**: #ef4444

## 📦 Products

The store includes 8 premium hoodies:
1. Classic Black Hoodie - $49.99
2. Oversized Gray Hoodie - $54.99
3. White Premium Hoodie - $44.99
4. Navy Blue Hoodie - $52.99
5. Red Streetwear Hoodie - $59.99
6. Green Eco Hoodie - $64.99
7. Purple Urban Hoodie - $56.99
8. Beige Minimal Hoodie - $48.99

## 🛠️ Customization

### Adding New Products
Edit `js/products.js` and add to the `allProducts` array:

```javascript
{
    id: 9,
    name: "Your Hoodie Name",
    price: 49.99,
    image: "image-url",
    colors: ["black", "white"],
    sizes: ["S", "M", "L", "XL"],
    description: "Description here"
}
```

### Changing Colors
Edit CSS variables in `css/main.css`:

```css
:root {
    --primary: #2563eb;
    --secondary: #7c3aed;
    /* ... */
}
```

### Adding Images
Replace Unsplash URLs with your own product images in:
- `js/products.js` (product database)
- HTML files (hero backgrounds)

## 📱 Responsive Breakpoints

- **Desktop**: 1400px+ (4 columns)
- **Tablet**: 768px - 1399px (2-3 columns)
- **Mobile**: < 768px (1-2 columns)

## ⚠️ Important Notes

### Front-End Only
This is a **front-end only** implementation:
- ✅ Shopping cart (browser storage)
- ✅ Product filtering and sorting
- ✅ Checkout form UI
- ❌ No real payment processing
- ❌ No backend/database
- ❌ No user accounts

### Images
- Currently using Unsplash API for hoodie images
- For production, replace with your own product photography
- Images are loaded via CDN for fast performance

## 🎯 Future Enhancements

- [ ] Product detail page with image gallery
- [ ] About and Contact pages
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Size guide modal
- [ ] Search functionality
- [ ] Backend integration
- [ ] Payment processing
- [ ] User accounts

## 📄 License

This is a template project. Feel free to use and modify as needed.

## 🤝 Support

For questions or issues, refer to the code comments or modify as needed for your use case.

---

**Built with ❤️ for selling premium hoodies!** 🔥👕
