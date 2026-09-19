export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "marie-d",
    name: "Marie D.",
    location: "Yaoundé",
    quote:
      "Le Ndolé m'a rappelé les repas du dimanche à la maison, mais la présentation était juste incroyable. Un vrai voyage !",
    rating: 5,
  },
  {
    id: "samuel-t",
    name: "Samuel T.",
    location: "Yaoundé",
    quote:
      "Ambiance chaleureuse, service attentionné et plats savoureux. Je recommande à 100%.",
    rating: 5,
  },
  {
    id: "alicia-b",
    name: "Alicia B.",
    location: "Yaoundé",
    quote:
      "Le Poulet DG est une tuerie. On sent vraiment la qualité des ingrédients et le savoir-faire du chef.",
    rating: 5,
  },
];