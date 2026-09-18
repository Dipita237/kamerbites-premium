import Image from "next/image";
import { galleryImages } from "@/data/gallery";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie | KamerBites",
  description: "Découvrez en images l'ambiance et les plats de KamerBites.",
};

export default function GaleriePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Galerie
        </h1>

        <p className="mt-4 text-base text-charcoal/70 sm:text-lg">
          Plats, ambiance, moments partagés — un aperçu de l&apos;expérience
          KamerBites.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg bg-charcoal/5"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>    </section>
  );
}