/*CATALOGUE DATA*/
const perfumes = {
    "fresh-oria": {
        id: "fresh-oria",
        name: "Fresh Oria",
        description: "Naturel et vivifiant, Fresh Oria offre une sensation de propreté absolue. Un souffle d'air pur qui réveille les sens dès le matin.",
        price: 55,
        family: "Aromatique",
        occasions: ["Jour", "Été"],
        image: "./perfume-bottles/FreshOria.png",
        notes: { tete: "Menthe, Bergamote, Eucalyptus, Lavande", coeur: "Romarin, Sauge, Thym, Basilic", fond: "Citron, Cedre, Musc blanc, Ambre gris" }
    },
    "Limonea": {
        id: "Limonea",
        name: "Limonea",
        description: "Fraîcheur vive et énergisante.",
        price: 120,
        family: "Hespéridé",
        occasions: ["Jour", "Été"],
        image: "./perfume-bottles/Limonea.png",
        notes: { tete: "Citron, Pamplemousse, Mandarine, Yuzu", coeur: "Bergamote, Neroli, Fleurs d'oranger, The vert", fond: "Menthe, Musc Ceder, Patchouli" }
    },
    "Zephyria-Air": {
        id: "Zephyria-Air",
        name: "Zephyria Air",
        description: "Léger comme le vent, subtil et élégant.",
        price: 180,
        family: "Frais",
        occasions: ["Nuit", "Été"],
        image: "./perfume-bottles/ZephyriaAir.png",
        notes: { tete: "Air Pur, Ozone, Aldehydes, Concombre", coeur: "Fleurs legeres, Muguet, Pivoines, Freesia", fond: "Musc Blanc, Ambre gris, Bois de Santal, Vanille douce" }
    },
    "Aqualis-Breeze": {
        id: "Aqualis-Breeze",
        name: "Aqualis Breeze",
        description: "Une vague de fraîcheur pure et legere.",
        price: 75,
        family: "Aquatique",
        occasions: ["Jour", "Été"],
        image: "./perfume-bottles/AqualisBreeze.png",
        notes: { tete: "Notes marines, Algues vertes, Brise oceanique, Sel marin", coeur: "Menthe poivree, Menthe verte, Menthe des champs", fond: "Citron, Lime, Pamplemousse, Mandarine" }
    },
    "Citria-Fresh": {
        id: "Citria-Fresh",
        name: "Citria Fresh",
        description: "Dynamique et rafraîchissant, parfait pour l'ete.",
        price: 145,
        family: "Boisé",
        occasions: ["Jour", "Été"],
        image: "./perfume-bottles/CitriaFresh.png",
        notes: { tete: "Citron, Lime, Yuzu, Verveine citronnee", coeur: "Orange, Mandarine, Bigarade, Neroli", fond: "Pamplemousse, Pomelo rose, Bergamote, Kumquat" }
    },
    "Noctessence": {
        id: "Noctessence",
        name: "Noctessence",
        description: "Mystérieux et intense, tres luxueux.",
        price: 95,
        family: ["Oriental","Boisé"],
        occasions: ["Nuit", "Hiver"],
        image: "./perfume-bottles/Noctessence.png",
        notes: { tete: "Oud, Bois de Santal, Patchouli, Cedre", coeur: "Ambre, Benjoin, Labdanum, Vanille", fond: "Musc Noir, Cuir, Encens, Tonka" }
    },
    "Mysteria-Noire": {
        id: "Mysteria-Noire",
        name: "Mysteria Noire",
        description: "Chaud et séduisant, parfait pour captiver.",
        price: 135,
        family: ["Oriental","Épicé"],
        occasions: ["Nuit", "Hiver"],
        image: "./perfume-bottles/MysteriaNoire.png",
        notes: { tete: "Cannelle, Clou de Girofle, Cardamome, Poivre noir", coeur: "Vanille, Feve Tonka, Benjoin, Cacao", fond: "Ambre, Labdanum, Ecens, Bois de Santal" }
    },
    "Amber-Night": {
        id: "Amber-Night",
        name: "Amber Night",
        description: "Chaud et enveloppant, tres séduisant.",
        price: 80,
        family: "Oriental",
        occasions: ["Nuit", "Hiver"],
        image: "./perfume-bottles/AmberNight.png",
        notes: { tete: "Ambre, Benjoin, Labdanum, Ecens", coeur: "Vanille, Feve Tonka, Cacao, Miel", fond: "Musc Noir, Cuir, Patchouli, Bois de Santal" }
    },
    "Coconea": {
        id: "Coconea",
        name: "Coconea",
        description: "Doux et ensoleillé, sensation réconfortante et chaleureuse.",
        price: 45,
        family: ["Tropical", "Gourmand"],
        occasions: ["Nuit", "Été"],
        image: "./perfume-bottles/Coconea.png",
        notes: { tete: "Noix de Coco, Fleurs de Tiare, Ylang-Ylang, Amande douce", coeur: "Vanille, Feve Tonka, Cacao, Benjoin", fond: "Lait de Coco, Miel, Bois de Santal, Musc blanc" }
    },
    "Midnight-Seduction": {
        id: "Midnight-Seduction",
        name: "Midnight Seduction",
        description: "Mystérieux et irrésistible, incarne la sensualité pure.",
        price: 170,
        family: ["Oriental", "Épicé"],
        occasions: ["Nuit", "Hiver"],
        image: "./perfume-bottles/MidnightSeduction.png",
        notes: { tete: "Vanille Noire, Feve Tonka, Cacao noir, Benjoin", coeur: "Ambre, Labdanum, Encens, Miel", fond: "Poivre rose, Cardamome, Clou de Girofle, Safran" }
    },
    "Velour-Prestige": {
        id: "Velour-Prestige",
        name: "Velour Prestige",
        description: "Élégant et raffinéé, respire le luxe et la classe.",
        price: 100,
        family: ["Boisé", "Floral"],
        occasions: ["Jour", "Hiver", "Été"],
        image: "./perfume-bottles/VelourPrestige.png",
        notes: { tete: "Bois de Santal, Cedre, Oud, Vetiver", coeur: "Rose, Iris, Violette, Jasmin, Pivoines", fond: "Musc Blanc, Ambre gris, Feve Tonka, Vanille douce" }
    },
    "Golden-Empire": {
        id: "Golden-Empire",
        name: "Golden Empire",
        description: "Prestigieux, symbolise la richesse et la confiance absolue.",
        price: 230,
        family: ["Boisé", "Oriental"],
        occasions: ["Jour", "Nuit", "Hiver"],
        image: "./perfume-bottles/GoldenEmpire.png",
        notes: { tete: "Oud, Bois de Santal, Cedre, Patchouli", coeur: "Ambre Dore, Benjoin, Miel, Labdanum", fond: "Safran, Vanille, Feve Tonka, Cacao, Musc blanc" }
    },
    "Cocovelvet": {
        id: "Cocovelvet",
        name: "Cocovelvet",
        description: "Élégant et sensuel, parfait pour une allure raffinéée.",
        price: 95,
        family: ["Gourmand", "Oriental"],
        occasions: ["Jour", "Nuit", "Été"],
        image: "./perfume-bottles/CocoVelvet.png",
        notes: { tete: "Noix de Coco, Fleurs de Tiare, Ylang-Ylang, Amande douce", coeur: "Ambre, Benjoin, Labdanum, Miel", fond: "Vanille, Feve Tonka, Cacao, Bois de Santal" }
    },
    "Jasmin-Pur": {
        id: "Jasmin-Pur",
        name: "Jasmin Pur",
        description: "Pur et élégant, un classic intemporel.",
        price: 115,
        family: "Floral",
        occasions: ["Jour", "Nuit", "Été"],
        image: "./perfume-bottles/JasminPur.png",
        notes: { tete: "Jasmin, Freesia, Pivoines, Ylang-Ylang", coeur: "Fleurs d'Oranger, Neroli, Mandarine, Tubereuse", fond: "Musc Blanc, Bois de Santal, Ambre gris, Vanille douce" }
    },
    "Bloomera": {
        id: "Bloomera",
        name: "Bloomera",
        description: "Frais et joyeux, évoque le printemps.",
        price: 175,
        family: ["Fruité","Floral"],
        occasions: ["Jour", "Nuit", "Été"],
        image: "./perfume-bottles/Bloomera.png",
        notes: { tete: "Fleurs Blanches, Muguet, Freesia, Pivoines", coeur: "Peche, Abricot, Mandarine, Framboise", fond: "Musc Blanc, Bois de Santal, Vanille douce, Ambre gris" }
    },
    "Rosalya": {
        id: "Rosalya",
        name: "Rosalya",
        description: "Intense et séduisant, parfait pour les occasions spéciales.",
        price: 205,
        family:"Floral",
        occasions: ["Jour", "Nuit", "Été"],
        image: "./perfume-bottles/Rosalya.png",
        notes: { tete: "Rose Rouge, Pivoines, Jasmin, Violette", coeur: "Vanille, Feve Tonka, Cacao, Benjoin", fond: "Ambre, Labdanum, Miel, Encens" }
    },
    "Floria-Whisper": {
        id: "Floria-Whisper",
        name: "Floria Whisper",
        description: "Une brise florale, relaxante et legere.",
        price: 180,
        family:["Floral","Aromatique"],
        occasions: ["Jour", "Nuit", "Été"],
        image: "./perfume-bottles/FloriaWhisper.png",
        notes: { tete: "Lavande, Romarin, Sauge, Thym", coeur: "Jasmin, Freesia, Pivoines, Ylang-Ylang", fond: "Herbes, Verveine citronnee, Basilic, Menthe verte" }
    },
    "Petalia-Soft": {
        id: "Petalia-Soft",
        name: "Petalia Soft",
        description: "Subtil et frais, parfait pour une allure naturelle.",
        price: 195,
        family:["Floral","Doux"],
        occasions: ["Jour", "Nuit", "Été"],
        image: "./perfume-bottles/PetaliaSoft.png",
        notes: { tete: "Pivoine, Feesia, Rose blanches, Violette", coeur: "Lotus, Nenuphar, Jasmin d'eau, Magnolia", fond: "Musc Blanc, Bois de Santal, AMbre gris, Vanille douce" }
    },
    "Serenia-Rose": {
        id: "Serenia-Rose",
        name: "Serenia Rose",
        description: "Élégant et apaisant, apporte une touche de douceur.",
        price: 105,
        family:"Floral",
        occasions: ["Jour", "Nuit", "Été"],
        image: "./perfume-bottles/SereniaRose.png",
        notes: { tete: "Roses, Roses de Damas, Roses blanches, Pivoines", coeur: "Fleurs d'Oranger, Neroli, Mandarine, Tubereuse", fond: "Musc Blanc, Bois de Santal, Ambre gris, Vanille douce" }
    },
    "Opalys-Dream": {
        id: "Opalys-Dream",
        name: "Opalys Dream",
        description: "Doux et sucré, un parfum irrésistible et réconfortant.",
        price: 95,
        family:"Gourmand",
        occasions: ["Jour", "Nuit", "Été","Hiver"],
        image: "./perfume-bottles/OpalysDream.png",
        notes: { tete: "Vanille, Feve Tonka, Benjoin, Cacao", coeur: "Caramel, Praline, Miel, Lait chaud", fond: "Amande, Amaretto, Fleurs d'amandier, Coco lactee" }
    },
    "Lunaria-Essence": {
        id: "Lunaria-Essence",
        name: "Lunaria Essence",
        description: "Sensuel et profond, idéal pour des soirées élégantes.",
        price: 235,
        family:"Oriental",
        occasions: ["Nuit", "Été","Hiver"],
        image: "./perfume-bottles/LunariaEssence.png",
        notes: { tete: "Ambre, Benjoin Labdanum, Encens", coeur: "Vanille, Feve Tonka, Cacao, Miel", fond: "Musc Noir, Cuir, Patchouli, Bois de Santal" }
    },
    "Aethera-Light": {
        id: "Aethera-Light",
        name: "Aethera Light",
        description: "Leger et lumineux, parfait pour une sensation de pureté.",
        price: 205,
        family:["Frais", "Hespéridé"],
        occasions: ["Jour", "Nuit", "Été","Hiver"],
        image: "./perfume-bottles/AetheraLight.png",
        notes: { tete: "Citron, Citron vert, Mandarine, Verveine citronnee", coeur: "Bergamote, Neroli, Lavande, The vert", fond: "Musc Blanc, Bois de Santal, Ambre gris, Vanille douce" }
    },
    "Velouria-Bloom": {
        id: "Velouria-Bloom",
        name: "Velouria Bloom",
        description: "Délicat et romantique, évoque un jardin de fleurs.",
        price: 160,
        family:"Floral",
        occasions: ["Jour", "Nuit", "Été","Hiver"],
        image: "./perfume-bottles/VelouriaBloom.png",
        notes: { tete: "Rose, Roses de Damas, Roses blanches, Violette", coeur: "Jasmin, Freesia, Ylang-Ylang, Tubereuse", fond: "Pivoines, Magnolia, Pivoines roses, Lilas" }
    },
    "Pritic-Thyme": {
        id: "Pritic-Thyme",
        name: "Pritic Thyme",
        description: "Glacial et percutant, évoque une touche sauvage et la pureté de l'air polaire.",
        price: 180,
        family:"Aromatique",
        occasions: ["Jour", "Nuit","Hiver"],
        image: "./perfume-bottles/PriticThyme.png",
        notes: { tete: "Eucalyptus, Menthe poivree, Camphre, Citronnelle", coeur: "Thym Blanc, Romarin, Sauge, Lavande", fond: "Seve de Pin, Cypres, Cedre, Mousse de chene" }
    },
    "Silver-Sage": {
        id: "Silver-Sage",
        name: "Silver Sage",
        description: "Doux et velouté, appelant la sauge seche et la terre grise.",
        price: 185,
        family:"Aromatique",
        occasions: ["Jour", "Nuit","Hiver","Été"],
        image: "./perfume-bottles/SilverSage.png",
        notes: { tete: "Armoise, Absinthe, Lavande, Camphre", coeur: "Romarin, Thym, Sauge, Citronnelle", fond: "Vetiver terreux, Patchouli, Mousse de chene, Cedre" }
    },
    "Bitter-Summer": {
        id: "Bitter-Summer",
        name: "Bitter Summer",
        description: "Sophistiqué et texturé, évoque une fin d'apres-midi en Méditerranée.",
        price: 190,
        family:"Hespéridé",
        occasions: ["Jour", "Nuit","Été"],
        image: "./perfume-bottles/BitterSummer.png",
        notes: { tete: "Pamplemousse rose, Mandarine, Citron vert, Framboise", coeur: "Verveine citronnee, Citronnelle, Basilic, Menthe verte", fond: "Bois de citronnier, Cedre, Cypres, Vetiver" }
    },
    "Wild-Orchard": {
        id: "Wild-Orchard",
        name: "Wild Orchard",
        description: "Naturel et incisif, capture l'éclat pur d'un jardin mediterraneen au lever du jour.",
        price: 250,
        family:"Hespéridé",
        occasions: ["Jour", "Nuit","Été"],
        image: "./perfume-bottles/WildOrchard.png",
        notes: { tete: "Clementine verte, Mandarine zestee, Citron vert, Pamplemousse jaune", coeur: "Feuille de citronnier, Verveine citronnee, Basilic, Mnethe verte", fond: "Bois de Gaiac, Cedre, Vetiver, Ambre gris" }
    },
    "Cedar-Horizon": {
        id: "Cedar-Horizon",
        name: "Cedar Horizon",
        description: "Pur et architectural, sobre et lunaire et distingue.",
        price: 100,
        family: "Boisé",
        occasions: ["Jour", "Nuit","Été", "Hiver"],
        image: "./perfume-bottles/CedarHorizon.png",
        notes: { tete: "Baies de genievres, Poivre noir, Cardamome, Coriande", coeur: "Cedre de l'Atlas, Cypres, Vetiver, Mousse de chene", fond: "Bois de Santal, Ambre gris, Feve Tonka, Benjoin" }
    },
    "Deep-Roots": {
        id: "Deep-Roots",
        name: "Deep Roots",
        description: "Sombre et humide, explore le cote organique de la terre.",
        price: 120,
        family: "Boisé",
        occasions: ["Jour", "Nuit","Hiver"],
        image: "./perfume-bottles/DeepRoots.png",
        notes: { tete: "Ecorce de cannelle, Clou de Girofle, Noix de Muscade, Poivre noir", coeur: "Pin sylvestre, Cypres, Sapin Baumier, Genevrier", fond: "Vetiver de Java, Patchouli, Mousse de chene, Cedre" }
    },
    "Electric-Pepper": {
        id: "Electric-Pepper",
        name: "Electric Pepper",
        description: "Saisissant, presque vibrant, jouant sur des épices qui rafraichissent et piquent.",
        price: 150,
        family: "Épicé",
        occasions: ["Jour", "Nuit", "Hiver"],
        image: "./perfume-bottles/ElectricPepper.png",
        notes: { tete: "Poivre Noir, Baies rose, Cardamome, Coriande", coeur: "Gingembre frais, Citron vert, Curcuma, Galanga", fond: "Bois de Cachemire, Cede, Bois de Santal, Ambre gris" }
    },
    "Amber-Spice": {
        id: "Amber-Spice",
        name: "Amber Spice",
        description: "Chaud et opulent, appelant le marché d'orient en un matin brulant.",
        price: 210,
        family: "Épicé",
        occasions: ["Jour", "Nuit", "Hiver", "Été"],
        image: "./perfume-bottles/AmberSpice.png",
        notes: { tete: "Cannelle, Clou de Girfole, Poivre noir, Cardamome", coeur: "Noix de Muscade, Cumin, Gingembre sec, Curcuma", fond: "Vanille Bourbon, Feve Tonka, Benjoin, Cacao" }
    },
    "Island-nectar": {
        id: "Island-nectar",
        name: "Island nectar",
        description: "Solaire et gourmand, une fragrance joyeuse centrée sur le cote juteux des fruits tropicaux.",
        price: 245,
        family:"Tropical",
        occasions: ["Jour", "Nuit", "Été"],
        image: "./perfume-bottles/Islandnectar.png",
        notes: { tete: "Mangue mure, Ananas, Papaye, Fruits de la Passion", coeur: "Fleurs de Tiare, Ylang-Yang, Jasmin Sambac, Frangipanier", fond: "Vanilles des iles, Coco lactee, Feve Tonka, Benjoin" }
    },
    "Jungle-Rain": {
        id: "Jungle-Rain",
        name: "Jungle Rain",
        description: "Vert et sauvage, évoque une odeur entre végétation luxuriante et fruits primitifs.",
        price: 120,
        family:"Tropical",
        occasions: ["Jour", "Nuit", "Été", "Hiver"],
        image: "./perfume-bottles/JungleRain.png",
        notes: { tete: "Citron vert, Pamplemousse jaune, Mandarine verte, Verveine citronnee", coeur: "Hibiscus, Fleurs de Frangipanier, Jasmin d'eau, Rose the", fond: "Bois de Teck, Cedre, Patchouli, Ambre gris" }
    },
    "Sunset-Breeze": {
        id: "Sunset-Breeze",
        name: "Sunset Breeze",
        description: "Sophistiqué, joue sur le contraste entre chaleur de sable et fraîcheur d'un cocktail.",
        price: 220,
        family:"Tropical",
        occasions: ["Jour", "Nuit", "Été"],
        image: "./perfume-bottles/SunsetBreeze.png",
        notes: { tete: "Gingembre, Citron vert, Curcums, Glanga", coeur: "Jasmin de nuit, Ylang-Ylang, Tubereuse, Fleurs d'oranger", fond: "Feve Tonka, Vanille Bourbon, Cacao, Benjoin" }
    },
    "Crimson-Orchard": {
        id: "Crimson-Orchard",
        name: "Crimson Orchard",
        description: "Rouge, vif et acidule. Petillant et joyeux.",
        price: 215,
        family: "Fruité",
        occasions: ["Jour", "Nuit", "Été","Hiver"],
        image: "./perfume-bottles/CrimsonOrchard.png",
        notes: { tete: "Framboise, Cassis, Mure sauvage, Grenade", coeur: "Fraises de bois, Fraises des Alpes, Cerises noire, Peche blanche", fond: "Musc Blanc, Bois de Santal, Ambre gris, Vanille douce" }
    },
    "Velvet-Apricot": {
        id: "Velvet-Apricot",
        name: "Velvet Apricot",
        description: "Doux et charnu, uen sensation de confort absolue.",
        price: 115,
        family: "Fruité",
        occasions: ["Jour", "Nuit", "Été","Hiver"],
        image: "./perfume-bottles/VelvetApricot.png",
        notes: { tete: "Peche blanche, Nectarine, Poivre juteuse, Fleurs de pecher", coeur: "Abricot Mur, Prune doree, Mangue douce, Fruit de la passion", fond: "Bois de Santal, Vanille douce, Ambre gris, Cedre" }
    },
    "Midnight-Plum": {
        id: "Midnight-Plum",
        name: "Midnight Plum",
        description: "Sombre et intense, évoque la richesse, la sensualité et le mystere.",
        price: 160,
        family: "Fruité",
        occasions: ["Jour", "Nuit", "Été","Hiver"],
        image: "./perfume-bottles/MidnightPlum.png",
        notes: { tete: "Prune noire, Cerise noir, Cassis, Mure sauvage", coeur: "Figues charnues, Dattes, Raisin noir, Pruneau", fond: "Patchouli, Vetiver, Mousse de chene, Ambre" }
    },
    "Geer-Crisp": {
        id: "Geer-Crisp",
        name: "Geer Crisp",
        description: "Versant frais, capture la sensation d'une pomme a pleines dents.",
        price: 250,
        family: "Fruité",
        occasions: ["Jour", "Nuit", "Été","Hiver"],
        image: "./perfume-bottles/GeerCrisp.png",
        notes: { tete: "Pomme verte, Poire fraiche, Citron vert, Raisin blanc", coeur: "Melon d'eau, Concombre, Fleurs de Lotus, Menthe verte", fond: "Cedre clair, Bois de Bouleau, Vetiver doux, Ambre blanc" }
    },
};

/*CART*/
let cart = [];

function addToCart(productId, event) {
    if (event) event.stopPropagation();

    const product = perfumes[productId];
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    animateCartBadge();
    showAddedFeedback(productId, event);
}

function updateCartUI() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) badge.textContent = total;
}

function animateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (!badge) return;
    badge.style.transform = 'scale(1.5)';
    badge.style.transition = 'transform .15s ease';
    setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
}

function showAddedFeedback(productId, event) {
    if (!event || !event.target) return;
    const btn = event.target.closest('.btn-cart') || event.target;
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa fa-check"></i> Ajouté !';
    btn.style.background = '#6a9e73';
    setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
    }, 1200);
}

/*MODAL*/
function openModal(productId) {
    const p = perfumes[productId];
    if (!p) return;

    document.getElementById('modal-name').textContent        = p.name;
    document.getElementById('modal-description').textContent = p.description;
    document.getElementById('modal-price').textContent       = p.price + '€';
    document.getElementById('modal-family').textContent = Array.isArray(p.family) ? p.family.join(", ") : p.family;
    document.getElementById('modal-note-tete').textContent   = p.notes.tete;
    document.getElementById('modal-note-coeur').textContent  = p.notes.coeur;
    document.getElementById('modal-note-fond').textContent   = p.notes.fond;
    document.getElementById('modal-img').src                 = p.image;
    document.getElementById('modal-img').alt                 = p.name;

    // occasions
    const tagsEl = document.getElementById('modal-occasions');
    tagsEl.innerHTML = p.occasions
        .map(o => `<span class="occasion-tag">${o}</span>`)
        .join('');

    // bouton Add to Cart dans la modal
    const addBtn = document.getElementById('modal-add-btn');
    addBtn.onclick = (e) => addToCart(productId, e);

    document.getElementById('product-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== document.getElementById('product-modal')) return;
    _closeModal();
}

function closeModalBtn() {
    _closeModal();
}

function _closeModal() {
    document.getElementById('product-modal').classList.remove('open');
    document.body.style.overflow = '';
}

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') _closeModal();
});

/*FILTERS*/
function getActiveFilters() {
    // Familles
    const families = [...document.querySelectorAll('.olfactive-families input:checked')]
        .map(cb => cb.value);

    // Prix
    const maxPrice = parseInt(document.getElementById('price-range').value);

    // Occasions
    const occasions = [...document.querySelectorAll('.occasions-filter input:checked')]
        .map(cb => cb.value);

    // Recherche
    const query = document.getElementById('search-input').value.trim().toLowerCase();

    return { families, maxPrice, occasions, query };
}

function getFamilyList(p) {
    return Array.isArray(p.family) ? p.family : [p.family];
}

function applyFilters() {
    const { families, maxPrice, occasions, query } = getActiveFilters();

    const filtered = Object.values(perfumes).filter(p => {
        const familyList = getFamilyList(p);

        // recherche textuelle
        if (query) {
            const nameMatch        = p.name.toLowerCase().includes(query);
            const descMatch        = p.description.toLowerCase().includes(query);
            const familyMatch      = familyList.some(f => f.toLowerCase().includes(query));
            if (!nameMatch && !descMatch && !familyMatch) return false;
        }

        // famille olfactive
        if (families.length > 0 && !families.some(f => familyList.includes(f))) return false;

        // prix
        if (p.price > maxPrice) return false;

        // occasions
        if (occasions.length > 0 && !p.occasions.some(o => occasions.includes(o))) return false;

        return true;
    });

    renderProducts(filtered);
}

function updatePrice(val) {
    document.getElementById('price-display').textContent = val + '€';
}

function resetFilters() {
    document.querySelectorAll('.olfactive-families input, .occasions-filter input')
        .forEach(cb => cb.checked = false);
    document.getElementById('price-range').value = 250;
    document.getElementById('price-display').textContent = '250€';
    document.getElementById('search-input').value = '';
    renderProducts(Object.values(perfumes));
}

/*RENDER*/
function renderProducts(list) {
    const container = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');
    const countEl   = document.getElementById('result-count');

    countEl.textContent = list.length === 0
        ? ''
        : `${list.length} parfum${list.length > 1 ? 's' : ''} trouvé${list.length > 1 ? 's' : ''}`;

    if (list.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'flex';
        return;
    }
    noResults.style.display = 'none';

    container.innerHTML = list.map(p => `
        <div class="product-card" onclick="openModal('${p.id}')">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/300x400/f0e4d8/9c5e57?text=${encodeURIComponent(p.name)}'">
            </div>
            <div class="product-info">
                <p class="product-family">${p.family}</p>
                <h3>${p.name}</h3>
                <p class="product-desc">${p.description}</p>
            </div>
            <div class="product-footer">
                <span class="product-price">${p.price}€</span>
                <button class="btn-cart"
                    onclick="addToCart('${p.id}', event)"
                    title="Ajouter au panier">
                    <i class="fa fa-bag-shopping"></i>
                </button>
                <button class="btn-discover"
                    onclick="openModal('${p.id}'); event.stopPropagation()">
                    Voir
                </button>
            </div>
        </div>
    `).join('');
}

/*KEYBOARD : ENTRÉE = SEARCH*/
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            applyFilters();
        }
    });

    // Génération initiale
    renderProducts(Object.values(perfumes));
    updateCartUI();
});