import Image from "next/image";
import Link from "next/link";

export default function StoryTeaser() {
  return (
    <section className="bg-charcoal/2 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div className="relative aspect-4/3 overflow-hidden rounded-lg">
          <Image
            src="/images/gallery/interieur-1.jpg"
            alt="Intérieur chaleureux du restaurant KamerBites"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-copper">
            NOTRE HISTOIRE
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Plus qu&apos;un repas. C&apos;est le Cameroun.
          </h2>
          <p className="mt-4 max-w-md text-base text-charcoal/70">
            KamerBites, c&apos;est la rencontre entre la tradition culinaire
            camerounaise et une vision moderne et ouverte sur le monde.
          </p>
          <Link
            href="/notre-histoire"
            className="mt-6 inline-block text-sm font-medium text-copper hover:underline"
          >
            Notre histoire →
          </Link>
        </div>
      </div>
    </section>
  );
}