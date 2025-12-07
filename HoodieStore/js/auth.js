// Mock Authentication (Demo Mode)
// Uses LocalStorage to simulate a backend

const MOCK_DELAY = 800; // Simulate network delay

// Initialize Auth State
document.addEventListener('DOMContentLoaded', () => {
    checkAuthState();
});

function checkAuthState() {
    const user = JSON.parse(localStorage.getItem('hoodieUser'));
    const userBtn = document.getElementById('userBtn');

    if (user) {
        console.log('User logged in:', user.email);
        if (userBtn) {
            userBtn.innerHTML = `
                <div style="width: 32px; height: 32px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">
                    ${getInitials(user.name)}
                </div>
            `;
            userBtn.href = "profile.html";
        }
        // Update profile page if we are on it
        if (window.location.pathname.includes('profile.html')) {
            updateProfileUI(user);
        }
    } else {
        console.log('User logged out');
        if (userBtn) {
            userBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            `;
            userBtn.href = "login.html";
        }
        // Redirect if on profile page
        if (window.location.pathname.includes('profile.html')) {
            window.location.href = 'login.html';
        }
    }
}

// Register User
async function registerUser(email, password, name) {
    await simulateNetworkRequest();

    const existingUsers = JSON.parse(localStorage.getItem('hoodieUsers') || '[]');

    if (existingUsers.find(u => u.email === email)) {
        showNotification('Email already registered', 'error');
        return;
    }

    const newUser = {
        id: 'user_' + Date.now(),
        name,
        email,
        password, // In a real app, never store plain passwords!
        joined: new Date().toLocaleDateString()
    };

    existingUsers.push(newUser);
    localStorage.setItem('hoodieUsers', JSON.stringify(existingUsers));

    // Auto login
    localStorage.setItem('hoodieUser', JSON.stringify(newUser));

    showNotification('Account created successfully!', 'success');
    setTimeout(() => window.location.href = 'index.html', 1000);
}

// Login User
async function loginUser(email, password) {
    await simulateNetworkRequest();

    const existingUsers = JSON.parse(localStorage.getItem('hoodieUsers') || '[]');
    const user = existingUsers.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('hoodieUser', JSON.stringify(user));
        showNotification('Logged in successfully!', 'success');
        setTimeout(() => window.location.href = 'index.html', 1000);
    } else {
        showNotification('Invalid email or password', 'error');
    }
}

// Logout User
async function logoutUser() {
    await simulateNetworkRequest();
    localStorage.removeItem('hoodieUser');
    showNotification('Logged out successfully', 'success');
    setTimeout(() => window.location.href = 'login.html', 1000);
}

// Google Login (Mock)
async function loginWithGoogle() {
    await simulateNetworkRequest();

    const mockGoogleUser = {
        id: 'google_' + Date.now(),
        name: 'Google User',
        email: 'user@gmail.com',
        joined: new Date().toLocaleDateString()
    };

    localStorage.setItem('hoodieUser', JSON.stringify(mockGoogleUser));
    showNotification('Logged in with Google!', 'success');
    setTimeout(() => window.location.href = 'index.html', 1000);
}

// Helper Functions
function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
}

function getInitials(name) {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'U';
}

function updateProfileUI(user) {
    const nameEl = document.getElementById('userName');
    const emailEl = document.getElementById('userEmail');
    const avatarEl = document.getElementById('avatar');

    if (nameEl) nameEl.textContent = user.name;
    if (emailEl) emailEl.textContent = user.email;
    if (avatarEl) avatarEl.textContent = getInitials(user.name);
}
