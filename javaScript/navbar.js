window.addEventListener('DOMContentLoaded', function() {
    console.log(' Navbar script running on:', window.location.pathname);
    
    const container = document.getElementById('navbar-container');
    
    if (!container) {
        console.error('❌ navbar-container not found!');
        return;
    }
    
    const currentPath = window.location.pathname;
    let navbarPath;
    
    if (currentPath.includes('/content/')) {
        navbarPath = 'navbar.html';  
    } else {
        navbarPath = 'content/navbar.html';  
    }
    
    console.log('📂 Loading navbar from:', navbarPath);
    
    fetch(navbarPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load navbar: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
            console.log('✅ Navbar loaded successfully');
            
            setTimeout(initSearch, 100);
            updateNavbarCart();
        })
        .catch(error => {
            console.error('❌ Error loading navbar:', error);
            console.log('💡 Current path:', currentPath);
            console.log('💡 Tried to fetch:', navbarPath);
        });
});

function initSearch() {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    
    if (!searchIcon || !searchInput) {
        console.error('❌ Search elements not found!');
        console.log('Search icon:', searchIcon);
        console.log('Search input:', searchInput);
        return;
    }
    
    console.log('✅ Search elements found, attaching events');
    
    searchIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!searchIcon.contains(e.target) && !searchInput.contains(e.target)) {
            searchInput.classList.remove('active');
        }
    });
}

function getCart() {
    return JSON.parse(localStorage.getItem('monPanier')) || [];
}

function updateNavbarCart() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = total;
    }
}