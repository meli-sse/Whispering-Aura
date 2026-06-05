function getCart() {
    return JSON.parse(localStorage.getItem('monPanier')) || [];
}

function saveCart(cart) {
    localStorage.setItem('monPanier', JSON.stringify(cart));
}

function renderCart() {
    const cart = getCart();

    const container = document.getElementById('contenu-panier');
    const totalBox = document.getElementById('affichage-total');
    const subTotalBox = document.getElementById('sous-total');
    const badge = document.getElementById('panier-badge');

    if (!container || !totalBox || !subTotalBox) return;

    let total = 0;

    if (badge) {
        badge.textContent =
            cart.reduce((sum, item) => sum + item.quantity, 0) + " article(s)";
    }

    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>Votre panier est vide.</p>";
        totalBox.textContent = "0 €";
        subTotalBox.textContent = "0 €";
        return;
    }

    container.innerHTML = cart.map(item => {
        total += item.price * item.quantity;

        return `
            <div class="produit">
                <img src="${item.image}" alt="${item.name}">
                <div class="info">
                    <h3>${item.name}</h3>
                    <p>${item.price} €</p>

                    <div>
                        <button onclick="changeQty('${item.id}', -1)">➖</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQty('${item.id}', 1)">➕</button>
                        <button onclick="removeItem('${item.id}')">❌</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    subTotalBox.textContent = total + " €";
    totalBox.textContent = "Total : " + total + " €";
}

function changeQty(id, delta) {
    let cart = getCart();

    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.quantity += delta;

    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    saveCart(cart);

    renderCart();
    updateNavbarCart(); 
}

function removeItem(id) {
    let cart = getCart();

    cart = cart.filter(p => p.id !== id);

    saveCart(cart);

    renderCart();
    updateNavbarCart(); 
}

function updateNavbarCart() {
    const cart = JSON.parse(localStorage.getItem('monPanier')) || [];

    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    const badge = document.getElementById('cart-count');

    if (badge) {
        badge.textContent = total;
    }
}

document.addEventListener("DOMContentLoaded", renderCart);


function validateForm() {
    let inputs = document.querySelectorAll(".formulaire input[type='text']");
    let select = document.getElementById("wilaya-select");

    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("Vous devez remplir tous les champs 😊 ");
            return false;
        }
    }

    if (select.value === "") {
        alert("You have to choisir une wilaya 👇");
        return false;
    }

    alert("Commande validée ✅ ");
    return false; 
}
