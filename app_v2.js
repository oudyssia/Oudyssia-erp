/* ===========================
   OUDYSSIA ERP — app_v2.js
   + Export CSV
   + Filtre mois Dashboard
   + Commande groupée multi-produits
   =========================== */

// ══════════════════════════════════════
// 1. DONNÉES INITIALES
// ══════════════════════════════════════

const INITIAL_PRODUCTS = [
  {sku:"ODY-001",nom:"Incense 01 - Swiss Arabian 50ml unisex",marque:"Swiss Arabian",achat:30,stock_initial:3,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:45,prix_site:49.9,prix_tiktok:52,prix_mini:35,reassort:0,frais_livraison:8.9,poids:600,notes:""},
  {sku:"ODY-002",nom:"Swiss Arabian – Enigma of Taif 100ml",marque:"Swiss Arabian",achat:34,stock_initial:3,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:65,prix_site:64.9,prix_tiktok:70,prix_mini:49.5,reassort:0,frais_livraison:8.9,poids:700,notes:""},
  {sku:"ODY-003",nom:"Artisan Ethnique Eau de Parfum (Unisexe) Lattafa Pride 100 ml",marque:"Lattafa",achat:16,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:23.9,prix_site:29.9,prix_tiktok:35,prix_mini:21,reassort:0,frais_livraison:8.9,poids:750,notes:""},
  {sku:"ODY-004",nom:"Extrait de Parfum Essence of Casablanca - Swiss Arabian 100 ml",marque:"Swiss Arabian",achat:34,stock_initial:3,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:59.9,prix_site:64.9,prix_tiktok:65,prix_mini:40,reassort:0,frais_livraison:6.9,poids:500,notes:""},
  {sku:"ODY-005",nom:"Shaghaf Amber Infusion - Swiss Arabian 75ml",marque:"Swiss Arabian",achat:35,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:45,prix_site:54.9,prix_tiktok:60,prix_mini:40,reassort:0,frais_livraison:8.9,poids:750,notes:""},
  {sku:"ODY-006",nom:"Vanilla 01 Swiss Arabian",marque:"Swiss Arabian",achat:30,stock_initial:2,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:47.9,prix_site:54.9,prix_tiktok:55,prix_mini:37,reassort:0,frais_livraison:8.9,poids:600,notes:""},
  {sku:"ODY-007",nom:"Ateeq Nusuk 100 ml",marque:"Nusuk",achat:14.5,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:37.9,prix_site:39.9,prix_tiktok:39.9,prix_mini:20,reassort:2,frais_livraison:8.9,poids:750,notes:""},
  {sku:"ODY-008",nom:"Vulcan Black Friday French Avenue 100ml",marque:"French Avenue",achat:29,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:37.9,prix_site:44.9,prix_tiktok:45,prix_mini:34,reassort:0,frais_livraison:8.9,poids:620,notes:""},
  {sku:"ODY-009",nom:"Soul of Bali Swiss Arabian 100ml",marque:"Swiss Arabian",achat:35,stock_initial:2,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:55.9,prix_site:59.9,prix_tiktok:65,prix_mini:40,reassort:0,frais_livraison:8.9,poids:700,notes:""},
  {sku:"ODY-010",nom:"Raheeq Nusuk 100ml",marque:"Nusuk",achat:18,stock_initial:1,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:27.9,prix_site:27.9,prix_tiktok:39.9,prix_mini:23,reassort:0,frais_livraison:8.9,poids:700,notes:""},
  {sku:"ODY-011",nom:"Art of Arabia 3 Lattafa Pride 100ml",marque:"Lattafa",achat:18,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:37.9,prix_site:37.9,prix_tiktok:42.9,prix_mini:23,reassort:0,frais_livraison:8.9,poids:800,notes:""},
  {sku:"ODY-012",nom:"Vision Maison Asrar 100ml",marque:"Maison Asrar",achat:45,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:49.9,prix_site:54.9,prix_tiktok:60,prix_mini:45,reassort:0,frais_livraison:8.9,poids:750,notes:""},
  {sku:"ODY-013",nom:"DXB Maison Asrar 100ml",marque:"Maison Asrar",achat:45,stock_initial:1,dispo_vinted:"Non",dispo_site:"Non",prix_vinted:0,prix_site:0,prix_tiktok:0,prix_mini:50,reassort:0,frais_livraison:0,poids:0,notes:""},
  {sku:"ODY-014",nom:"Rayhaan Italia 100ml",marque:"Rayhaan",achat:26,stock_initial:1,dispo_vinted:"Non",dispo_site:"Non",prix_vinted:0,prix_site:0,prix_tiktok:0,prix_mini:31,reassort:0,frais_livraison:0,poids:0,notes:""},
  {sku:"ODY-015",nom:"Tobacco 01 - Swiss Arabian 50ml",marque:"Swiss Arabian",achat:30,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:45,prix_site:44.9,prix_tiktok:0,prix_mini:35,reassort:0,frais_livraison:8.9,poids:650,notes:""},
  {sku:"ODY-016",nom:"Summer Oud - Ahmed Al Maghribi 60ml",marque:"Ahmed Al Maghribi",achat:25,stock_initial:2,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:47.9,prix_site:54.9,prix_tiktok:54.9,prix_mini:30,reassort:0,frais_livraison:8.9,poids:600,notes:""},
  {sku:"ODY-017",nom:"Spirit of Valencia - Swiss Arabian 100ml",marque:"Swiss Arabian",achat:38,stock_initial:1,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:0,prix_site:59.9,prix_tiktok:68,prix_mini:43,reassort:0,frais_livraison:8.9,poids:750,notes:""},
  {sku:"ODY-018",nom:"Rayhaan Aquatica 100ml",marque:"Rayhaan",achat:26,stock_initial:1,dispo_vinted:"Non",dispo_site:"Non",prix_vinted:0,prix_site:0,prix_tiktok:0,prix_mini:31,reassort:0,frais_livraison:0,poids:0,notes:""},
  {sku:"ODY-019",nom:"Rayhaan Obsidian 100ml",marque:"Rayhaan",achat:26,stock_initial:1,dispo_vinted:"Non",dispo_site:"Non",prix_vinted:0,prix_site:33.9,prix_tiktok:0,prix_mini:31,reassort:0,frais_livraison:6.9,poids:450,notes:""},
  {sku:"ODY-020",nom:"Oud & Roses Ahmed Al Maghribi 60ml",marque:"Ahmed Al Maghribi",achat:25,stock_initial:2,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:49.9,prix_site:54.9,prix_tiktok:60,prix_mini:30,reassort:0,frais_livraison:6.9,poids:500,notes:""},
  {sku:"ODY-021",nom:"La Di Da Arabiyat Prestige 100ml",marque:"Arabiyat Prestige",achat:41,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:51.9,prix_site:54.9,prix_tiktok:0,prix_mini:46,reassort:0,frais_livraison:8.9,poids:800,notes:""},
  {sku:"ODY-022",nom:"Riiffs Privé Blue 100ml",marque:"Riiffs",achat:10,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:17.9,prix_site:24.9,prix_tiktok:0,prix_mini:15,reassort:0,frais_livraison:6.9,poids:300,notes:""},
  {sku:"ODY-023",nom:"Onyx Gold Khadlaj 100ml",marque:"Khadlaj",achat:17.5,stock_initial:3,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:29.9,prix_site:39.9,prix_tiktok:39.9,prix_mini:22.5,reassort:0,frais_livraison:6.9,poids:500,notes:""},
  {sku:"ODY-024",nom:"Seasons Drift Riiffs 100ml",marque:"Riiffs",achat:14.5,stock_initial:2,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:33.9,prix_site:34.9,prix_tiktok:37.9,prix_mini:19.5,reassort:0,frais_livraison:8.9,poids:700,notes:""},
  {sku:"ODY-025",nom:"Seasons Rise Riiffs 100ml",marque:"Riiffs",achat:14.5,stock_initial:2,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:28.9,prix_site:34.9,prix_tiktok:37.9,prix_mini:19.5,reassort:0,frais_livraison:8.9,poids:700,notes:""},
  {sku:"ODY-026",nom:"Ramad Arabiyat Prestige 100ml Louban",marque:"Arabiyat Prestige",achat:36,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:44.9,prix_site:49.9,prix_tiktok:0,prix_mini:41,reassort:0,frais_livraison:8.9,poids:750,notes:""},
  {sku:"ODY-027",nom:"Opulence of Dubai Swiss Arabian 100ml",marque:"Swiss Arabian",achat:35,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:57.9,prix_site:64.9,prix_tiktok:68,prix_mini:40,reassort:0,frais_livraison:8.9,poids:700,notes:""},
  {sku:"ODY-028",nom:"Rayhaan Lion 100ml",marque:"Rayhaan",achat:26,stock_initial:1,dispo_vinted:"Non",dispo_site:"Non",prix_vinted:0,prix_site:0,prix_tiktok:0,prix_mini:31,reassort:0,frais_livraison:0,poids:0,notes:""},
  {sku:"ODY-029",nom:"Rayhaan Tiger 100ml",marque:"Rayhaan",achat:26,stock_initial:1,dispo_vinted:"Non",dispo_site:"Non",prix_vinted:0,prix_site:0,prix_tiktok:0,prix_mini:31,reassort:0,frais_livraison:0,poids:0,notes:""},
  {sku:"ODY-030",nom:"Veneno French Avenue 100ml",marque:"French Avenue",achat:30,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:39.9,prix_site:49.9,prix_tiktok:45,prix_mini:35,reassort:0,frais_livraison:8.9,poids:1000,notes:""},
  {sku:"ODY-031",nom:"Safari Breeze French Avenue 100ml",marque:"French Avenue",achat:21.5,stock_initial:3,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:35.9,prix_site:42.9,prix_tiktok:44.9,prix_mini:28.5,reassort:0,frais_livraison:8.9,poids:770,notes:""},
  {sku:"ODY-032",nom:"Armaf Club de Nuit Bling 100ml",marque:"Armaf",achat:25,stock_initial:4,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:37.9,prix_site:39.9,prix_tiktok:44.9,prix_mini:30,reassort:0,frais_livraison:8.9,poids:600,notes:""},
  {sku:"ODY-033",nom:"Legacy Maison Asrar 100ml",marque:"Maison Asrar",achat:23,stock_initial:9,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:49.9,prix_site:49.9,prix_tiktok:55,prix_mini:28,reassort:0,frais_livraison:6.9,poids:500,notes:""},
  {sku:"ODY-034",nom:"Obsidian French Avenue 100ml",marque:"French Avenue",achat:23.5,stock_initial:1,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:37.9,prix_site:49.9,prix_tiktok:45,prix_mini:28.5,reassort:0,frais_livraison:8.9,poids:700,notes:""},
  {sku:"ODY-035",nom:"Rasasi Hawas Kobra 100 ml",marque:"Rasasi",achat:30,stock_initial:2,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:37.9,prix_site:39.9,prix_tiktok:42.9,prix_mini:35,reassort:0,frais_livraison:6.9,poids:500,notes:""},
  {sku:"ODY-036",nom:"Coffret cadeau Nebras Lattafa set 3 pieces",marque:"Lattafa",achat:0,stock_initial:1,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:29.9,prix_site:35.9,prix_tiktok:0,prix_mini:28,reassort:0,frais_livraison:10.9,poids:1500,notes:""},
  {sku:"ODY-037",nom:"Thara Attri 100ml",marque:"Attri",achat:11,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Non",prix_vinted:24.9,prix_site:0,prix_tiktok:0,prix_mini:16,reassort:0,frais_livraison:0,poids:0,notes:""},
  {sku:"ODY-038",nom:"Falak Nusuk 100ml",marque:"Nusuk",achat:16,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:29.9,prix_site:29.9,prix_tiktok:39.9,prix_mini:21,reassort:0,frais_livraison:8.9,poids:650,notes:""},
  {sku:"ODY-039",nom:"Zimaya Tiramisu S'mores 100ml",marque:"Zimaya",achat:18,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:27.9,prix_site:39.9,prix_tiktok:39.9,prix_mini:23,reassort:0,frais_livraison:6.9,poids:500,notes:""},
  {sku:"ODY-040",nom:"Privé Rouge EMPER 100 ml",marque:"Emper",achat:1,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Non",prix_vinted:12.9,prix_site:0,prix_tiktok:0,prix_mini:6,reassort:0,frais_livraison:0,poids:0,notes:""},
  {sku:"ODY-041",nom:"Convivium Paris 50ml Supreme Vanille",marque:"Convivium Paris",achat:10,stock_initial:1,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:0,prix_site:19.9,prix_tiktok:0,prix_mini:15,reassort:0,frais_livraison:6.9,poids:250,notes:""},
  {sku:"ODY-042",nom:"Convivium Paris 50ml Black Lemon",marque:"Convivium Paris",achat:10,stock_initial:1,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:0,prix_site:19.9,prix_tiktok:0,prix_mini:15,reassort:0,frais_livraison:6.9,poids:250,notes:""},
  {sku:"ODY-043",nom:"Hersh Lahab 100 ml",marque:"Hersh",achat:43,stock_initial:1,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:0,prix_site:99.9,prix_tiktok:100,prix_mini:48,reassort:0,frais_livraison:6.9,poids:480,notes:""},
  {sku:"ODY-044",nom:"9pm Night Out Afnan 100 ml",marque:"Afnan",achat:28,stock_initial:3,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:44.9,prix_site:49.9,prix_tiktok:55,prix_mini:33,reassort:0,frais_livraison:8.9,poids:750,notes:""},
  {sku:"ODY-045",nom:"Frostbite Aromatix extrait parfum 100 ml",marque:"French Avenue",achat:35,stock_initial:5,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:42,prix_site:44.9,prix_tiktok:59.9,prix_mini:40,reassort:0,frais_livraison:8.9,poids:740,notes:""},
  {sku:"ODY-046",nom:"Eternal Vanille Lattafa 100 ml",marque:"Lattafa",achat:22,stock_initial:3,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:39.9,prix_site:49.9,prix_tiktok:46.9,prix_mini:27,reassort:1,frais_livraison:8.9,poids:758,notes:""},
  {sku:"ODY-047",nom:"Ravine Ice French Avenue 100 ml",marque:"French Avenue",achat:24,stock_initial:2,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:37.9,prix_site:39.9,prix_tiktok:45,prix_mini:29,reassort:0,frais_livraison:8.9,poids:650,notes:""},
  {sku:"ODY-048",nom:"Ravine Ginger French Avenue 100 ml",marque:"French Avenue",achat:24,stock_initial:2,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:42.9,prix_site:44.9,prix_tiktok:49.9,prix_mini:29,reassort:1,frais_livraison:8.9,poids:750,notes:""},
  {sku:"ODY-049",nom:"Kaaf Ahmed Al Maghribi 100 ml",marque:"Ahmed Al Maghribi",achat:16,stock_initial:2,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:37.9,prix_site:39.9,prix_tiktok:45,prix_mini:21,reassort:0,frais_livraison:6.9,poids:500,notes:""},
  {sku:"ODY-050",nom:"Lattafa Angham second song 100 ml",marque:"Lattafa",achat:20,stock_initial:3,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:29.9,prix_site:39.9,prix_tiktok:39.9,prix_mini:25,reassort:0,frais_livraison:6.9,poids:499,notes:""},
  {sku:"ODY-051",nom:"Marmara French Avenue 100 ml",marque:"French Avenue",achat:29,stock_initial:3,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:37.9,prix_site:49.9,prix_tiktok:49.9,prix_mini:34,reassort:0,frais_livraison:8.9,poids:720,notes:""},
  {sku:"ODY-052",nom:"Extremely Unique Fragrance World 100 ml",marque:"French Avenue",achat:12,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:37.9,prix_site:39.9,prix_tiktok:39.9,prix_mini:17,reassort:0,frais_livraison:6.9,poids:350,notes:""},
  {sku:"ODY-053",nom:"Passion of venice Swiss Arabian 100ml",marque:"Swiss Arabian",achat:35,stock_initial:1,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:61.9,prix_site:59.9,prix_tiktok:65,prix_mini:40,reassort:0,frais_livraison:8.9,poids:650,notes:""},
  {sku:"ODY-054",nom:"Brulee ahmed al maghribi 100 ml",marque:"Ahmed Al Maghribi",achat:18,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:42.9,prix_site:49.9,prix_tiktok:0,prix_mini:23,reassort:0,frais_livraison:8.9,poids:700,notes:""},
  {sku:"ODY-055",nom:"ignite oud Ahmed al maghribi",marque:"Ahmed Al Maghribi",achat:25,stock_initial:1,dispo_vinted:"Non",dispo_site:"Non",prix_vinted:42.9,prix_site:44.9,prix_tiktok:0,prix_mini:31,reassort:0,frais_livraison:8.9,poids:700,notes:""},
  {sku:"ODY-056",nom:"Momento riiffs 100 ml",marque:"Riiffs",achat:15,stock_initial:1,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:33.9,prix_site:39.9,prix_tiktok:39.9,prix_mini:27,reassort:0,frais_livraison:8.9,poids:700,notes:""},
  {sku:"ODY-057",nom:"Teriaq intense lattafa 100ml",marque:"Lattafa",achat:19,stock_initial:1,dispo_vinted:"Non",dispo_site:"Oui",prix_vinted:0,prix_site:39.9,prix_tiktok:0,prix_mini:27,reassort:0,frais_livraison:8.9,poids:600,notes:""},
  {sku:"ODY-058",nom:"Thriller 3 extrait de parfum 100ml maison asrar",marque:"Maison Asrar",achat:24,stock_initial:2,dispo_vinted:"Oui",dispo_site:"Oui",prix_vinted:42.9,prix_site:49.9,prix_tiktok:54.9,prix_mini:34,reassort:0,frais_livraison:6.9,poids:350,notes:""}
];

const INITIAL_VENTES = [
  {date:"2026-03-08",sku:"ODY-001",plateforme:"Vinted",qte:1,prix:44,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-08",sku:"ODY-033",plateforme:"Vinted",qte:1,prix:44.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-08",sku:"ODY-054",plateforme:"Vinted",qte:1,prix:37,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-09",sku:"ODY-035",plateforme:"Vinted",qte:1,prix:36,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-09",sku:"ODY-046",plateforme:"Vinted",qte:1,prix:37.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-11",sku:"ODY-001",plateforme:"Vinted",qte:1,prix:44,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-12",sku:"ODY-004",plateforme:"Vinted",qte:1,prix:51,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-12",sku:"ODY-006",plateforme:"Vinted",qte:1,prix:44,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-12",sku:"ODY-036",plateforme:"Vinted",qte:1,prix:27.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-12",sku:"ODY-048",plateforme:"Vinted",qte:1,prix:38,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-13",sku:"ODY-031",plateforme:"TikTok",qte:1,prix:44.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-13",sku:"ODY-033",plateforme:"Vinted",qte:1,prix:42.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-14",sku:"ODY-033",plateforme:"Vinted",qte:1,prix:45,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-14",sku:"ODY-048",plateforme:"Vinted",qte:1,prix:42.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-15",sku:"ODY-001",plateforme:"Vinted",qte:1,prix:45,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-15",sku:"ODY-002",plateforme:"Vinted",qte:1,prix:55,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-15",sku:"ODY-020",plateforme:"Vinted",qte:1,prix:45,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-15",sku:"ODY-031",plateforme:"Vinted",qte:1,prix:33,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-16",sku:"ODY-033",plateforme:"Vinted",qte:1,prix:45,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-16",sku:"ODY-002",plateforme:"Vinted",qte:1,prix:53,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-17",sku:"ODY-053",plateforme:"Vinted",qte:1,prix:55,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-18",sku:"ODY-024",plateforme:"Vinted",qte:1,prix:28,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-18",sku:"ODY-033",plateforme:"Vinted",qte:1,prix:45,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-18",sku:"ODY-033",plateforme:"Vinted",qte:1,prix:45,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-18",sku:"ODY-034",plateforme:"Vinted",qte:1,prix:37.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-18",sku:"ODY-049",plateforme:"Vinted",qte:1,prix:36,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-20",sku:"ODY-033",plateforme:"Vinted",qte:1,prix:45,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-22",sku:"ODY-046",plateforme:"Vinted",qte:1,prix:38.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-23",sku:"ODY-031",plateforme:"TikTok",qte:1,prix:44.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-24",sku:"ODY-051",plateforme:"TikTok",qte:1,prix:42.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-25",sku:"ODY-010",plateforme:"TikTok",qte:1,prix:33.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-25",sku:"ODY-046",plateforme:"Vinted",qte:1,prix:37,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-26",sku:"ODY-016",plateforme:"Vinted",qte:1,prix:44,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-26",sku:"ODY-051",plateforme:"Direct",qte:1,prix:45,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-26",sku:"ODY-035",plateforme:"Vinted",qte:1,prix:37,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-27",sku:"ODY-045",plateforme:"TikTok",qte:1,prix:49.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-27",sku:"ODY-007",plateforme:"Site Oudyssia",qte:1,prix:35.9,moyen_paiement:"PayPal",type:"Vente",num_commande:"CMD-001",frais_livraison_reels:9.66},
  {date:"2026-03-27",sku:"ODY-057",plateforme:"Site Oudyssia",qte:1,prix:29.9,moyen_paiement:"PayPal",type:"Vente",num_commande:"CMD-001",frais_livraison_reels:0},
  {date:"2026-03-27",sku:"ODY-004",plateforme:"Site Oudyssia",qte:1,prix:59.9,moyen_paiement:"PayPal",type:"Vente",num_commande:"CMD-001",frais_livraison_reels:0},
  {date:"2026-03-27",sku:"ODY-044",plateforme:"Site Oudyssia",qte:1,prix:44.9,moyen_paiement:"PayPal",type:"Vente",num_commande:"CMD-001",frais_livraison_reels:0},
  {date:"2026-03-28",sku:"ODY-050",plateforme:"Vinted",qte:1,prix:29.9,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0},
  {date:"2026-03-28",sku:"ODY-058",plateforme:"Vinted",qte:1,prix:40,moyen_paiement:"",type:"Vente",num_commande:"",frais_livraison_reels:0}
];

const INITIAL_ACHATS = [
  {date:"2026-03-01",description:"· Abonnements (Shopify, outils...)",categorie:"Autres",montant:1},
  {date:"2026-03-16",description:"Sac à bulles gonflable",categorie:"Packaging",montant:16.68},
  {date:"2026-03-16",description:"Porte-étiquette",categorie:"Packaging",montant:4.16},
  {date:"2026-03-16",description:"Vevor imprimante thermique 300dpi",categorie:"Packaging",montant:58.52},
  {date:"2026-03-16",description:"Chambre à lumière",categorie:"Autres",montant:4.8},
  {date:"2026-03-16",description:"Papier pour imprimante",categorie:"Packaging",montant:9.83},
  {date:"2026-03-16",description:"Rouleau papier bulle 100m",categorie:"Packaging",montant:20.72},
  {date:"2026-03-16",description:"Cashback iGraal",categorie:"Packaging",montant:-24.14},
  {date:"2026-03-18",description:"Carte oudyssia",categorie:"Autres",montant:6.19}
];

const INITIAL_FINANCE = {
  charges: { pub:0, packaging:3, abo:0, autres:0 },
  objectif: 600,
  tresorerie: { vinted:0, tiktok:0, site:0, direct:0 }
};

// ══════════════════════════════════════
// AUTH (Firebase)
// ══════════════════════════════════════
const AUTH_MODE = typeof firebase !== 'undefined' && !!firebase.auth;
const auth = AUTH_MODE ? firebase.auth() : null;

function showAppShell() {
  const authShell = document.getElementById('auth-shell');
  const appShell = document.getElementById('app-shell');
  if (authShell) authShell.style.display = 'none';
  if (appShell) appShell.style.display = '';
  document.body.classList.remove('auth-loading');
}

function showAuthShell(message='') {
  const authShell = document.getElementById('auth-shell');
  const appShell = document.getElementById('app-shell');
  const err = document.getElementById('auth-error');
  if (authShell) authShell.style.display = 'flex';
  if (appShell) appShell.style.display = 'none';
  document.body.classList.add('auth-loading');
  if (err) err.textContent = message || '';
}

function humanizeAuthError(code, message='') {
  const map = {
    'auth/invalid-email': 'Email invalide.',
    'auth/missing-password': 'Mot de passe requis.',
    'auth/invalid-login-credentials': 'Email ou mot de passe incorrect.',
    'auth/invalid-credential': 'Email ou mot de passe incorrect.',
    'auth/user-not-found': 'Compte introuvable.',
    'auth/wrong-password': 'Mot de passe incorrect.',
    'auth/too-many-requests': 'Trop de tentatives. Réessaie plus tard.',
    'auth/network-request-failed': 'Problème réseau.',
    'auth/unauthorized-domain': 'Domaine non autorisé dans Firebase.'
  };
  return map[code] || (code ? `Erreur: ${code}` : (message || 'Connexion impossible.'));
}

// ══════════════════════════════════════
// CLOUD SYNC (Firebase Firestore)
// ══════════════════════════════════════
const CLOUD_MODE = typeof window !== 'undefined' && !!window.db && !!auth;
const cloudRefs = {
  products: CLOUD_MODE ? window.db.collection('products').doc('_state') : null,
  ventes: CLOUD_MODE ? window.db.collection('sales').doc('_state') : null,
  achats: CLOUD_MODE ? window.db.collection('purchases').doc('_state') : null,
  finance: CLOUD_MODE ? window.db.collection('meta').doc('finance') : null,
};
let cloudStarted = false;

function renderAllPagesSafe() {
  try { updateDate(); } catch(e) {}
  try { renderDashboard(); } catch(e) {}
  try { renderProduits(); } catch(e) {}
  try { renderVentes(); } catch(e) {}
  try { renderAchats(); } catch(e) {}
  try { renderFinance(); } catch(e) {}
  try { renderReassorts(); } catch(e) {}
}

async function ensureCloudSeed() {
  if (!CLOUD_MODE) return;
  const snaps = await Promise.all([
    cloudRefs.products.get(), cloudRefs.ventes.get(),
    cloudRefs.achats.get(), cloudRefs.finance.get()
  ]);
  if (!snaps[0].exists) await cloudRefs.products.set({items: products});
  if (!snaps[1].exists) await cloudRefs.ventes.set({items: ventes});
  if (!snaps[2].exists) await cloudRefs.achats.set({items: achats});
  if (!snaps[3].exists) await cloudRefs.finance.set({data: finance});
}

function startCloudSync() {
  if (!CLOUD_MODE || cloudStarted || !auth.currentUser) return;
  cloudStarted = true;
  ensureCloudSeed().then(() => {
    cloudRefs.products.onSnapshot((snap) => { const d=snap.data(); if(d&&Array.isArray(d.items)){products=d.items;localStorage.setItem('oudyssia_products',JSON.stringify(products));renderAllPagesSafe();}});
    cloudRefs.ventes.onSnapshot((snap) => { const d=snap.data(); if(d&&Array.isArray(d.items)){ventes=d.items;localStorage.setItem('oudyssia_ventes',JSON.stringify(ventes));renderAllPagesSafe();}});
    cloudRefs.achats.onSnapshot((snap) => { const d=snap.data(); if(d&&Array.isArray(d.items)){achats=d.items;localStorage.setItem('oudyssia_achats',JSON.stringify(achats));renderAllPagesSafe();}});
    cloudRefs.finance.onSnapshot((snap) => { const d=snap.data(); if(d&&d.data){finance=d.data;localStorage.setItem('oudyssia_finance',JSON.stringify(finance));renderAllPagesSafe();}});
  }).catch(err => console.error('Cloud init error:', err));
}

async function saveCloudState(key, data) {
  if (!CLOUD_MODE) return;
  try {
    if (key === 'products') await cloudRefs.products.set({items: data});
    if (key === 'ventes') await cloudRefs.ventes.set({items: data});
    if (key === 'achats') await cloudRefs.achats.set({items: data});
    if (key === 'finance') await cloudRefs.finance.set({data: data});
  } catch (err) { console.error('Cloud save error for ' + key, err); }
}

// ══════════════════════════════════════
// 2. STATE & STORAGE
// ══════════════════════════════════════

const DATA_VERSION = 'excel-sync-2026-03-29-v1';

function bootstrapDataFromExcelIfNeeded() {
  const v = localStorage.getItem('oudyssia_data_version');
  if (v === DATA_VERSION) return;
  localStorage.setItem('oudyssia_products', JSON.stringify(JSON.parse(JSON.stringify(INITIAL_PRODUCTS))));
  localStorage.setItem('oudyssia_ventes', JSON.stringify(JSON.parse(JSON.stringify(INITIAL_VENTES))));
  localStorage.setItem('oudyssia_achats', JSON.stringify(JSON.parse(JSON.stringify(INITIAL_ACHATS))));
  localStorage.setItem('oudyssia_finance', JSON.stringify(JSON.parse(JSON.stringify(INITIAL_FINANCE))));
  localStorage.setItem('oudyssia_data_version', DATA_VERSION);
}
bootstrapDataFromExcelIfNeeded();

function loadData(key, initial) {
  try { const s = localStorage.getItem('oudyssia_' + key); return s ? JSON.parse(s) : JSON.parse(JSON.stringify(initial)); }
  catch(e) { return JSON.parse(JSON.stringify(initial)); }
}
function saveData(key, data) {
  localStorage.setItem('oudyssia_' + key, JSON.stringify(data));
  saveCloudState(key, data);
}

let products = loadData('products', INITIAL_PRODUCTS);
let ventes   = loadData('ventes', INITIAL_VENTES);
let achats   = loadData('achats', INITIAL_ACHATS);
let finance  = loadData('finance', INITIAL_FINANCE);
if (!finance.charges) finance.charges = INITIAL_FINANCE.charges;
if (!finance.tresorerie) finance.tresorerie = INITIAL_FINANCE.tresorerie;

// ══════════════════════════════════════
// 3. CALCULS MÉTIER
// ══════════════════════════════════════

function getProduct(sku) { return products.find(p => p.sku === sku); }

function calcFraisLivraison(sku, plateforme, numCommande, fraisReels) {
  if (plateforme !== 'Site Oudyssia') return 0;
  if (numCommande) { return fraisReels > 0 ? fraisReels : 0; }
  const p = getProduct(sku);
  if (!p || !p.poids) return 0;
  if (p.poids <= 500) return 6.9;
  if (p.poids <= 1200) return 8.9;
  if (p.poids <= 2000) return 10.9;
  return 0;
}

function calcFraisPlat(prix, plateforme, moyen_paiement, numCommande, allLinesCmd) {
  if (plateforme === 'TikTok') return Math.round(prix * 0.09 * 100) / 100;
  if (plateforme !== 'Site Oudyssia') return 0;
  let base = prix;
  if (numCommande && allLinesCmd > 0) base = allLinesCmd;
  if (moyen_paiement === 'PayPal') return Math.round((base * 0.029 + 0.35) * 100) / 100;
  return Math.round((base * 0.015 + 0.25) * 100) / 100;
}

function calcVente(v, index) {
  const p = getProduct(v.sku);
  if (!p) return null;
  const prixAchat = p.achat || 0;
  const ca = v.type === 'Retour' ? -(v.prix * v.qte) : v.prix * v.qte;
  const margeB = v.type === 'Retour' ? -(v.prix * v.qte - prixAchat * v.qte) : (v.prix - prixAchat) * v.qte;
  let fraisPlat = 0;
  if (v.num_commande) {
    const firstIdx = ventes.findIndex(x => x.num_commande === v.num_commande);
    if (firstIdx === index) {
      const totalCmd = ventes.filter(x => x.num_commande === v.num_commande).reduce((s, x) => s + x.prix * x.qte, 0);
      fraisPlat = calcFraisPlat(v.prix, v.plateforme, v.moyen_paiement, v.num_commande, totalCmd);
    }
  } else {
    fraisPlat = calcFraisPlat(v.prix, v.plateforme, v.moyen_paiement, '', 0);
  }
  const fraisLivr = calcFraisLivraison(v.sku, v.plateforme, v.num_commande, v.frais_livraison_reels);
  const margeNette = v.type === 'Retour' ? 0 : margeB - fraisPlat - fraisLivr;
  const margeP = ca !== 0 ? margeB / ca : 0;
  let qualite = '';
  if (margeP >= 0.5) qualite = 'Excellente';
  else if (margeP >= 0.4) qualite = 'Très bonne';
  else if (margeP >= 0.3) qualite = 'Bonne';
  else if (margeP >= 0.2) qualite = 'Correcte';
  else if (margeP >= 0.1) qualite = 'Faible';
  else qualite = 'Très faible';
  return { ...v, prixAchat, ca, margeB, margeP, qualite, fraisPlat, fraisLivr, margeNette };
}

function getStockActuel(sku) {
  const p = getProduct(sku);
  if (!p) return 0;
  const stockInit = (p.stock_initial || 0) + (p.reassort || 0);
  const vendu = ventes.filter(v => v.sku === sku && v.type === 'Vente').reduce((s, v) => s + (v.qte || 1), 0);
  const retours = ventes.filter(v => v.sku === sku && v.type === 'Retour').reduce((s, v) => s + (v.qte || 1), 0);
  return stockInit - vendu + retours;
}

function getStatutStock(stock) {
  if (stock === 0) return {label:'Rupture', cls:'badge-stock-rupture'};
  if (stock <= 1) return {label:'Stock faible', cls:'badge-stock-faible'};
  return {label:'En stock', cls:'badge-stock-ok'};
}

function getCurrentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
}

function calcKPIs(mois) {
  const m = mois || getCurrentMonth();
  const ventesmois = ventes.filter(v => v.date && v.date.startsWith(m));
  const calcVentesMois = ventesmois.map((v,i) => calcVente(v, ventes.indexOf(v))).filter(Boolean);
  const ca = calcVentesMois.filter(v => v.type !== 'Retour').reduce((s,v) => s + v.ca, 0);
  const profit = calcVentesMois.filter(v => v.type !== 'Retour').reduce((s,v) => s + v.margeB, 0);
  const margeNette = calcVentesMois.filter(v => v.type !== 'Retour').reduce((s,v) => s + v.margeNette, 0);
  const units = calcVentesMois.filter(v => v.type !== 'Retour').reduce((s,v) => s + v.qte, 0);
  const margeP = ca > 0 ? profit/ca : 0;
  const joursAvecVente = new Set(ventesmois.filter(v=>v.type!=='Retour').map(v=>v.date)).size;
  const today = new Date();
  const isCurrentM = m === getCurrentMonth();
  const daysElapsed = isCurrentM ? today.getDate() : new Date(parseInt(m.split('-')[0]), parseInt(m.split('-')[1]), 0).getDate();
  const joursSansVente = daysElapsed - joursAvecVente;
  return { ca, profit, margeNette, units, margeP, joursAvecVente, joursSansVente };
}


function getMonthlySalesStats() {
  const byMonth = {};
  ventes.forEach((v, idx) => {
    if (!v.date || v.type === 'Retour') return;
    const month = v.date.substring(0,7);
    if (!byMonth[month]) byMonth[month] = {ca:0, profit:0, count:0, units:0};
    const calc = calcVente(v, idx);
    byMonth[month].ca += v.prix * v.qte;
    byMonth[month].profit += calc ? calc.margeB : 0;
    byMonth[month].count += 1;
    byMonth[month].units += v.qte || 1;
  });
  return byMonth;
}

// ══════════════════════════════════════
// SMART FORECAST & REASSORT HELPERS
// Forecast next month based on previous month + current month
// without touching date system or month filtering logic
// ══════════════════════════════════════

function getMonthShift(monthStr, shift) {
  const [y, m] = monthStr.split('-').map(Number);
  const d = new Date(y, m - 1 + shift, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2,'0')}`;
}

function getForecastMonthContext() {
  const current = getCurrentMonth();
  return {
    previousMonth: getMonthShift(current, -1),
    currentMonth: current,
    nextMonth: getMonthShift(current, 1),
  };
}

function getSalesQtyForMonth(sku, monthStr) {
  return ventes
    .filter(v => v.sku === sku && v.type === 'Vente' && v.date && v.date.startsWith(monthStr))
    .reduce((s, v) => s + (v.qte || 1), 0);
}

function getRecentSalesQty(sku, days = 30) {
  const now = new Date();
  now.setHours(23,59,59,999);
  return ventes
    .filter(v => {
      if (v.sku !== sku || v.type !== 'Vente' || !v.date) return false;
      const d = new Date(v.date + 'T12:00:00');
      return ((now - d) / 86400000) <= days;
    })
    .reduce((s, v) => s + (v.qte || 1), 0);
}

function getSellingPriceReference(p) {
  const available = [];
  if ((p.dispo_site === 'Oui') && (p.prix_site || 0) > 0) available.push(p.prix_site);
  if ((p.dispo_vinted === 'Oui') && (p.prix_vinted || 0) > 0) available.push(p.prix_vinted);
  if ((p.prix_tiktok || 0) > 0) available.push(p.prix_tiktok);

  if ((p.dispo_site === 'Oui') && (p.prix_site || 0) > 0) return p.prix_site;
  if ((p.dispo_vinted === 'Oui') && (p.prix_vinted || 0) > 0) return p.prix_vinted;
  if ((p.prix_tiktok || 0) > 0) return p.prix_tiktok;

  const fallback = [p.prix_site || 0, p.prix_vinted || 0, p.prix_tiktok || 0].filter(x => x > 0);
  return fallback.length ? fallback.reduce((a,b)=>a+b,0) / fallback.length : 0;
}

function getUnitProfitReference(p) {
  return Math.max(0, getSellingPriceReference(p) - (p.achat || 0));
}

function getPurchasePriceTier(achat) {
  if ((achat || 0) > 30) return 'high';
  if ((achat || 0) < 15) return 'low';
  return 'mid';
}

function getSuggestedReorderForSku(sku) {
  const p = getProduct(sku);
  if (!p) return {qty:0, confidence:'LOW', coverageDays:999, weightedUnits:0, stock:getStockActuel(sku), recentQty:0};

  const stock = Math.max(0, getStockActuel(sku));
  const { previousMonth, currentMonth } = getForecastMonthContext();
  const marchUnits = getSalesQtyForMonth(sku, previousMonth);
  const aprilUnits = getSalesQtyForMonth(sku, currentMonth);
  const totalTwoMonths = marchUnits + aprilUnits;
  const recentQty = getRecentSalesQty(sku, 30);

  const weightedUnits = (marchUnits * 0.4) + (aprilUnits * 0.6);
  const dailyVelocity = weightedUnits / 30;
  const coverageDays = dailyVelocity > 0 ? (stock / dailyVelocity) : 999;

  let confidence = 'LOW';
  if (totalTwoMonths >= 5 || (marchUnits > 0 && aprilUnits > 0 && totalTwoMonths >= 4)) confidence = 'HIGH';
  else if (totalTwoMonths >= 3) confidence = 'MEDIUM';
  else if (totalTwoMonths >= 1) confidence = 'LOW';

  let qty = 0;

  if (stock === 0 && totalTwoMonths > 0) {
    if (confidence === 'LOW') qty = recentQty >= 2 ? 2 : 1;
    if (confidence === 'MEDIUM') qty = 2;
    if (confidence === 'HIGH') qty = recentQty >= 2 ? 3 : 2;
  } else if (stock === 1) {
    if (dailyVelocity > (1/14)) qty = 1;
    if (dailyVelocity > (1/7) && confidence !== 'LOW') qty = 2;
  } else if (coverageDays < 7) {
    if (confidence === 'LOW') qty = recentQty >= 1 ? 1 : 0;
    if (confidence === 'MEDIUM') qty = 2;
    if (confidence === 'HIGH') qty = 3;
  } else if (coverageDays < 14) {
    if (confidence === 'HIGH') qty = 2;
    else if (confidence === 'MEDIUM' && recentQty >= 2) qty = 1;
  }

  const achatTier = getPurchasePriceTier(p.achat || 0);
  if (qty > 0) {
    if (achatTier === 'high') qty -= 1;
    if (achatTier === 'low' && confidence === 'HIGH') qty += 1;
  }

  if (stock === 0 && totalTwoMonths > 0) qty = Math.max(1, qty);
  if (confidence === 'LOW') qty = Math.min(qty, recentQty >= 2 ? 2 : 1);
  if (confidence === 'MEDIUM') qty = Math.min(qty, 3);
  if (confidence === 'HIGH') qty = Math.min(qty, 4);

  qty = Math.max(0, Math.round(qty));

  return { qty, confidence, coverageDays, weightedUnits, stock, recentQty, marchUnits, aprilUnits, totalTwoMonths };
}

function getNextMonthForecastBySku() {
  const { nextMonth } = getForecastMonthContext();
  const forecast = {};
  products.forEach(p => {
    const rec = getSuggestedReorderForSku(p.sku);
    const stock = Math.max(0, getStockActuel(p.sku));
    const realisticUnits = Math.min(rec.weightedUnits, stock + rec.qty);
    const units = (rec.totalTwoMonths === 0 || (stock === 0 && rec.qty === 0)) ? 0 : realisticUnits;
    const priceRef = getSellingPriceReference(p);
    const unitProfitRef = Math.max(0, priceRef - (p.achat || 0));
    forecast[p.sku] = {
      month: nextMonth,
      units,
      revenue: units * priceRef,
      profit: units * unitProfitRef,
      reorderQty: rec.qty,
      confidence: rec.confidence,
      coverageDays: rec.coverageDays,
      weightedUnits: rec.weightedUnits,
      priceRef,
      unitProfitRef,
    };
  });
  return forecast;
}

function getNextMonthForecastTotals() {
  const bySku = getNextMonthForecastBySku();
  const totals = Object.values(bySku).reduce((acc, x) => {
    acc.revenue += x.revenue || 0;
    acc.profit += x.profit || 0;
    acc.units += x.units || 0;
    return acc;
  }, { revenue:0, profit:0, units:0 });
  return { bySku, ...totals };
}


function getDashboardExtras(mois) {
  const m = mois || getCurrentMonth();
  const ventesMois = ventes.filter(v => v.date && v.date.startsWith(m) && v.type !== 'Retour');
  const nombreVentes = ventesMois.length;
  const bestBySku = {};
  ventesMois.forEach((v, idx) => {
    if (!bestBySku[v.sku]) bestBySku[v.sku] = {qte:0, profit:0};
    bestBySku[v.sku].qte += v.qte || 1;
    const calc = calcVente(v, idx);
    bestBySku[v.sku].profit += calc ? calc.margeB : 0;
  });
  const bestEntry = Object.entries(bestBySku).sort((a,b) => (b[1].qte - a[1].qte) || (b[1].profit - a[1].profit))[0];
  const bestSku = bestEntry ? bestEntry[0] : '';
  const bestProduct = bestSku ? getProduct(bestSku) : null;
  const bestUnits = bestEntry ? bestEntry[1].qte : 0;
  const totalUnitsAvailable = products.reduce((s,p) => s + Math.max(0, getStockActuel(p.sku)), 0);
  const profitPotential = products.reduce((sum, p) => {
    const stock = Math.max(0, getStockActuel(p.sku));
    if (!stock) return sum;
    const prices = [];
    if ((p.prix_vinted || 0) > 0) prices.push(p.prix_vinted);
    if ((p.prix_site || 0) > 0) prices.push(p.prix_site);
    if (!prices.length) return sum;
    return sum + stock * Math.max(0, Math.min(...prices) - (p.achat || 0));
  }, 0);
  return { nombreVentes, bestSku, bestProduct, bestUnits, totalUnitsAvailable, profitPotential };
}

// ══════════════════════════════════════
// ★ NOUVEAU — EXPORT CSV
// ══════════════════════════════════════

function exportVentesCSV() {
  const mois = document.getElementById('filter-mois-vente')?.value || '';
  const rows = ventes.map((v,i) => {
    const c = calcVente(v, i);
    if (!c) return null;
    if (mois && !v.date.startsWith(mois)) return null;
    return [
      v.date, v.sku, `"${c.nom||''}"`, v.plateforme,
      v.qte, v.prix, c.prixAchat, c.ca.toFixed(2),
      c.margeB.toFixed(2), (c.margeP*100).toFixed(1)+'%',
      c.fraisPlat.toFixed(2), c.fraisLivr.toFixed(2),
      c.margeNette.toFixed(2), v.type, v.num_commande||''
    ].join(';');
  }).filter(Boolean);

  const header = 'Date;SKU;Parfum;Plateforme;Qté;Prix;Px Achat;CA;Marge Brute;Marge %;Frais Plat;Frais Livr;Marge Nette;Type;N° Commande';
  const csv = '\uFEFF' + header + '\n' + rows.join('\n'); // BOM pour Excel FR
  const label = mois ? formatMonth(mois) : 'Tout';
  downloadFile(csv, `OUDYSSIA_Ventes_${label.replace(' ','_')}.csv`, 'text/csv;charset=utf-8;');
  showToast('Export CSV ventes ✓');
}

function exportProduitsCSV() {
  const header = 'SKU;Nom;Marque;Prix Achat;Stock;Prix Vinted;Prix Site;Prix TikTok;Poids;Marge Brute Vinted;Dispo Vinted;Dispo Site';
  const rows = products.map(p => {
    const stock = getStockActuel(p.sku);
    const margeV = p.prix_vinted > 0 ? (p.prix_vinted - p.achat).toFixed(2) : '';
    return [
      p.sku, `"${p.nom}"`, p.marque, p.achat,
      stock, p.prix_vinted||0, p.prix_site||0, p.prix_tiktok||0,
      p.poids||0, margeV, p.dispo_vinted, p.dispo_site
    ].join(';');
  });
  const csv = '\uFEFF' + header + '\n' + rows.join('\n');
  downloadFile(csv, 'OUDYSSIA_Produits.csv', 'text/csv;charset=utf-8;');
  showToast('Export CSV produits ✓');
}

function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); document.body.removeChild(a); }, 1000);
}

// ══════════════════════════════════════
// 4. DASHBOARD avec filtre mois
// ══════════════════════════════════════

let charts = {};
let dashboardMois = getCurrentMonth(); // ★ NOUVEAU — mois sélectionné dashboard

function renderDashboard() {
  const mois = dashboardMois;
  const kpis = calcKPIs(mois);
  const extras = getDashboardExtras(mois);

  // Mise à jour badge mois dans le header
  const badge = document.getElementById('dashboard-month-badge');
  if (badge) badge.textContent = formatMonth(mois);

  const kpiEl = document.getElementById('kpi-grid');
  const kpiData = [
    {label:'CA du mois', value: fmt(kpis.ca), sub: `${kpis.units} unités vendues`, icon:'💹'},
    {label:'Profit brut', value: fmt(kpis.profit), sub: `Marge ${pct(kpis.margeP)}`, icon:'🎯'},
    {label:'Marge nette', value: fmt(kpis.margeNette), sub: 'Après frais plateformes', icon:'✦'},
    {label:'Jours actifs', value: kpis.joursAvecVente, sub: `${kpis.joursSansVente} jours sans vente`, icon:'📅'},
    {label:'Produits en stock', value: products.filter(p=>getStockActuel(p.sku)>0).length, sub: `/${products.length} références`, icon:'📦'},
    {label:'Objectif', value: fmt(finance.objectif), sub: `Écart: ${fmt(kpis.profit - finance.objectif)}`, icon:'🏆'},
    {label:'Ventes enregistrées', value: extras.nombreVentes, sub: formatMonth(mois), icon:'🛍️'},
    {label:'Best-seller', value: extras.bestProduct ? extras.bestProduct.nom : '—', sub: extras.bestProduct ? `${extras.bestSku} · ${extras.bestUnits} unités vendues` : '', icon:'⭐', valueClass:'kpi-value-name'},
    {label:'Qté totale stock', value: extras.totalUnitsAvailable, sub: 'unités disponibles', icon:'🏪'},
    {label:'Profit potentiel', value: fmt(extras.profitPotential), sub: 'si tout vendu', icon:'🚀'},
  ];
  kpiEl.innerHTML = kpiData.map(k => `
    <div class="kpi-card">
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value ${k.valueClass || ''}">${k.value}</div>
      <div class="kpi-sub">${k.sub}</div>
    </div>`).join('');

  document.getElementById('global-score').textContent = pct(kpis.margeP);

  renderChartDaily(mois);
  renderChartPlatforms(mois);
  renderChartMargins(mois);
  renderChartMonthlyCA();
  renderChartMonthlyProfit();
  renderChartSalesPlatform();
  renderTopProduits(mois);
  renderAlertes();
  renderRecentSales();
}

// ★ NOUVEAU — Sélecteur de mois dashboard
function onDashboardMonthChange(val) {
  dashboardMois = val || getCurrentMonth();
  renderDashboard();
}

function buildDashboardMonthSelect() {
  const months = [...new Set(ventes.map(v => v.date ? v.date.substring(0,7) : ''))].filter(Boolean).sort().reverse();
  const sel = document.getElementById('dashboard-month-select');
  if (!sel) return;
  sel.innerHTML = months.map(m => `<option value="${m}" ${m===dashboardMois?'selected':''}>${formatMonth(m)}</option>`).join('');
}

function renderChartDaily(mois) {
  const m = mois || getCurrentMonth();
  const byDay = {};
  ventes.filter(v => v.date && v.date.startsWith(m) && v.type !== 'Retour').forEach((v,i) => {
    const d = v.date;
    const calc = calcVente(v, ventes.indexOf(v));
    if (!byDay[d]) byDay[d] = 0;
    if (calc) byDay[d] += calc.margeB;
  });
  const days = Object.keys(byDay).sort();
  const ctx = document.getElementById('chart-daily');
  if (charts.daily) charts.daily.destroy();
  charts.daily = new Chart(ctx, {
    type: 'bar',
    data: { labels: days.map(d => d.split('-')[2]), datasets: [{ data: days.map(d => Math.round(byDay[d]*100)/100), backgroundColor: days.map(d => Math.round(byDay[d]*100)/100 > 0 ? 'rgba(200,169,81,0.70)' : 'rgba(220,38,38,0.45)'), borderColor: days.map(d => Math.round(byDay[d]*100)/100 > 0 ? '#C8A951' : '#DC2626'), borderWidth: 1, borderRadius: 5 }] },
    options: chartOptions('€')
  });
}

function renderChartPlatforms(mois) {
  const m = mois || getCurrentMonth();
  const plats = ['Vinted','Site Oudyssia','TikTok','Direct'];
  const data = plats.map(p => ventes.filter(v => v.date && v.date.startsWith(m) && v.plateforme === p && v.type !== 'Retour').reduce((s,v) => s + v.prix*v.qte, 0));
  const ctx = document.getElementById('chart-platforms');
  if (charts.platforms) charts.platforms.destroy();
  charts.platforms = new Chart(ctx, { type: 'doughnut', data: { labels: plats, datasets: [{ data, backgroundColor: ['rgba(33,150,243,0.80)','rgba(200,169,81,0.80)','rgba(139,92,246,0.80)','rgba(74,222,128,0.75)'], borderColor: '#0D0D0D', borderWidth: 2 }] }, options: { ...chartOptions('€'), plugins: { legend: { position: 'bottom', labels: { color: '#E5E7EB', font: {size:11}, padding: 14, boxWidth: 12 } } } } });
}

function renderChartMargins(mois) {
  const m = mois || getCurrentMonth();
  const counts = {Excellente:0,'Très bonne':0,'Bonne':0,Correcte:0,Faible:0,'Très faible':0};
  ventes.filter(v => v.date && v.date.startsWith(m) && v.type !== 'Retour').forEach((v,i) => {
    const c = calcVente(v, ventes.indexOf(v));
    if (c && counts[c.qualite] !== undefined) counts[c.qualite]++;
  });
  const ctx = document.getElementById('chart-margins');
  if (charts.margins) charts.margins.destroy();
  charts.margins = new Chart(ctx, { type: 'pie', data: { labels: Object.keys(counts), datasets: [{ data: Object.values(counts), backgroundColor: ['#C9A15C','#5FB3A2','#D8A7B1','#C9A227','#D97B4D','#6E2132'], borderColor: '#0D0D0D', borderWidth: 2 }] }, options: { ...chartOptions(), plugins: { legend: { position: 'bottom', labels: { color: '#E5E7EB', font: {size:10}, padding: 12, boxWidth: 12 } } } } });
}


function renderChartMonthlyCA() {
  const byMonth = getMonthlySalesStats();
  const labels = Object.keys(byMonth).sort();
  const ctx = document.getElementById('chart-monthly-ca');
  if (!ctx) return;
  if (charts.monthlyCA) charts.monthlyCA.destroy();

  const forecast = getNextMonthForecastTotals();
  const { nextMonth } = getForecastMonthContext();

  const chartLabels = [...labels, nextMonth].map(formatMonth);
  const realData = [...labels.map(m => Math.round((byMonth[m].ca || 0) * 100) / 100), null];
  const forecastData = [...labels.map(() => null), Math.round((forecast.revenue || 0) * 100) / 100];

  charts.monthlyCA = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Réel',
          data: realData,
          borderColor: '#C8A951',
          backgroundColor: 'rgba(200,169,81,0.10)',
          tension: 0.4,
          fill: true,
          borderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: '#E8D08A',
          pointBorderColor: '#C8A951',
          pointBorderWidth: 1.5
        },
        {
          label: 'Prévision',
          data: forecastData,
          borderColor: 'rgba(232,208,138,0.60)',
          backgroundColor: 'transparent',
          tension: 0.4,
          fill: false,
          borderWidth: 1.5,
          borderDash: [5,5],
          pointRadius: 3,
          pointBackgroundColor: 'rgba(232,208,138,0.55)'
        }
      ]
    },
    options: {
      ...chartOptions('€'),
      plugins: {
        ...chartOptions('€').plugins,
        legend: { display: true, labels: { color: '#9A9080', font: {size:10} } }
      }
    }
  });
}



function renderChartMonthlyProfit() {
  const byMonth = getMonthlySalesStats();
  const labels = Object.keys(byMonth).sort();
  const ctx = document.getElementById('chart-monthly-profit');
  if (!ctx) return;
  if (charts.monthlyProfit) charts.monthlyProfit.destroy();

  const forecast = getNextMonthForecastTotals();
  const { nextMonth } = getForecastMonthContext();

  const chartLabels = [...labels, nextMonth].map(formatMonth);
  const realData = [...labels.map(m => Math.round((byMonth[m].profit || 0) * 100) / 100), null];
  const forecastData = [...labels.map(() => null), Math.round((forecast.profit || 0) * 100) / 100];

  charts.monthlyProfit = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Réel',
          data: realData,
          borderColor: '#4ADE80',
          backgroundColor: 'rgba(74,222,128,0.08)',
          tension: 0.4,
          fill: true,
          borderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: '#4ADE80',
          pointBorderColor: '#22C55E',
          pointBorderWidth: 1.5
        },
        {
          label: 'Prévision',
          data: forecastData,
          borderColor: 'rgba(134,239,172,0.55)',
          backgroundColor: 'transparent',
          tension: 0.4,
          fill: false,
          borderWidth: 1.5,
          borderDash: [5,5],
          pointRadius: 3,
          pointBackgroundColor: 'rgba(134,239,172,0.45)'
        }
      ]
    },
    options: {
      ...chartOptions('€'),
      plugins: {
        ...chartOptions('€').plugins,
        legend: { display: true, labels: { color: '#9A9080', font: {size:10} } }
      }
    }
  });
}


function renderChartSalesPlatform() {
  const counts = {};
  ventes.filter(v => v.type !== 'Retour').forEach(v => { counts[v.plateforme] = (counts[v.plateforme] || 0) + (v.qte || 1); });
  const labels = ['Vinted','Site Oudyssia','TikTok','Direct'].filter(p => counts[p]);
  const ctx = document.getElementById('chart-sales-platform');
  if (!ctx) return;
  if (charts.salesPlatform) charts.salesPlatform.destroy();
    const platColorMap = { Vinted:'rgba(33,150,243,0.80)', 'Site Oudyssia':'rgba(200,169,81,0.80)', TikTok:'rgba(139,92,246,0.80)', Direct:'rgba(74,222,128,0.75)' };
  charts.salesPlatform = new Chart(ctx, { type: 'doughnut', data: { labels, datasets: [{ data: labels.map(l => counts[l]||0), backgroundColor: labels.map(l => platColorMap[l]||'rgba(90,82,72,0.7)'), borderColor: '#0D0D0D', borderWidth: 2 }] }, options: { ...chartOptions(), plugins: { legend: { position: 'bottom', labels: { color: '#E5E7EB', font: {size:11}, padding: 14, boxWidth: 12 } } } } });
}

function chartOptions(unit='') {
  return {
    responsive: true,
    animation: { duration: 400 },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1A1A1A',
        borderColor: 'rgba(200,169,81,0.25)',
        borderWidth: 1,
        titleColor: '#C8A951',
        bodyColor: '#E5E7EB',
        padding: 10,
        cornerRadius: 6,
        callbacks: unit ? { label: ctx => ` ${(ctx.parsed.y ?? ctx.parsed).toLocaleString('fr-FR')}${unit}` } : {}
      }
    },
    scales: {
      x: { display: true, grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false }, ticks: { color: '#6B6560', font:{size:10} } },
      y: { beginAtZero: true, min: 0, display: true, grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false }, ticks: { color: '#6B6560', font:{size:10} } }
    }
  };
}

function renderTopProduits(mois) {
  const m = mois || getCurrentMonth();
  const profitBySku = {};
  ventes.filter(v => v.date && v.date.startsWith(m) && v.type !== 'Retour').forEach((v,i) => {
    const c = calcVente(v, ventes.indexOf(v));
    if (!c) return;
    if (!profitBySku[v.sku]) profitBySku[v.sku] = {profit:0, qte:0};
    profitBySku[v.sku].profit += c.margeB;
    profitBySku[v.sku].qte += v.qte;
  });
  const sorted = Object.entries(profitBySku).sort((a,b)=>b[1].profit-a[1].profit).slice(0,5);
  const el = document.getElementById('top-produits');
  if (!sorted.length) { el.innerHTML = '<div class="no-data">Aucune vente ce mois</div>'; return; }
  const ranks = ['🥇','🥈','🥉','4.','5.'];
  el.innerHTML = sorted.map(([sku, d], i) => {
    const p = getProduct(sku);
    return `<div class="top-item"><div class="top-rank">${ranks[i]}</div><div class="top-info"><div class="top-name">${p ? p.nom.substring(0,35) : sku}</div><div class="top-meta">${sku} · ${d.qte} vente(s)</div></div><div class="top-profit">${fmt(d.profit)}</div></div>`;
  }).join('');
}

function renderAlertes() {
  const alertes = products.filter(p => { const s = getStockActuel(p.sku); return s <= 1 && (p.dispo_vinted === 'Oui' || p.dispo_site === 'Oui'); }).sort((a,b) => getStockActuel(a.sku) - getStockActuel(b.sku)).slice(0,6);
  document.getElementById('alert-count').textContent = alertes.length + ' alertes';
  const el = document.getElementById('alertes-stock');
  if (!alertes.length) { el.innerHTML = '<div class="no-data">✅ Aucune alerte</div>'; return; }
  el.innerHTML = alertes.map(p => { const s = getStockActuel(p.sku); return `<div class="alert-item"><div><div class="alert-name">${p.nom.substring(0,30)}</div><div class="alert-meta">${p.sku}</div></div><div class="alert-stock ${s===0?'zero':'low'}">${s===0?'Rupture':s+' restant'}</div></div>`; }).join('');
}

function renderRecentSales() {
  const recent = [...ventes].reverse().slice(0,8);
  document.getElementById('recent-sales').innerHTML = recent.map(v => {
    const p = getProduct(v.sku);
    return `<div class="recent-item"><div class="recent-dot" style="background:${platColor(v.plateforme)}"></div><div class="recent-info"><div class="recent-name">${p ? p.nom.substring(0,28) : v.sku}</div><div class="recent-meta">${v.date} · ${v.plateforme}</div></div><div class="recent-price">${fmt(v.prix)}</div></div>`;
  }).join('');
}

function platColor(p) { return {Vinted:'#60A5FA','Site Oudyssia':'#C8A951',TikTok:'#A78BFA',Direct:'#4ADE80'}[p] || '#9A9080'; }

// ══════════════════════════════════════
// 5. PRODUITS
// ══════════════════════════════════════

function renderProduits() {
  const search = (document.getElementById('search-produits')?.value||'').toLowerCase();
  const marque = document.getElementById('filter-marque')?.value||'';
  const stockF = document.getElementById('filter-stock')?.value||'';
  const marques = [...new Set(products.map(p=>p.marque))].sort();
  const sel = document.getElementById('filter-marque');
  const cur = sel.value;
  sel.innerHTML = '<option value="">Toutes les marques</option>' + marques.map(m=>`<option value="${m}" ${m===cur?'selected':''}>${m}</option>`).join('');
  const filtered = products.filter(p => {
    const s = getStockActuel(p.sku);
    const ms = !search || p.nom.toLowerCase().includes(search) || p.sku.toLowerCase().includes(search) || (p.marque||'').toLowerCase().includes(search);
    const mm = !marque || p.marque === marque;
    const mst = !stockF || (stockF==='disponible'&&s>1) || (stockF==='rupture'&&s===0) || (stockF==='faible'&&s===1);
    return ms && mm && mst;
  });
  const tbody = document.getElementById('tbody-produits');
  if (!filtered.length) { tbody.innerHTML = '<tr><td colspan="13" class="no-data">Aucun produit trouvé</td></tr>'; return; }
  tbody.innerHTML = filtered.map((p) => {
    const stock = getStockActuel(p.sku);
    const statut = getStatutStock(stock);
    const margeV = p.prix_vinted > 0 ? p.prix_vinted - p.achat : null;
    const margeS = p.prix_site > 0 ? p.prix_site - p.achat - (p.frais_livraison||0) - (Math.round((p.prix_site*0.015+0.25)*100)/100) : null;
    const idx = products.indexOf(p);
    return `<tr>
      <td class="text-gold fw-600">${p.sku}</td>
      <td style="max-width:200px;white-space:normal;font-size:11px">${p.nom}</td>
      <td class="text-dim">${p.marque||'—'}</td>
      <td>${fmt(p.achat)}</td>
      <td>${p.prix_vinted>0?fmt(p.prix_vinted):'—'}</td>
      <td>${p.prix_site>0?fmt(p.prix_site):'—'}</td>
      <td>${p.prix_tiktok>0?fmt(p.prix_tiktok):'—'}</td>
      <td class="fw-600 ${stock===0?'text-red':stock<=1?'text-gold':''}">${stock}</td>
      <td><span class="badge ${statut.cls}">${statut.label}</span></td>
      <td>${margeV!==null?`<span class="${margeV>10?'text-green':'text-dim'}">${fmt(margeV)}</span>`:'—'}</td>
      <td>${margeS!==null?`<span class="${margeS>8?'text-green':'text-dim'}">${fmt(margeS)}</span>`:'—'}</td>
      <td class="text-dim">${p.poids>0?p.poids+'g':'—'}</td>
      <td>
        <button class="btn-icon" onclick="editProduit(${idx})">✎</button>
        <button class="btn-icon" onclick="addReassort(${idx})">+</button>
      </td>
    </tr>`;
  }).join('');
}

function editProduit(idx) {
  const p = products[idx];
  document.getElementById('modal-produit-title').textContent = 'Modifier produit';
  document.getElementById('p-sku').value = p.sku;
  document.getElementById('p-nom').value = p.nom;
  document.getElementById('p-marque').value = p.marque||'';
  document.getElementById('p-achat').value = p.achat;
  document.getElementById('p-stock').value = p.stock_initial;
  document.getElementById('p-vinted').value = p.prix_vinted||'';
  document.getElementById('p-site').value = p.prix_site||'';
  document.getElementById('p-tiktok').value = p.prix_tiktok||'';
  document.getElementById('p-poids').value = p.poids||'';
  document.getElementById('p-dispo-vinted').value = p.dispo_vinted||'Oui';
  document.getElementById('p-dispo-site').value = p.dispo_site||'Oui';
  document.getElementById('p-notes').value = p.notes||'';
  document.getElementById('p-edit-idx').value = idx;
  openModal('produit');
}

function addReassort(idx) {
  const qte = prompt(`Combien d'unités ajouter au stock de ${products[idx].nom} ?`);
  if (!qte || isNaN(qte) || parseInt(qte) <= 0) return;
  products[idx].reassort = (products[idx].reassort || 0) + parseInt(qte);
  saveData('products', products);
  renderProduits();
  showToast(`+${qte} unités ajoutées à ${products[idx].sku}`);
}

function saveProduit(e) {
  e.preventDefault();
  const idx = parseInt(document.getElementById('p-edit-idx').value);
  const poids = parseInt(document.getElementById('p-poids').value)||0;
  const data = {
    sku: document.getElementById('p-sku').value.trim(),
    nom: document.getElementById('p-nom').value.trim(),
    marque: document.getElementById('p-marque').value.trim(),
    achat: parseFloat(document.getElementById('p-achat').value)||0,
    stock_initial: parseInt(document.getElementById('p-stock').value)||0,
    prix_vinted: parseFloat(document.getElementById('p-vinted').value)||0,
    prix_site: parseFloat(document.getElementById('p-site').value)||0,
    prix_tiktok: parseFloat(document.getElementById('p-tiktok').value)||0,
    poids,
    dispo_vinted: document.getElementById('p-dispo-vinted').value,
    dispo_site: document.getElementById('p-dispo-site').value,
    notes: document.getElementById('p-notes').value.trim(),
    reassort: idx >= 0 ? (products[idx].reassort || 0) : 0,
    prix_mini: 0,
    frais_livraison: poids <= 500 ? 6.9 : poids <= 1200 ? 8.9 : 10.9,
  };
  if (idx >= 0) products[idx] = data; else products.push(data);
  saveData('products', products);
  closeModal();
  renderProduits();
  showToast(idx >= 0 ? 'Produit modifié ✓' : 'Produit ajouté ✓');
}

// ══════════════════════════════════════
// 6. VENTES
// ══════════════════════════════════════

function renderVentes() {
  const search = (document.getElementById('search-ventes')?.value||'').toLowerCase();
  const plat = document.getElementById('filter-plateforme')?.value||'';
  const mois = document.getElementById('filter-mois-vente')?.value||'';
  const months = [...new Set(ventes.map(v => v.date ? v.date.substring(0,7) : ''))].filter(Boolean).sort().reverse();
  const selM = document.getElementById('filter-mois-vente');
  const curM = selM.value;
  selM.innerHTML = '<option value="">Tous les mois</option>' + months.map(m => `<option value="${m}" ${m===curM?'selected':''}>${formatMonth(m)}</option>`).join('');
  const filtered = ventes.map((v,i) => ({v, i, c: calcVente(v, i)})).filter(({v}) => {
    const p = getProduct(v.sku);
    const nom = p ? p.nom.toLowerCase() : '';
    const ms = !search || v.sku.toLowerCase().includes(search) || nom.includes(search) || v.plateforme.toLowerCase().includes(search);
    const mp = !plat || v.plateforme === plat;
    const mm = !mois || (v.date && v.date.startsWith(mois));
    return ms && mp && mm;
  }).reverse();
  const tbody = document.getElementById('tbody-ventes');
  if (!filtered.length) { tbody.innerHTML = '<tr><td colspan="15" class="no-data">Aucune vente trouvée</td></tr>'; return; }
  const platBadge = {Vinted:'badge-vinted','Site Oudyssia':'badge-site',TikTok:'badge-tiktok',Direct:'badge-direct'};
  tbody.innerHTML = filtered.map(({v, i, c}) => `<tr>
    <td class="text-dim">${v.date||'—'}</td>
    <td class="text-gold">${v.sku}</td>
    <td style="max-width:160px;white-space:normal;font-size:11px">${c?c.nom||v.sku:v.sku}</td>
    <td><span class="badge ${platBadge[v.plateforme]||''}">${v.plateforme}</span></td>
    <td class="text-right">${v.qte}</td>
    <td class="fw-600">${fmt(v.prix)}</td>
    <td class="text-dim">${fmt(c?c.prixAchat:0)}</td>
    <td>${c?fmt(c.ca):'—'}</td>
    <td class="${c&&c.margeB>0?'text-green':'text-red'}">${c?fmt(c.margeB):'—'}</td>
    <td>${c?pct(c.margeP):'—'}</td>
    <td class="text-dim">${c?fmt(c.fraisPlat):'—'}</td>
    <td class="text-dim">${c?fmt(c.fraisLivr):'—'}</td>
    <td class="${c&&c.margeNette>0?'text-green':'text-red'}">${c?fmt(c.margeNette):'—'}</td>
    <td>${v.type==='Retour'?'<span class="badge badge-retour">Retour</span>':'<span class="badge badge-stock-ok">Vente</span>'}</td>
    <td><button class="btn-icon danger" onclick="deleteVente(${i})">✕</button></td>
  </tr>`).join('');
}

function deleteVente(idx) {
  if (!confirm('Supprimer cette vente ?')) return;
  ventes.splice(idx, 1);
  saveData('ventes', ventes);
  renderVentes();
  renderDashboard();
  showToast('Vente supprimée');
}

// ══════════════════════════════════════
// ★ NOUVEAU — COMMANDE GROUPÉE MULTI-PRODUITS
// ══════════════════════════════════════

let cmdLines = []; // lignes de la commande en cours

function openCommandeGroupee() {
  cmdLines = [{}]; // 1 ligne vide par défaut
  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('modal-commande').classList.add('open');
  // Init
  document.getElementById('cmd-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('cmd-plateforme').value = 'Site Oudyssia';
  document.getElementById('cmd-paiement').value = 'PayPal';
  document.getElementById('cmd-livraison').value = '';
  onCmdPlateformeChange();
  renderCmdLines();
}

function onCmdPlateformeChange() {
  const plat = document.getElementById('cmd-plateforme').value;
  const isSite = plat === 'Site Oudyssia';
  document.getElementById('cmd-paiement-row').style.display = isSite ? 'flex' : 'none';
  document.getElementById('cmd-livraison-row').style.display = isSite ? 'flex' : 'none';
  renderCmdLines();
  updateCmdPreview();
}

function renderCmdLines() {
  const container = document.getElementById('cmd-lines-container');
  const skuOptions = '<option value="">Choisir...</option>' + products.map(p => `<option value="${p.sku}">${p.sku} — ${p.nom.substring(0,35)}</option>`).join('');
  container.innerHTML = cmdLines.map((line, i) => `
    <div class="cmd-line" id="cmd-line-${i}">
      <div class="cmd-line-num">${i+1}</div>
      <select class="cmd-sku filter-select" onchange="onCmdSkuChange(${i},this.value)">${skuOptions.replace(`value="${line.sku||''}"`, `value="${line.sku||''}" selected`)}</select>
      <input type="number" class="cmd-prix search-input" style="width:90px" placeholder="Prix €" value="${line.prix||''}" step="0.01" oninput="onCmdPrixChange(${i},this.value)">
      <input type="number" class="cmd-qte search-input" style="width:60px" placeholder="Qté" value="${line.qte||1}" min="1" oninput="onCmdQteChange(${i},this.value)">
      <span class="cmd-marge text-dim" id="cmd-marge-${i}">—</span>
      ${cmdLines.length > 1 ? `<button class="btn-icon danger" onclick="removeCmdLine(${i})">✕</button>` : '<span style="width:28px"></span>'}
    </div>
  `).join('');
  // Re-select values
  cmdLines.forEach((line, i) => {
    const sel = document.getElementById('cmd-lines-container').querySelectorAll('.cmd-sku')[i];
    if (sel && line.sku) sel.value = line.sku;
    updateCmdLineMarge(i);
  });
}

function onCmdSkuChange(i, sku) {
  cmdLines[i] = cmdLines[i] || {};
  cmdLines[i].sku = sku;
  const p = getProduct(sku);
  const plat = document.getElementById('cmd-plateforme').value;
  if (p) {
    const prix = plat === 'TikTok' ? p.prix_tiktok : plat === 'Site Oudyssia' ? p.prix_site : p.prix_vinted;
    const priceInput = document.getElementById('cmd-lines-container').querySelectorAll('.cmd-prix')[i];
    if (priceInput && !cmdLines[i].prix) priceInput.value = prix || '';
    cmdLines[i].prix = prix || 0;
  }
  cmdLines[i].qte = cmdLines[i].qte || 1;
  updateCmdLineMarge(i);
  updateCmdPreview();
}

function onCmdPrixChange(i, val) {
  cmdLines[i] = cmdLines[i] || {};
  cmdLines[i].prix = parseFloat(val) || 0;
  updateCmdLineMarge(i);
  updateCmdPreview();
}

function onCmdQteChange(i, val) {
  cmdLines[i] = cmdLines[i] || {};
  cmdLines[i].qte = parseInt(val) || 1;
  updateCmdLineMarge(i);
  updateCmdPreview();
}

function updateCmdLineMarge(i) {
  const line = cmdLines[i];
  const el = document.getElementById(`cmd-marge-${i}`);
  if (!el) return;
  if (!line || !line.sku || !line.prix) { el.textContent = '—'; return; }
  const p = getProduct(line.sku);
  if (!p) { el.textContent = '—'; return; }
  const mb = (line.prix - p.achat) * (line.qte || 1);
  el.textContent = fmt(mb);
  el.style.color = mb > 0 ? '#81C784' : '#E57373';
}

function addCmdLine() {
  cmdLines.push({qte:1});
  renderCmdLines();
  updateCmdPreview();
}

function removeCmdLine(i) {
  cmdLines.splice(i, 1);
  renderCmdLines();
  updateCmdPreview();
}

function updateCmdPreview() {
  const plat = document.getElementById('cmd-plateforme').value;
  const pmt = document.getElementById('cmd-paiement').value;
  const totalCA = cmdLines.reduce((s, l) => s + (l.prix||0) * (l.qte||1), 0);
  const totalAchat = cmdLines.reduce((s, l) => { const p = getProduct(l.sku||''); return s + (p ? p.achat * (l.qte||1) : 0); }, 0);
  const totalMB = totalCA - totalAchat;

  let fraisPlat = 0;
  if (plat === 'TikTok') fraisPlat = Math.round(totalCA * 0.09 * 100) / 100;
  else if (plat === 'Site Oudyssia') {
    if (pmt === 'PayPal') fraisPlat = Math.round((totalCA * 0.029 + 0.35) * 100) / 100;
    else fraisPlat = Math.round((totalCA * 0.015 + 0.25) * 100) / 100;
  }

  const fraisLivr = parseFloat(document.getElementById('cmd-livraison')?.value) || 0;
  const margeN = totalMB - fraisPlat - fraisLivr;

  const prev = document.getElementById('cmd-preview');
  if (totalCA > 0) {
    prev.classList.add('show');
    prev.innerHTML = `Total commande: <strong>${fmt(totalCA)}</strong> · ${cmdLines.filter(l=>l.sku).length} article(s) · Frais ${plat}: <strong>${fmt(fraisPlat)}</strong> · Marge nette: <strong style="color:${margeN>0?'#81C784':'#E57373'}">${fmt(margeN)}</strong>`;
  } else {
    prev.classList.remove('show');
  }
}

function saveCmdGroupee(e) {
  e.preventDefault();
  const date = document.getElementById('cmd-date').value;
  const plat = document.getElementById('cmd-plateforme').value;
  const pmt = document.getElementById('cmd-paiement').value;
  const fraisLivr = parseFloat(document.getElementById('cmd-livraison')?.value) || 0;
  const type = document.getElementById('cmd-type').value;

  const validLines = cmdLines.filter(l => l.sku && l.prix > 0);
  if (!date || validLines.length === 0) { showToast('Remplis au moins une ligne ✗'); return; }

  // Numéro de commande auto si multi-produits
  const isGrouped = validLines.length > 1;
  let numCmd = '';
  if (isGrouped) {
    const existingCmds = ventes.map(v => v.num_commande).filter(Boolean);
    const maxNum = existingCmds.reduce((max, cmd) => {
      const n = parseInt(cmd.replace('CMD-', '')) || 0;
      return Math.max(max, n);
    }, 0);
    numCmd = `CMD-${String(maxNum + 1).padStart(3, '0')}`;
  }

  validLines.forEach((line, i) => {
    ventes.push({
      date,
      sku: line.sku,
      plateforme: plat,
      qte: line.qte || 1,
      prix: line.prix,
      moyen_paiement: plat === 'Site Oudyssia' ? pmt : '',
      type,
      num_commande: isGrouped ? numCmd : '',
      frais_livraison_reels: isGrouped && i === 0 ? fraisLivr : 0,
    });
  });

  saveData('ventes', ventes);
  closeModal();
  renderVentes();
  renderDashboard();
  showToast(isGrouped ? `Commande ${numCmd} enregistrée (${validLines.length} articles) ✓` : 'Vente enregistrée ✓');
}

// Modal vente simple (conservé intact)
function onSkuChange() {
  const sku = document.getElementById('v-sku').value;
  const p = getProduct(sku);
  if (!p) return;
  const plat = document.getElementById('v-plateforme').value;
  const prix = plat === 'TikTok' ? p.prix_tiktok : plat === 'Site Oudyssia' ? p.prix_site : p.prix_vinted;
  document.getElementById('v-prix').value = prix || '';
  updateVentePreview();
}

function onPlateformeChange() {
  const plat = document.getElementById('v-plateforme').value;
  document.getElementById('group-paiement').style.display = plat === 'Site Oudyssia' ? 'block' : 'none';
  document.getElementById('group-commande').style.display = plat === 'Site Oudyssia' ? 'block' : 'none';
  document.getElementById('group-livraison-reels').style.display = plat === 'Site Oudyssia' ? 'block' : 'none';
  onSkuChange();
}

function updateVentePreview() {
  const sku = document.getElementById('v-sku').value;
  const prix = parseFloat(document.getElementById('v-prix').value)||0;
  const plat = document.getElementById('v-plateforme').value;
  const paiement = document.getElementById('v-paiement').value;
  const p = getProduct(sku);
  if (!p || !prix) { document.getElementById('vente-preview').classList.remove('show'); return; }
  const margeB = prix - p.achat;
  let fraisP = 0;
  if (plat === 'TikTok') fraisP = Math.round(prix*0.09*100)/100;
  else if (plat === 'Site Oudyssia') { fraisP = paiement === 'PayPal' ? Math.round((prix*0.029+0.35)*100)/100 : Math.round((prix*0.015+0.25)*100)/100; }
  const margeN = margeB - fraisP;
  const prev = document.getElementById('vente-preview');
  prev.classList.add('show');
  prev.innerHTML = `Achat: ${fmt(p.achat)} · Marge brute: <strong>${fmt(margeB)}</strong> (${pct(margeB/prix)}) · Frais: ${fmt(fraisP)} · Marge nette: <strong>${fmt(margeN)}</strong>`;
}

function saveVente(e) {
  e.preventDefault();
  const sku = document.getElementById('v-sku').value;
  const date = document.getElementById('v-date').value;
  const plat = document.getElementById('v-plateforme').value;
  const qte = parseInt(document.getElementById('v-qte').value)||1;
  const prix = parseFloat(document.getElementById('v-prix').value)||0;
  if (!sku || !date || !prix) return;
  ventes.push({ date, sku, plateforme:plat, qte, prix, moyen_paiement:document.getElementById('v-paiement').value, type:document.getElementById('v-type').value, num_commande:document.getElementById('v-commande').value.trim(), frais_livraison_reels:parseFloat(document.getElementById('v-livraison-reels').value)||0 });
  saveData('ventes', ventes);
  closeModal();
  renderVentes();
  renderDashboard();
  showToast('Vente enregistrée ✓');
}

// ══════════════════════════════════════
// 7. ACHATS
// ══════════════════════════════════════

function renderAchats() {
  const search = (document.getElementById('search-achats')?.value||'').toLowerCase();
  const cat = document.getElementById('filter-cat-achat')?.value||'';
  const mois = getCurrentMonth();
  const achatsMois = achats.filter(a => a.date && a.date.startsWith(mois));
  const totalMois = achatsMois.reduce((s,a) => s+a.montant, 0);
  const totalCumul = achats.reduce((s,a) => s+a.montant, 0);
  const bycat = {Parfums:0, Packaging:0, Autres:0};
  achatsMois.forEach(a => { if (bycat[a.categorie] !== undefined) bycat[a.categorie] += a.montant; });
  document.getElementById('kpi-achats').innerHTML = [
    {label:'Total ce mois', value:fmt(totalMois), icon:'📅'},
    {label:'Total cumulé', value:fmt(totalCumul), icon:'📊'},
    {label:'Parfums', value:fmt(bycat.Parfums), icon:'🧴'},
    {label:'Packaging', value:fmt(bycat.Packaging), icon:'📦'},
  ].map(k=>`<div class="kpi-card"><div class="kpi-icon">${k.icon}</div><div class="kpi-label">${k.label}</div><div class="kpi-value">${k.value}</div></div>`).join('');
  const filtered = achats.filter(a => { const ms = !search || (a.description||'').toLowerCase().includes(search); const mc = !cat || a.categorie === cat; return ms && mc; }).map((a,i) => ({a, i})).reverse();
  document.getElementById('tbody-achats').innerHTML = filtered.map(({a,i}) => `<tr>
    <td class="text-dim">${a.date||'—'}</td>
    <td>${a.description||'—'}</td>
    <td><span class="badge ${a.categorie==='Parfums'?'badge-site':a.categorie==='Packaging'?'badge-vinted':'badge-stock-ok'}">${a.categorie}</span></td>
    <td class="${a.montant<0?'text-green':'fw-600'}">${fmt(a.montant)}</td>
    <td><button class="btn-icon danger" onclick="deleteAchat(${achats.indexOf(a)})">✕</button></td>
  </tr>`).join('');
}

function deleteAchat(idx) { if (!confirm('Supprimer cet achat ?')) return; achats.splice(idx, 1); saveData('achats', achats); renderAchats(); showToast('Achat supprimé'); }

function saveAchat(e) {
  e.preventDefault();
  const idx = parseInt(document.getElementById('a-edit-idx').value);
  const data = { date: document.getElementById('a-date').value, description: document.getElementById('a-desc').value.trim(), categorie: document.getElementById('a-cat').value, montant: parseFloat(document.getElementById('a-montant').value)||0 };
  if (idx >= 0) achats[idx] = data; else achats.push(data);
  saveData('achats', achats);
  closeModal();
  renderAchats();
  showToast('Achat enregistré ✓');
}

// ══════════════════════════════════════
// 8. FINANCE
// ══════════════════════════════════════

function renderFinance() {
  const mois = getCurrentMonth();
  const ventesmois = ventes.filter(v => v.date && v.date.startsWith(mois));
  const achatsMois = achats.filter(a => a.date && a.date.startsWith(mois));
  const caTotal = ventesmois.filter(v=>v.type!=='Retour').reduce((s,v)=>s+v.prix*v.qte, 0);
  const caVinted = ventesmois.filter(v=>v.plateforme==='Vinted'&&v.type!=='Retour').reduce((s,v)=>s+v.prix*v.qte,0);
  const caSite = ventesmois.filter(v=>v.plateforme==='Site Oudyssia'&&v.type!=='Retour').reduce((s,v)=>s+v.prix*v.qte,0);
  const caTiktok = ventesmois.filter(v=>v.plateforme==='TikTok'&&v.type!=='Retour').reduce((s,v)=>s+v.prix*v.qte,0);
  const caDirect = ventesmois.filter(v=>v.plateforme==='Direct'&&v.type!=='Retour').reduce((s,v)=>s+v.prix*v.qte,0);
  document.getElementById('finance-ca').innerHTML = `<div class="finance-row main-total"><span class="finance-label">CA Total</span><span class="finance-value big">${fmt(caTotal)}</span></div><div class="finance-row"><span class="finance-label sub">· Vinted</span><span class="finance-value">${fmt(caVinted)}</span></div><div class="finance-row"><span class="finance-label sub">· Site Oudyssia</span><span class="finance-value">${fmt(caSite)}</span></div><div class="finance-row"><span class="finance-label sub">· TikTok</span><span class="finance-value">${fmt(caTiktok)}</span></div><div class="finance-row"><span class="finance-label sub">· Direct</span><span class="finance-value">${fmt(caDirect)}</span></div>`;
  const achatsMoisVal = achatsMois.reduce((s,a)=>s+a.montant,0);
  const achatsCumul = achats.reduce((s,a)=>s+a.montant,0);
  const coutVentes = ventesmois.filter(v=>v.type!=='Retour').reduce((s,v)=>{ const p = getProduct(v.sku); return s + (p?p.achat*v.qte:0); }, 0);
  document.getElementById('finance-achats').innerHTML = `<div class="finance-row main-total"><span class="finance-label">Achats ce mois</span><span class="finance-value big">${fmt(achatsMoisVal)}</span></div><div class="finance-row"><span class="finance-label sub">· Cumulés</span><span class="finance-value">${fmt(achatsCumul)}</span></div><div class="finance-row"><span class="finance-label sub">· Coût des ventes</span><span class="finance-value">${fmt(coutVentes)}</span></div>`;
  const margeB = caTotal - coutVentes;
  const margeBP = caTotal > 0 ? margeB/caTotal : 0;
  document.getElementById('finance-mb').innerHTML = `<div class="finance-row main-total"><span class="finance-label">Marge Brute</span><span class="finance-value big ${margeB>0?'positive':'negative'}">${fmt(margeB)}</span></div><div class="finance-row"><span class="finance-label sub">Taux</span><span class="finance-value">${pct(margeBP)}</span></div>`;
  const fraisComm = ventesmois.map((v,i)=>calcVente(v,ventes.indexOf(v))).filter(Boolean).reduce((s,c)=>s+c.fraisPlat,0);
  const fraisLivr = ventesmois.map((v,i)=>calcVente(v,ventes.indexOf(v))).filter(Boolean).reduce((s,c)=>s+c.fraisLivr,0);
  const totalFrais = fraisComm + fraisLivr;
  document.getElementById('finance-mn').innerHTML = `<div class="finance-row"><span class="finance-label sub">· Frais commissions</span><span class="finance-value">${fmt(fraisComm)}</span></div><div class="finance-row"><span class="finance-label sub">· Frais livraison</span><span class="finance-value">${fmt(fraisLivr)}</span></div><div class="finance-row total"><span class="finance-label">Total frais</span><span class="finance-value">${fmt(totalFrais)}</span></div><div class="finance-row main-total"><span class="finance-label">Marge Nette</span><span class="finance-value big ${margeB-totalFrais>0?'positive':'negative'}">${fmt(margeB-totalFrais)}</span></div>`;
  document.getElementById('finance-charges').innerHTML = `${['pub','packaging','abo','autres'].map((k,i) => { const labels = ['Publicité / Ads','Packaging','Abonnements','Autres']; return `<div class="finance-row"><span class="finance-label sub">${labels[i]}</span><input class="finance-input" type="number" value="${finance.charges[k]||0}" step="0.01" onchange="updateCharge('${k}', this.value)"></div>`; }).join('')}<div class="finance-row total"><span class="finance-label">Total charges</span><span class="finance-value">${fmt(Object.values(finance.charges).reduce((s,v)=>s+v,0))}</span></div>`;
  const totalCharges = Object.values(finance.charges).reduce((s,v)=>s+(parseFloat(v)||0), 0);
  const margeNette = margeB - totalFrais;
  const benefice = margeNette - totalCharges;
  const ecart = benefice - finance.objectif;
  document.getElementById('finance-bn').innerHTML = `<div class="finance-row main-total"><span class="finance-label">Bénéfice Net</span><span class="finance-value big ${benefice>0?'positive':'negative'}">${fmt(benefice)}</span></div><div class="finance-row"><span class="finance-label sub">Taux</span><span class="finance-value">${pct(caTotal>0?benefice/caTotal:0)}</span></div><div class="finance-row"><span class="finance-label sub">Objectif mensuel</span><input class="finance-input" type="number" value="${finance.objectif}" step="1" onchange="updateObjectif(this.value)"></div><div class="finance-row total"><span class="finance-label">Écart vs objectif</span><span class="finance-value ${ecart>=0?'positive':'negative'}">${fmt(ecart)}</span></div>`;
  const plats = ['vinted','tiktok','site','direct'];
  const platLabels = ['Vinted','TikTok','Site Oudyssia','Direct'];
  const platKeys = ['Vinted','TikTok','Site Oudyssia','Direct'];
  document.getElementById('finance-tresorerie').innerHTML = plats.map((k,i) => { const caP = ventes.filter(v=>v.plateforme===platKeys[i]&&v.type!=='Retour').reduce((s,v)=>s+v.prix*v.qte,0); const solde = caP - (finance.tresorerie[k]||0); return `<div class="finance-row"><span class="finance-label sub">${platLabels[i]} virement</span><input class="finance-input" type="number" value="${finance.tresorerie[k]||0}" step="0.01" onchange="updateTresorerie('${k}', this.value)"></div><div class="finance-row" style="padding:4px 18px"><span class="finance-label" style="font-size:10px;padding-left:20px">→ Solde ${platLabels[i]}</span><span class="finance-value" style="font-size:11px;color:${solde>0?'#81C784':'#E57373'}">${fmt(solde)}</span></div>`; }).join('') + `<div class="finance-row total"><span class="finance-label">Total à encaisser</span><span class="finance-value positive">${fmt(plats.reduce((s,k,i) => { const caP = ventes.filter(v=>v.plateforme===platKeys[i]&&v.type!=='Retour').reduce((a,v)=>a+v.prix*v.qte,0); return s + caP - (finance.tresorerie[k]||0); }, 0))}</span></div>`;
  const ctx = document.getElementById('chart-plateformes-finance');
  if (charts.finplat) charts.finplat.destroy();
  charts.finplat = new Chart(ctx, { type: 'bar', data: { labels: ['Vinted','Site','TikTok','Direct'], datasets: [{label:'CA',data:[caVinted,caSite,caTiktok,caDirect],backgroundColor:'rgba(200,169,81,0.5)',borderColor:'#C8A951',borderWidth:1,borderRadius:4}] }, options: chartOptions('€') });
}

function updateCharge(key, val) { finance.charges[key] = parseFloat(val)||0; saveData('finance', finance); renderFinance(); }
function updateObjectif(val) { finance.objectif = parseFloat(val)||0; saveData('finance', finance); renderFinance(); }
function updateTresorerie(key, val) { finance.tresorerie[key] = parseFloat(val)||0; saveData('finance', finance); renderFinance(); }

// ══════════════════════════════════════
// 9. RÉASSORTS — SYSTÈME INTELLIGENT v2
// Scoring séparé : business vs urgence stock
// ══════════════════════════════════════

let reassortFilter = 'all';


function calcReassortScore(sku) {
  const p = getProduct(sku);
  if (!p) return null;

  const stock = Math.max(0, getStockActuel(sku));
  const allSales = ventes.filter(v => v.sku === sku && v.type === 'Vente');
  const totalQty = allSales.reduce((s, v) => s + (v.qte || 1), 0);

  const today = new Date(); today.setHours(0,0,0,0);
  const saleDates = allSales
    .map(v => { try { return new Date(v.date + 'T12:00:00'); } catch(e) { return null; } })
    .filter(Boolean)
    .sort((a,b) => a - b);

  const firstSale = saleDates[0] || null;
  const lastSale = saleDates[saleDates.length - 1] || null;
  const daysSinceFirst = firstSale ? Math.max(1, Math.round((today - firstSale) / 86400000) + 1) : 60;
  const daysSinceLast = lastSale ? Math.round((today - lastSale) / 86400000) : 999;

  const rec = getSuggestedReorderForSku(sku);
  const velocity = rec.weightedUnits / 30; // weighted monthly demand converted to daily velocity
  const daysPerUnit = velocity > 0 ? Math.max(1, Math.round(1 / velocity)) : 999;
  const coverageDays = rec.coverageDays;

  let totalProfit = 0;
  allSales.forEach(v => { const c = calcVente(v, ventes.indexOf(v)); if (c) totalProfit += c.margeB; });

  const avgPrice = getSellingPriceReference(p);
  const unitMargin = avgPrice > 0 ? (avgPrice - (p.achat || 0)) / avgPrice : 0;
  const unitProfit = avgPrice > 0 ? avgPrice - (p.achat || 0) : 0;
  const cashSpeed = velocity > 0 ? velocity * unitProfit : 0;

  const businessScore =
    Math.min(18, rec.weightedUnits * 6) +
    Math.min(14, rec.recentQty * 3) +
    Math.min(14, cashSpeed * 2.5) +
    Math.min(10, Math.max(0, unitMargin) * 20) +
    Math.min(8, Math.max(0, unitProfit) / 3) +
    (rec.confidence === 'HIGH' ? 6 : rec.confidence === 'MEDIUM' ? 3 : 0);

  let stockUrgency = 0;
  if (totalQty > 0) {
    if (stock === 0) stockUrgency = 30;
    else if (coverageDays < 7) stockUrgency = 18;
    else if (coverageDays < 14) stockUrgency = 8;
    else if (stock <= 3) stockUrgency = 2;
  }

  let stockAgePenalty = 0;
  if (stock > 0 && daysSinceLast > 45) stockAgePenalty = -8;
  else if (stock > 0 && daysSinceLast > 21 && rec.recentQty === 0) stockAgePenalty = -4;

  const totalScore = Math.max(0, Math.min(100, Math.round((businessScore + stockUrgency + stockAgePenalty) * 10) / 10));

  let priority, priorityCls, reason;
  if (totalQty === 0) {
    if (stock === 0) {
      priority = 'NON ACTIF'; priorityCls = 'prio-low'; reason = 'Jamais vendu · Pas de stock';
    } else if (stock >= 3) {
      priority = 'LIQUIDER'; priorityCls = 'prio-liquidate'; reason = 'Jamais vendu · Stock immobilisé';
    } else {
      priority = 'TEST'; priorityCls = 'prio-test'; reason = 'Jamais vendu · Tester le produit';
    }
  } else if (stock > 0 && daysSinceLast > 45 && rec.recentQty === 0) {
    priority = 'LIQUIDER'; priorityCls = 'prio-liquidate'; reason = `Dernière vente ${daysSinceLast}j · Stock lent`;
  } else {
    if      (totalScore >= 60) { priority='URGENT';  priorityCls='prio-urgent'; }
    else if (totalScore >= 38) { priority='HAUTE';   priorityCls='prio-high'; }
    else if (totalScore >= 20) { priority='NORMALE'; priorityCls='prio-normal'; }
    else                       { priority='FAIBLE';  priorityCls='prio-low'; }

    const reasons = [];
    if (stock === 0) reasons.push('Rupture');
    if (rec.recentQty > 0) reasons.push(`${rec.recentQty} vente(s)/30j`);
    if (coverageDays < 999) reasons.push(`couverture ${Math.round(coverageDays)}j`);
    if (rec.confidence === 'HIGH') reasons.push('signal fort');
    else if (rec.confidence === 'MEDIUM') reasons.push('signal moyen');
    if ((p.achat || 0) > 30) reasons.push('achat élevé');
    reason = reasons.slice(0,3).join(' · ') || 'Performance standard';
  }

  const canRestock = totalQty > 0 && priority !== 'LIQUIDER' && priority !== 'NON ACTIF';

  return {
    sku, nom:p.nom, marque:p.marque, achat:p.achat,
    stock, totalQty, totalProfit,
    velocity, daysPerUnit, cashSpeed,
    unitMargin, unitProfit, avgPrice,
    recentQty: rec.recentQty, daysSinceLast, daysSinceFirst,
    businessScore: Math.round(businessScore * 10) / 10,
    stockUrgency,
    score: totalScore,
    priority, priorityCls, reason,
    canRestock,
    hasNeverSold: totalQty === 0,
    coverageDays,
    confidence: rec.confidence,
    suggestedQty: rec.qty,
    weightedUnits: rec.weightedUnits,
    marchUnits: rec.marchUnits,
    aprilUnits: rec.aprilUnits,
  };
}


// ══════════════════════════════════════
// DECISION ENGINE
// Priorité : Stop > Order > Lower > Boost > Test > Stable
// S'appuie uniquement sur les données déjà calculées dans calcReassortScore
// ══════════════════════════════════════

// ══════════════════════════════════════════════════════════════
// DECISION ENGINE — Level 4.5 (corrected)
// Hierarchy: Survival > Profit > Optimization > Cleanup
// ══════════════════════════════════════════════════════════════


function calcDecision(s) {
  const total = s.totalQty || 0;
  const stock = s.stock;
  const r30 = s.recentQty || 0;
  const dpu = s.daysPerUnit;
  const dsl = s.daysSinceLast;
  const margin = s.unitMargin || 0;
  const marginPct = (margin * 100).toFixed(0);
  const velLabel = dpu < 999 ? `1/${dpu}j` : null;
  const daysLeft = s.coverageDays < 999 ? Math.round(s.coverageDays) : 999;
  const qty = Math.max(0, s.suggestedQty || 0);

  // 1. Stop / liquidate
  if (total === 0) {
    if (stock === 0) return { decision:'⚪ Stable', decisionReason:'Jamais vendu · pas de stock', decisionCls:'dec-stable' };
    if (stock >= 3) return { decision:'🔴 Arrêter le produit', decisionReason:'Jamais vendu · capital immobilisé', decisionCls:'dec-stop' };
    return { decision:'🟣 Tester encore', decisionReason:'Jamais vendu · tester le prix', decisionCls:'dec-test' };
  }

  if (r30 === 0 && stock >= 2 && dsl > 30 && s.score <= 40) {
    return {
      decision:'🔴 Arrêter le produit',
      decisionReason:`Aucune vente récente · dernière vente ${dsl}j`,
      decisionCls:'dec-stop',
    };
  }

  // 2. Order when there is real signal + stock risk
  if (stock === 0 && qty > 0) {
    return {
      decision:`🟢 Commander ${qty} unité${qty > 1 ? 's' : ''}`,
      decisionReason: qty <= 2
        ? `Rupture · ${s.confidence === 'LOW' ? 'signal prudent' : 'signal à confirmer'}`
        : `Rupture · ${r30} vente(s)/30j · ${velLabel || 'signal fort'}`,
      decisionCls:'dec-order',
    };
  }

  if (stock > 0 && daysLeft <= 7 && qty > 0) {
    return {
      decision:`🟢 Commander ${qty} unité${qty > 1 ? 's' : ''}`,
      decisionReason:`Stock pour ~${daysLeft}j · ${velLabel || 'rotation active'} · anticiper`,
      decisionCls:'dec-order',
    };
  }

  // 3. Test if weak signal
  if (stock === 0 && total <= 2 && r30 <= 1) {
    return {
      decision:'🟣 Tester encore',
      decisionReason:`Signal faible · ${total} vente(s) au total`,
      decisionCls:'dec-test',
    };
  }

  // 4. Lower price if blocked stock and margin allows
  if (stock >= 3 && r30 <= 1 && margin >= 0.40) {
    return {
      decision:'🟡 Baisser le prix',
      decisionReason:`Stock élevé (${stock}) · marge ${marginPct}% permet une remise`,
      decisionCls:'dec-lower',
    };
  }

  // 5. Boost proven strong profitable products
  if (total >= 6 && r30 >= 3 && margin >= 0.45 && stock >= 3) {
    return {
      decision:'🔵 Booster le produit',
      decisionReason:`Historique solide · ${r30} vente(s)/30j · marge ${marginPct}%`,
      decisionCls:'dec-boost',
    };
  }

  // 6. Stable default when coverage is comfortable
  const stableNote = stock > 0
    ? (daysLeft < 999 ? `stock pour ~${daysLeft}j · ${total} vente(s)` : `${stock} en stock · ${total} vente(s)`)
    : `${total} vente(s) · à surveiller`;
  return {
    decision:'⚪ Stable',
    decisionReason: stableNote,
    decisionCls:'dec-stable',
  };
}


function setReassortFilter(f) { reassortFilter = f; renderReassorts(); }

function renderReassorts() {
  const scores = products
    .filter(p => p.dispo_vinted==='Oui' || p.dispo_site==='Oui' || (p.prix_tiktok||0)>0)
    .map(p => calcReassortScore(p.sku))
    .filter(Boolean)
    .sort((a, b) => {
      const o = { URGENT:0, HAUTE:1, NORMALE:2, FAIBLE:3, TEST:4, LIQUIDER:5, 'NON ACTIF':6 };
      const d = (o[a.priority]??7) - (o[b.priority]??7);
      return d !== 0 ? d : b.score - a.score;
    });

  const urgentCount  = scores.filter(s => s.priority==='URGENT').length;
  const highCount    = scores.filter(s => s.priority==='HAUTE').length;
  const liquidCount  = scores.filter(s => s.priority==='LIQUIDER').length;
  const testCount    = scores.filter(s => s.priority==='TEST').length;
  const outOfStock   = scores.filter(s => s.stock===0 && s.totalQty>0).length;
  const neverSold    = scores.filter(s => s.hasNeverSold).length;

  document.getElementById('reassort-count').textContent = `${urgentCount} urgent · ${highCount} haute`;

  const filterBar = document.getElementById('reassort-filter-bar');
  if (filterBar) filterBar.innerHTML = `
    <button class="reassort-filter-btn ${reassortFilter==='all'?'active':''}" onclick="setReassortFilter('all')">Tous (${scores.length})</button>
    <button class="reassort-filter-btn urgent ${reassortFilter==='urgent'?'active':''}" onclick="setReassortFilter('urgent')">🔴 Urgent (${urgentCount})</button>
    <button class="reassort-filter-btn high ${reassortFilter==='high'?'active':''}" onclick="setReassortFilter('high')">🟠 Haute (${highCount})</button>
    <button class="reassort-filter-btn liq ${reassortFilter==='liquidate'?'active':''}" onclick="setReassortFilter('liquidate')">🔵 Liquider (${liquidCount})</button>
    <button class="reassort-filter-btn test ${reassortFilter==='test'?'active':''}" onclick="setReassortFilter('test')">⚗️ Test (${testCount})</button>
    <div class="reassort-kpi-mini">
      <span>Ruptures actives: <strong class="text-red">${outOfStock}</strong></span>
      <span>Jamais vendus: <strong>${neverSold}</strong></span>
    </div>`;

  let displayed = scores;
  if (reassortFilter==='urgent')   displayed = scores.filter(s => s.priority==='URGENT');
  if (reassortFilter==='high')     displayed = scores.filter(s => s.priority==='HAUTE');
  if (reassortFilter==='liquidate') displayed = scores.filter(s => s.priority==='LIQUIDER');
  if (reassortFilter==='test')     displayed = scores.filter(s => s.priority==='TEST' || s.priority==='NON ACTIF');

  const tbody = document.getElementById('tbody-reassorts');
  if (!displayed.length) {
    tbody.innerHTML = '<tr><td colspan="13" class="no-data">✅ Aucun produit dans cette catégorie</td></tr>';
    return;
  }

  tbody.innerHTML = displayed.map(s => {
    // ── Velocity: always "1 vente / Xj" format for readability ──
    let velStr;
    if (s.totalQty === 0)         velStr = '<span class="text-dim">—</span>';
    else if (s.daysPerUnit <= 1)  velStr = '<span class="text-green">chaque jour</span>';
    else if (s.daysPerUnit <= 7)  velStr = `<span class="text-green">1/${s.daysPerUnit}j</span>`;
    else if (s.daysPerUnit <= 21) velStr = `<span style="color:var(--gold)">1/${s.daysPerUnit}j</span>`;
    else                          velStr = `<span class="text-dim">1/${s.daysPerUnit}j</span>`;

    // ── Cash speed ──
    const cashStr = s.cashSpeed > 0
      ? `<span class="${s.cashSpeed>=1?'text-green':''}">${s.cashSpeed.toFixed(1)}€/j</span>`
      : '<span class="text-dim">—</span>';

    // ── Last sale ──
    const lastStr = s.daysSinceLast < 999
      ? (s.daysSinceLast === 0 ? '<span class="text-green">Auj.</span>'
        : s.daysSinceLast <= 7  ? `<span class="text-green">${s.daysSinceLast}j</span>`
        : s.daysSinceLast <= 21 ? `<span style="color:var(--gold)">${s.daysSinceLast}j</span>`
        : `<span class="text-dim">${s.daysSinceLast}j</span>`)
      : '<span class="text-dim">—</span>';

    // ── Score bar (business only, not inflated by urgency) ──
    const barW = Math.min(100, Math.round(s.businessScore / 0.7));

    const idx = products.indexOf(getProduct(s.sku));

    const dec = calcDecision(s);

    return `<tr class="reassort-row">
      <td style="padding:8px 12px">
        <div class="reassort-score-wrap">
          <span class="reassort-score-num ${s.priorityCls}-text">${s.score}</span>
          <div class="reassort-score-bar-bg">
            <div class="reassort-score-bar ${s.priorityCls}" style="width:${barW}%"></div>
          </div>
        </div>
      </td>
      <td class="text-gold fw-600">${s.sku}</td>
      <td style="max-width:145px;white-space:normal;font-size:11px;line-height:1.3">${s.nom}</td>
      <td class="fw-600 ${s.stock===0?'text-red':s.stock<=1?'text-gold':'text-green'}">${s.stock}</td>
      <td class="text-dim">${s.totalQty > 0 ? s.totalQty : '—'}</td>
      <td>${velStr}</td>
      <td>${cashStr}</td>
      <td class="text-dim">${s.avgPrice > 0 ? (s.unitMargin*100).toFixed(0)+'%' : '—'}</td>
      <td>${lastStr}</td>
      <td><span class="badge reassort-priority-badge ${s.priorityCls}">${s.priority}</span></td>
      <td style="white-space:nowrap"><span class="dec-badge ${dec.decisionCls}">${dec.decision}</span></td>
      <td style="font-size:11px;white-space:normal;max-width:150px;color:var(--text-muted);line-height:1.4">${dec.decisionReason}</td>
      <td>${s.canRestock ? `<button class="btn-icon" onclick="addReassort(${idx})" title="Ajouter stock">+</button>` : ''}</td>
    </tr>`;
  }).join('');
}

// ══════════════════════════════════════
// 10. NAVIGATION
// ══════════════════════════════════════

const pageTitles = { dashboard:'Dashboard', produits:'Produits', ventes:'Ventes', achats:'Achats', finance:'Finance', reassorts:'Réassorts' };
const pageRenderers = { dashboard:renderDashboard, produits:renderProduits, ventes:renderVentes, achats:renderAchats, finance:renderFinance, reassorts:renderReassorts };

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const page = item.dataset.page;
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    item.classList.add('active');
    document.getElementById('page-' + page).classList.add('active');
    document.getElementById('page-title').textContent = pageTitles[page] || page;
    if (pageRenderers[page]) pageRenderers[page]();
    if (window.innerWidth <= 900) document.getElementById('sidebar').classList.remove('open');
  });
});

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }

// ══════════════════════════════════════
// 11. MODALS
// ══════════════════════════════════════

function openModal(type) {
  document.getElementById('modal-overlay').classList.add('open');
  if (type === 'vente') {
    document.getElementById('v-sku').innerHTML = '<option value="">Choisir un parfum...</option>' + products.map(p => `<option value="${p.sku}">${p.sku} — ${p.nom.substring(0,40)}</option>`).join('');
    document.getElementById('v-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('v-commande').value = '';
    document.getElementById('v-livraison-reels').value = '';
    ['group-paiement','group-commande','group-livraison-reels'].forEach(id => document.getElementById(id).style.display = 'none');
    document.getElementById('vente-preview').classList.remove('show');
    document.getElementById('modal-vente').classList.add('open');
  } else if (type === 'produit') {
    if (document.getElementById('p-edit-idx').value === '-1') { document.getElementById('form-produit').reset(); document.getElementById('modal-produit-title').textContent = 'Nouveau produit'; }
    document.getElementById('modal-produit').classList.add('open');
  } else if (type === 'achat') {
    document.getElementById('form-achat').reset();
    document.getElementById('a-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('a-edit-idx').value = '-1';
    document.getElementById('modal-achat').classList.add('open');
  }
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
  document.getElementById('p-edit-idx').value = '-1';
  cmdLines = [];
}

document.getElementById('v-prix').addEventListener('input', updateVentePreview);
document.getElementById('v-paiement').addEventListener('change', updateVentePreview);

// ══════════════════════════════════════
// 12. UTILS
// ══════════════════════════════════════

function fmt(val) {
  if (val === null || val === undefined || isNaN(val)) return '—';
  return new Intl.NumberFormat('fr-FR', {style:'currency', currency:'EUR', minimumFractionDigits:2}).format(val);
}
function pct(val) { if (val === null || val === undefined || isNaN(val)) return '—'; return (val*100).toFixed(1) + '%'; }
function formatMonth(m) { if (!m) return ''; const [y, mo] = m.split('-'); return ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'][parseInt(mo)-1] + ' ' + y; }

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

function updateDate() {
  const now = new Date();
  const days = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
  const months = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  document.getElementById('topbar-date').textContent = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

// ══════════════════════════════════════
// 13. INIT
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (loginForm && auth) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;
      const err = document.getElementById('auth-error');
      if (err) err.textContent = '';
      try { await auth.signInWithEmailAndPassword(email, password); }
      catch (error) { showAuthShell(humanizeAuthError(error.code, error.message)); }
    });

    auth.onAuthStateChanged((user) => {
      if (user) {
        showAppShell();
        updateDate();
        buildDashboardMonthSelect();
        renderDashboard();
        startCloudSync();
      } else {
        showAuthShell('');
      }
    });
  } else {
    showAppShell();
    updateDate();
    buildDashboardMonthSelect();
    renderDashboard();
    startCloudSync();
  }
});

function signOutERP() { if (auth) auth.signOut(); }
