const values = [
  {
    title: "Ingrédients locaux",
    description:
      "Nous travaillons avec des producteurs locaux pour des produits frais et de saison.",
  },
  {
    title: "Saveurs du monde",
    description:
      "Un menu qui marie la cuisine camerounaise et des classiques internationaux.",
  },
  {
    title: "Accueil chaleureux",
    description:
      "Un service attentionné pensé pour que chacun se sente chez soi.",
  },
  {
    title: "Au cœur de Bastos",
    description:
      "Une adresse élégante, facilement accessible, au cœur de Yaoundé.",
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Histoire | KamerBites",
  description:
    "Découvrez l'histoire de KamerBites, restaurant premium à Bastos, Yaoundé.",
};


export default function NotreHistoirePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-center text-4xl font-semibold sm:text-5xl">
        Notre Histoire
      </h1>

      <div className="mt-6 space-y-4 text-base text-charcoal/70 sm:text-lg">
        <p>
          KamerBites est né d&apos;une conviction simple : la table est le
          meilleur endroit pour rassembler les cultures. Installé à Bastos,
          au cœur de Yaoundé, notre restaurant célèbre la richesse de la
          cuisine camerounaise tout en accueillant les saveurs du monde
          entier.
        </p>
        <p>
          Chaque plat est préparé avec des ingrédients locaux et de saison,
          dans le respect des traditions culinaires camerounaises, tout en
          laissant une place à la créativité et à l&apos;ouverture sur
          d&apos;autres cuisines.
        </p>
        <p>
          Que vous veniez pour un petit-déjeuner, un déjeuner d&apos;affaires
          ou un dîner entre amis, notre équipe met un point d&apos;honneur à
          vous offrir une expérience chaleureuse, élégante et sans
          frontières.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-lg border border-charcoal/10 p-5"
          >
            <h2 className="font-semibold text-copper">{value.title}</h2>
            <p className="mt-2 text-sm text-charcoal/70">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}