const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!nom || !email || !phone || !message) {
        successMessage.textContent =
            "⚠️ Veuillez remplir tous les champs.";
        successMessage.style.color = "red";
        return;
    }

    successMessage.textContent =
        "✨ Merci " + nom + " ! Votre message a été envoyé.";
    successMessage.style.color = "green";

    form.reset();
});
