export type DietaryTag = "vegetarien" | "sans-gluten" | "epice" | "halal";

export type MenuCategory =
  | "Petit-déjeuner"
  | "Entrées"
  | "Plats principaux"
  | "Desserts"
  | "Boissons";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  dietary: DietaryTag[];
  image?: string;
};

export const dietaryLabels: Record<DietaryTag, string> = {
  vegetarien: "Végétarien",
  "sans-gluten": "Sans gluten",
  epice: "Épicé",
  halal: "Halal",
};

export const menuItems: MenuItem[] = [
  // Petit-déjeuner
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description: "Pain grillé, avocat écrasé, citron, graines de sésame.",
    price: 4000,
    category: "Petit-déjeuner",
    dietary: ["vegetarien"],
    image: "/images/menu/avocado-toast.jpg",
  },
  {
    id: "oeufs-viande-chou",
    name: "Œufs, Viande & Chou",
    description: "Œufs brouillés, viande sautée, chou local, pain frais.",
    price: 4500,
    category: "Petit-déjeuner",
    dietary: [],
    image: "/images/menu/oeufs-viande-chou.jpg",
  },
  {
    id: "bol-mangue-cremeux",
    name: "Bol de Mangue Crémeux",
    description: "Mangue fraîche, crème légère, granola maison.",
    price: 3000,
    category: "Petit-déjeuner",
    dietary: ["vegetarien"],
    image: "/images/menu/bol-mangue-cremeux.jpg",
  },
  // Entrées
  {
    id: "soupe-pistache",
    name: "Soupe Pistache",
    description: "Soupe onctueuse à base de graines de courge, légumes de saison.",
    price: 4500,
    category: "Entrées",
    dietary: ["vegetarien"],
  },
  {
    id: "ailes-de-poulet-epicees",
    name: "Ailes de Poulet Épicées",
    description: "Ailes de poulet marinées et grillées, sauce pimentée maison.",
    price: 4000,
    category: "Entrées",
    dietary: ["halal", "epice"],
    image: "/images/menu/ailes-de-poulet-epicees.jpg",
  },
  {
    id: "salade-avocat-crevettes",
    name: "Salade Avocat-Crevettes",
    description: "Avocat frais, crevettes, vinaigrette citronnée.",
    price: 5500,
    category: "Entrées",
    dietary: ["sans-gluten"],
  },
  {
    id: "beignets-haricots",
    name: "Beignets Haricots",
    description: "Beignets de haricots frits, servis chauds avec une sauce pimentée.",
    price: 3500,
    category: "Entrées",
    dietary: ["vegetarien", "epice"],
    image: "/images/menu/beignets-haricots.jpg",
  },
  // Plats principaux
  {
    id: "ndole",
    name: "Ndolé",
    description: "Feuilles de ndolé, arachides, bœuf, plantain.",
    price: 12000,
    category: "Plats principaux",
    dietary: ["epice"],
    image: "/images/menu/ndole.jpg",
  },
  {
    id: "poulet-dg",
    name: "Poulet DG",
    description: "Poulet mijoté avec légumes et épices locales.",
    price: 10000,
    category: "Plats principaux",
    dietary: ["halal", "epice"],
    image: "/images/menu/poulet-dg.jpg",
  },
  {
    id: "eru",
    name: "Eru",
    description: "Feuilles de macabo, crevettes, poisson fumé.",
    price: 11500,
    category: "Plats principaux",
    dietary: ["sans-gluten"],
    image: "/images/menu/eru.jpg",
  },
  {
    id: "poisson-braise",
    name: "Poisson Braisé",
    description: "Poisson entier grillé au feu de bois, sauce pimentée.",
    price: 9500,
    category: "Plats principaux",
    dietary: ["sans-gluten"],
    image: "/images/menu/poisson-braise.jpg",
  },
  {
    id: "koki-de-mais",
    name: "Koki de Maïs",
    description: "Gâteau de maïs vapeur aux épices douces.",
    price: 8000,
    category: "Plats principaux",
    dietary: ["vegetarien", "sans-gluten"],
    image: "/images/menu/koki-de-mais.jpg",
  },
  {
    id: "riz-gras",
    name: "Riz Gras",
    description: "Riz parfumé, viande, légumes de saison.",
    price: 9000,
    category: "Plats principaux",
    dietary: ["sans-gluten"],
    image: "/images/menu/riz-gras.jpg",
  },
  {
    id: "soupe-de-gombo",
    name: "Soupe de Gombo",
    description: "Gombo mijoté, viande ou poisson au choix.",
    price: 9500,
    category: "Plats principaux",
    dietary: ["epice"],
  },
  {
    id: "steak-grille",
    name: "Steak Grillé",
    description: "Steak de bœuf grillé, sauce au poivre, légumes rôtis.",
    price: 13000,
    category: "Plats principaux",
    dietary: ["sans-gluten"],
    image: "/images/menu/steak-grille.jpg",
  },
  {
    id: "crevettes-grillees",
    name: "Crevettes Grillées",
    description: "Crevettes grillées, beurre à l'ail, herbes fraîches.",
    price: 11000,
    category: "Plats principaux",
    dietary: ["sans-gluten"],
    image: "/images/menu/crevettes-grillees.jpg",
  },
  // Desserts
  {
    id: "beignets-sucres",
    name: "Beignets Sucrés",
    description: "Beignets moelleux servis tièdes, saupoudrés de sucre.",
    price: 3000,
    category: "Desserts",
    dietary: ["vegetarien"],
    image: "/images/menu/beignets-sucres.jpg",
  },
  {
    id: "salade-fruits-tropicaux",
    name: "Salade de Fruits Tropicaux",
    description: "Ananas, mangue, papaye de saison.",
    price: 3500,
    category: "Desserts",
    dietary: ["vegetarien", "sans-gluten"],
    image: "/images/menu/salade-fruits-tropicaux.jpg",
  },
  // Boissons
  {
    id: "jus-de-bissap",
    name: "Jus de Bissap",
    description: "Infusion d'hibiscus, fraîche et naturelle.",
    price: 2500,
    category: "Boissons",
    dietary: ["vegetarien", "sans-gluten"],
    image: "/images/menu/jus-de-bissap.jpg",
  },
  {
    id: "jus-de-gingembre",
    name: "Jus de Gingembre",
    description: "Jus de gingembre frais, légèrement pimenté et rafraîchissant.",
    price: 2500,
    category: "Boissons",
    dietary: ["vegetarien", "sans-gluten"],
    image: "/images/menu/jus-de-gingembre.jpg",
  },
  {
    id: "eau-minerale",
    name: "Eau Minérale",
    description: "Bouteille d'eau minérale, 50cl.",
    price: 1000,
    category: "Boissons",
    dietary: ["vegetarien", "sans-gluten"],
    image: "/images/menu/eau-minerale.jpg",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    description: "Thé matcha, lait mousseux, léger et onctueux.",
    price: 3000,
    category: "Boissons",
    dietary: ["vegetarien"],
    image: "/images/menu/matcha-latte.jpg",
  },
  {
    id: "bloody-mary",
    name: "Bloody Mary",
    description: "Vodka, jus de tomate, épices, une touche de piquant.",
    price: 4500,
    category: "Boissons",
    dietary: [],
    image: "/images/menu/bloody-mary.jpg",
  },
  {
    id: "mojito-fraise",
    name: "Mojito Fraise",
    description: "Rhum, fraises fraîches, menthe, citron vert.",
    price: 4000,
    category: "Boissons",
    dietary: [],
    image: "/images/menu/mojito-fraise.jpg",
  },
  {
    id: "mojito-bleu",
    name: "Mojito Bleu",
    description: "Rhum, curaçao bleu, menthe, citron vert.",
    price: 4500,
    category: "Boissons",
    dietary: [],
    image: "/images/menu/mojito-bleu.jpg",
  },
];