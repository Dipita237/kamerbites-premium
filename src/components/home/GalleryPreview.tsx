import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data/gallery";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-copper">
            GALERIE
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Instants de KamerBites
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {preview.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg bg-charcoal/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/galerie"
            className="text-sm font-medium text-copper hover:underline"
          >
            Voir toute la galerie →
          </Link>
        </div>
      </div>
    </section>
  );
}