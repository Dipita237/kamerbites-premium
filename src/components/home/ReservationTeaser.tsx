import Link from "next/link";

export default function ReservationTeaser() {
  return (
    <section className="bg-charcoal py-16 text-cream">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-copper">
          RÉSERVATIONS
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Quand venez-vous nous rejoindre ?
        </h2>
        <p className="mt-4 text-base text-cream/70">
          Réservez votre table en quelques clics, du petit-déjeuner au dîner.
        </p>
        <Link
          href="/reservation"
          className="mt-8 inline-block rounded-md bg-copper px-6 py-3 text-sm font-medium text-cream hover:bg-copper-dark"
        >
          Réserver ma table
        </Link>
      </div>
    </section>
  );
}