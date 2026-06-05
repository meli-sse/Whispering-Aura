function checkStrength(pwd) {
const criteria = {
len: pwd.length >= 8,
upper: /[A-Z]/.test(pwd),
num: /[0-9]/.test(pwd),
special: /[^A-Za-z0-9]/.test(pwd)
};

['len', 'upper', 'num', 'special'].forEach(k => {
document.getElementById('c-' + k).classList.toggle('met', criteria[k]);
});

let score = 0;
if (pwd.length > 0) score = 1;
if (pwd.length >= 8) score = 2;
if (pwd.length >= 8 && (criteria.upper || criteria.num)) score = 3;
if (pwd.length >= 8 && criteria.upper && criteria.num && criteria.special) score = 4;

const colors = ["#E24B4A", "#EF9F27", "#BA7517", "#639922"];
const labels = ["Très faible", "Faible", "Moyen", "Fort"];
const hints = ["Trop court", "Ajoutez des chiffres", "Ajoutez un symbole", "Excellent !"];

for (let i = 1; i <= 4; i++) {
const bar = document.getElementById('b' + i);
bar.style.background = i <= score ? colors[score - 1] : '#e0e0e0';
}

const slabel = document.getElementById('slabel');
const shint = document.getElementById('shint');

if (score > 0) {
slabel.textContent = labels[score - 1];
slabel.style.color = colors[score - 1];
shint.textContent = hints[score - 1];
} else {
slabel.textContent = '—';
slabel.style.color = '';
shint.textContent = '';
for (let i = 1; i <= 4; i++) {
document.getElementById('b' + i).style.background = '#686767';
}
}
}

//confirm password
function checkConfirm() {
const pwd = document.querySelector('input[type="password"]').value;
const confirm = document.getElementById('confirm-pwd');
const error = document.getElementById('confirm-error');

if (confirm.value === '') {
confirm.classList.remove('error', 'success');

error.textContent = '';
} else if (confirm.value === pwd) {
confirm.classList.remove('error');
confirm.classList.add('success');
error.textContent = ' Les mots de passe correspondent';
error.style.color = '#639922';
} else {
confirm.classList.remove('success');
confirm.classList.add('error');
error.textContent = ' Les mots de passe ne correspondent pas';
error.style.color = '#E24B4A';
}
}