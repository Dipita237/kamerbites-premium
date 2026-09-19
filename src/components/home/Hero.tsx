import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-150 overflow-hidden sm:min-h-162.5">
      
      {/* Background image */}
      <Image
        src="/images/gallery/interieur-2.jpg"
        alt="Poulet DG grillé, plat signature de KamerBites"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-black/20" />

      {/* Slight overall darkening */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-150 max-w-7xl items-center px-6 py-20 sm:min-h-162.5 sm:px-8 lg:px-10">
        
        <div className="max-w-2xl">
          
          {/* Small heading */}
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-copper sm:text-sm">
            AUTHENTIQUE CUISINE CAMEROUNAISE • YAOUNDÉ
          </p>

          {/* Main heading */}
          <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Le goût du Cameroun,
            <span className="block text-copper">
              réinventé.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-7 text-cream/80 sm:text-lg">
            Des saveurs authentiques, des ingrédients locaux, une expérience
            culinaire moderne à Bastos, Yaoundé.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center rounded-md bg-copper px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-copper-dark"
            >
              Réserver une table
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-medium text-cream transition hover:text-copper"
            >
              Découvrir le menu
              <span className="ml-2">→</span>
            </Link>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-cream/30 text-cream/70">
        ↓
      </div>
    </section>
  );
}