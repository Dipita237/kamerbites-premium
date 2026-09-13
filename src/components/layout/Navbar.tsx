import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Navbar() {
  return (
    <header className="bg-charcoal text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <LogoMark size={44} />
          <div>
            <p className="text-xl font-semibold tracking-wide">KamerBites</p>
            <p className="text-xs text-cream/70">
              Cuisine Camerounaise • Yaoundé
            </p>
          </div>
        </Link>

        {/* Desktop nav links - hidden on small screens for now */}
        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="/" className="text-sm hover:text-copper">
            Accueil
          </Link>
          <Link href="/menu" className="text-sm hover:text-copper">
            Menu
          </Link>
          <Link href="/notre-histoire" className="text-sm hover:text-copper">
            Notre Histoire
          </Link>
          <Link href="/galerie" className="text-sm hover:text-copper">
            Galerie
          </Link>
        </nav>

        {/* CTA - always visible */}
        <Link
          href="/reservation"
          className="rounded-md bg-copper px-4 py-2 text-sm font-medium text-cream hover:bg-copper-dark"
        >
          Réserver une table
        </Link>
      </div>
    </header>
  );
}