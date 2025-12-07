// All products database
const allProducts = [
    {
        id: 1,
        name: "Classic Black Hoodie",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
        colors: ["black", "white", "gray", "navy"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        badge: "NEW",
        description: "Timeless black hoodie made from premium cotton blend. Perfect for everyday wear."
    },
    {
        id: 2,
        name: "Oversized Gray Hoodie",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
        colors: ["gray", "black", "brown"],
        sizes: ["M", "L", "XL", "XXL"],
        description: "Relaxed fit hoodie with a modern oversized silhouette."
    },
    {
        id: 3,
        name: "White Premium Hoodie",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
        colors: ["white", "cream", "pink"],
        sizes: ["XS", "S", "M", "L", "XL"],
        badge: "SALE",
        description: "Clean white hoodie with premium fabric and perfect fit."
    },
    {
        id: 4,
        name: "Navy Blue Hoodie",
        price: 52.99,
        image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80",
        colors: ["navy", "darkblue", "royalblue"],
        sizes: ["S", "M", "L", "XL"],
        description: "Deep navy blue hoodie with modern cut and comfortable fit."
    },
    {
        id: 5,
        name: "Red Streetwear Hoodie",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=600&q=80",
        colors: ["red", "burgundy", "crimson"],
        sizes: ["M", "L", "XL", "XXL"],
        badge: "HOT",
        description: "Bold red hoodie perfect for making a statement."
    },
    {
        id: 6,
        name: "Green Eco Hoodie",
        price: 64.99,
        image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80",
        colors: ["green", "olive", "forestgreen"],
        sizes: ["S", "M", "L", "XL"],
        description: "Eco-friendly hoodie made from sustainable materials."
    },
    {
        id: 7,
        name: "Purple Urban Hoodie",
        price: 56.99,
        image: "https://images.unsplash.com/photo-1620799140195-e1c0e8a7e8e7?w=600&q=80",
        colors: ["purple", "lavender", "violet"],
        sizes: ["M", "L", "XL"],
        description: "Unique purple hoodie with urban style."
    },
    {
        id: 8,
        name: "Beige Minimal Hoodie",
        price: 48.99,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
        colors: ["beige", "tan", "cream"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "Minimalist beige hoodie for a clean, modern look."
    },
    {
        id: 9,
        name: "Yellow Sunshine Hoodie",
        price: 51.99,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
        colors: ["yellow", "gold", "orange"],
        sizes: ["S", "M", "L", "XL"],
        badge: "NEW",
        description: "Bright yellow hoodie to brighten up your day."
    },
    {
        id: 10,
        name: "Camo Street Hoodie",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80",
        colors: ["green", "brown", "black"],
        sizes: ["M", "L", "XL", "XXL"],
        description: "Urban camouflage pattern hoodie for street style."
    },
    {
        id: 11,
        name: "Pastel Pink Hoodie",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
        colors: ["pink", "white"],
        sizes: ["XS", "S", "M", "L"],
        description: "Soft pastel pink hoodie, super comfortable."
    },
    {
        id: 12,
        name: "Tie-Dye Retro Hoodie",
        price: 62.99,
        image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=600&q=80",
        colors: ["purple", "blue", "pink"],
        sizes: ["S", "M", "L", "XL"],
        badge: "LIMITED",
        description: "Retro style tie-dye hoodie with vibrant colors."
    }
];

// Color swatches mapping
const colorSwatches = {
    black: "#000000",
    white: "#FFFFFF",
    gray: "#808080",
    navy: "#1e3a8a",
    red: "#ef4444",
    green: "#10b981",
    purple: "#7c3aed",
    beige: "#f5f5dc",
    brown: "#8b4513",
    cream: "#fffdd0",
    pink: "#ffc0cb",
    darkblue: "#000080",
    royalblue: "#4169e1",
    burgundy: "#800020",
    crimson: "#dc143c",
    olive: "#808000",
    forestgreen: "#228b22",
    lavender: "#e6e6fa",
    violet: "#8b00ff",
    tan: "#d2b48c"
};

// Render products
function renderProducts(productsToRender = allProducts) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = productsToRender.map(product => `
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <button class="quick-view">Quick View</button>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-colors">
                    ${product.colors.slice(0, 4).map((color, index) => `
                        <span class="color-swatch ${index === 0 ? 'active' : ''}" 
                              style="background: ${colorSwatches[color]}; ${color === 'white' ? 'border: 1px solid #ddd;' : ''}">
                        </span>
                    `).join('')}
                </div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Filter and sort products
function filterProducts() {
    let filtered = [...allProducts];

    // Color filter
    const colorFilter = document.getElementById('colorFilter');
    if (colorFilter && colorFilter.value !== 'all') {
        filtered = filtered.filter(p => p.colors.includes(colorFilter.value));
    }

    // Size filter
    const sizeFilter = document.getElementById('sizeFilter');
    if (sizeFilter && sizeFilter.value !== 'all') {
        filtered = filtered.filter(p => p.sizes.includes(sizeFilter.value.toUpperCase()));
    }

    // Price filter
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter && priceFilter.value !== 'all') {
        const [min, max] = priceFilter.value.split('-').map(v => v.replace('+', ''));
        filtered = filtered.filter(p => {
            if (max) {
                return p.price >= parseFloat(min) && p.price <= parseFloat(max);
            } else {
                return p.price >= parseFloat(min);
            }
        });
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        switch (sortSelect.value) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                filtered.reverse();
                break;
        }
    }

    renderProducts(filtered);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Add event listeners to filters
    ['sortSelect', 'colorFilter', 'sizeFilter', 'priceFilter'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', filterProducts);
        }
    });
});
