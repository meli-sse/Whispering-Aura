// Select elements
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const createAccountLink = document.getElementById('createAccount');
const forgotPasswordLink = document.getElementById('forgotPassword');
const statusMsg = document.getElementById('statusMsg');

// ===== LOGIN FORM SUBMISSION =====
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!email || !password) {
        showStatus('Veuillez remplir tous les champs.', '#c45050');
        return;
    }

    if (!isValidEmail(email)) {
        showStatus('Adresse email invalide.', '#c45050');
        return;
    }

    // Simulate login process
    loginBtn.textContent = 'Connexion...';
    loginBtn.style.opacity = '0.7';
    loginBtn.disabled = true;

    setTimeout(() => {
        loginBtn.textContent = 'Login';
        loginBtn.style.opacity = '1';
        loginBtn.disabled = false;
        showStatus('✓ Connexion réussie ! Bienvenue.', '#b48a5a');

        // Clear inputs after success
        setTimeout(() => {
            emailInput.value = '';
            passwordInput.value = '';
        }, 1500);
    }, 1500);
});

// ===== CREATE ACCOUNT LINK =====
createAccountLink.addEventListener('click', function(e) {
    e.preventDefault();
    showStatus('Redirection vers la page d\'inscription...', '#b48a5a');
});

// ===== FORGOT PASSWORD LINK =====
forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    showStatus('Lien de réinitialisation envoyé par email.', '#b48a5a');
});

// ===== HELPER FUNCTIONS =====
function showStatus(message, color) {
    statusMsg.textContent = message;
    statusMsg.style.color = color;
    statusMsg.style.opacity = '1';

    setTimeout(() => {
        statusMsg.style.opacity = '0';
    }, 3000);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== INPUT FOCUS ANIMATION =====
[emailInput, passwordInput].forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});