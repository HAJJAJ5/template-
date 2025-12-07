// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Product database
const products = {
    1: { id: 1, name: "Classic Black Hoodie", price: 49.99, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
    2: { id: 2, name: "Oversized Gray Hoodie", price: 54.99, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
    3: { id: 3, name: "White Premium Hoodie", price: 44.99, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80" },
    4: { id: 4, name: "Navy Blue Hoodie", price: 52.99, image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&q=80" },
    5: { id: 5, name: "Red Streetwear Hoodie", price: 59.99, image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=400&q=80" },
    6: { id: 6, name: "Green Eco Hoodie", price: 64.99, image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&q=80" }
};

// Add to cart
function addToCart(productId, size = 'M', color = 'Black', quantity = 1) {
    const product = products[productId];
    if (!product) return;

    const cartItem = {
        ...product,
        size,
        color,
        quantity,
        cartId: `${productId}-${size}-${color}`
    };

    const existingIndex = cart.findIndex(item => item.cartId === cartItem.cartId);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push(cartItem);
    }

    saveCart();
    updateCartCount();
    showNotification('Added to cart!');
}

// Remove from cart
function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
    updateCartCount();
    if (typeof renderCart === 'function') renderCart();
}

// Update quantity
function updateQuantity(cartId, newQuantity) {
    const item = cart.find(item => item.cartId === cartId);
    if (item) {
        item.quantity = Math.max(1, newQuantity);
        saveCart();
        if (typeof renderCart === 'function') renderCart();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count badge
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cartCount');
    if (badge) {
        badge.textContent = count;
    }
}

// Calculate cart total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);
