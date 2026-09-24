"use client";

import Link from "next/link";
import LogoMark from "./LogoMark";
import ShimmerButton from "../ui/ShimmerButton";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
        
        <Link href="/" className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]">
          <LogoMark size={44} />
          <div>
            <p className="font-display text-xl font-bold tracking-wide transition-colors group-hover:text-copper">
              KamerBites
            </p>
            <p className="text-[10px] sm:text-xs text-cream/60 tracking-wider">
              Cuisine Camerounaise • Yaoundé
            </p>
          </div>
        </Link>

        {/* Navigation links with smooth expanding orange under-borders */}
        <nav className="hidden items-center gap-8 sm:flex font-medium">
          {["Accueil", "Menu", "Notre Histoire", "Galerie"].map((item) => {
            const paths: Record<string, string> = {
              "Accueil": "/",
              "Menu": "/menu",
              "Notre Histoire": "/notre-histoire",
              "Galerie": "/galerie"
            };
            return (
              <Link 
                key={item}
                href={paths[item]} 
                className="relative text-sm tracking-wide text-cream/90 transition-colors duration-300 hover:text-white group"
              >
                {item}
                {/* The smooth orange border that draws itself under the link */}
                <span className="absolute left-1/2 bottom-[-6px] w-0 h-[2px] bg-copper transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
              </Link>
            );
          })}
        </nav>

        {/* CTA with Lift-up Hover Effect */}
        <ShimmerButton
          href="/reservation"
          className="rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-copper-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-copper/20"
        >
          Réserver une table
        </ShimmerButton>
      </div>
    </header>
  );
}
