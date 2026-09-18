import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-4xl font-semibold sm:text-5xl">404</h1>
      <p className="mt-4 text-base text-charcoal/70 sm:text-lg">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-copper px-4 py-2 text-sm font-medium text-cream hover:bg-copper-dark"
      >
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}