export type GalleryCategory = "Plats" | "Ambiance";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "ambiance-1",
    src: "/images/gallery/interieur-1.jpg",
    alt: "Intérieur chaleureux du restaurant KamerBites",
    category: "Ambiance",
  },
  {
    id: "ambiance-2",
    src: "/images/gallery/interieur-2.jpg",
    alt: "Ambiance du restaurant KamerBites",
    category: "Ambiance",
  },
  {
    id: "plat-ndole",
    src: "/images/menu/ndole.jpg",
    alt: "Ndolé, plat signature de KamerBites",
    category: "Plats",
  },
  {
    id: "plat-poulet-dg",
    src: "/images/menu/poulet-dg.jpg",
    alt: "Poulet DG servi chez KamerBites",
    category: "Plats",
  },
  {
    id: "plat-eru",
    src: "/images/menu/eru.jpg",
    alt: "Eru traditionnel camerounais",
    category: "Plats",
  },
  {
    id: "plat-steak",
    src: "/images/menu/steak-grille.jpg",
    alt: "Steak grillé, une touche internationale",
    category: "Plats",
  },
  {
    id: "plat-crevettes",
    src: "/images/menu/crevettes-grillees.jpg",
    alt: "Crevettes grillées au beurre à l'ail",
    category: "Plats",
  },
  {
    id: "boisson-mojito",
    src: "/images/menu/mojito-fraise.jpg",
    alt: "Mojito fraise servi au bar",
    category: "Plats",
  },
  {
    id: "boisson-bissap",
    src: "/images/menu/jus-de-bissap.jpg",
    alt: "Jus de bissap frais",
    category: "Plats",
  },
  {
    id: "dessert-beignets",
    src: "/images/menu/beignets-sucres.jpg",
    alt: "Beignets sucrés faits maison",
    category: "Plats",
  },
];