"use client";

import { useRef } from "react";

import { Caveat } from "next/font/google";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";

import Image from "next/image";

import { ShoppingBag, UtensilsCrossed } from "lucide-react";

import ShimmerButton from "@/components/ui/ShimmerButton";

gsap.registerPlugin(useGSAP);

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Motif tribal camerounais répétable, encodé proprement en data URI
const TRIBAL_PATTERN_SVG = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='24' viewBox='0 0 60 24'>
    <path d='M0 0h60v24H0z' fill='none'/>
    <path d='M0 12l15-10v20L0 12zm15-10l15 10-15 10V2zm15 10l15-10v20L30 12zm15-10l15 10-15 10V2zM0 2h60M0 22h60'
      stroke='#e65100'
      stroke-width='1.5'
      fill='none'
      stroke-linejoin='round'
    />
    <path d='M7.5 12c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3zm30 0c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3z'
      fill='#e65100'
      opacity='0.7'
    />
  </svg>`
)}`;

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /*
       * =========================================================
       * REDUCED MOTION
       * =========================================================
       */
      if (prefersReducedMotion) {
        gsap.set(".animate-hidden", {
          autoAlpha: 1,
          y: 0,
        });

        gsap.set(".hero-image", {
          scale: 1,
        });

        gsap.set(".hero-decorative-phrase", {
          autoAlpha: 1,
          y: 0,
          rotation: -7,
        });

        gsap.set(".hero-bouchee-text", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });

        gsap.set(".hero-shimmer", {
          xPercent: 0,
          autoAlpha: 0,
        });

        gsap.set(".tribal-divider", {
          opacity: 0.95,
        });

        return;
      }

      /*
       * =========================================================
       * MAIN HERO TIMELINE
       * =========================================================
       */

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // =========================================================
      // IMAGE
      // =========================================================

      tl.to(
        ".hero-image",
        {
          scale: 1,
          duration: 1.6,
          ease: "power2.out",
        },
        0
      );

      // =========================================================
      // PETIT LABEL
      // =========================================================

      tl.to(
        ".hero-label",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
        },
        "-=1.2"
      );

      // =========================================================
      // TITRE
      // =========================================================

      tl.to(
        ".hero-heading-line",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
        },
        "-=0.25"
      );

      // =========================================================
      // DESCRIPTION
      // =========================================================

      tl.to(
        ".hero-description",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.2"
      );

      // =========================================================
      // BOUTONS
      // =========================================================

      tl.to(
        ".hero-cta",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
        },
        "-=0.15"
      );

      /*
       * =========================================================
       * PHRASE DÉCORATIVE
       *
       * 1. La phrase arrive
       * 2. "dans chaque bouchée" rebondit
       * 3. petit impact
       * 4. shimmer
       * =========================================================
       */

      // ---------------------------------------------------------
      // 1. La phrase entière apparaît
      // ---------------------------------------------------------

      tl.to(
        ".hero-decorative-phrase",
        {
          autoAlpha: 1,
          y: 0,
          rotation: -7,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.1"
      );

      // ---------------------------------------------------------
      // 2. "dans chaque bouchée" saute
      // ---------------------------------------------------------

      tl.to(
        ".hero-bouchee-text",
        {
          autoAlpha: 1,
          y: -18,
          duration: 0.28,
          ease: "power2.out",
        },
        "-=0.15"
      );

      // ---------------------------------------------------------
      // 3. Descente
      // ---------------------------------------------------------

      tl.to(".hero-bouchee-text", {
        y: 4,
        duration: 0.22,
        ease: "power2.in",
      });

      // ---------------------------------------------------------
      // 4. Petit rebond final
      // ---------------------------------------------------------

      tl.to(".hero-bouchee-text", {
        y: 0,
        duration: 0.38,
        ease: "bounce.out",
      });

      // ---------------------------------------------------------
      // 5. Petit "TAP" / impact
      // ---------------------------------------------------------

      tl.to(".hero-bouchee-text", {
        scale: 1.055,
        duration: 0.08,
        ease: "power2.out",
      });

      tl.to(".hero-bouchee-text", {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });

      // ---------------------------------------------------------
      // 6. Petit trait : apparition après l'impact
      // ---------------------------------------------------------

      tl.fromTo(
        ".hero-phrase-line",
        {
          scaleX: 0,
          transformOrigin: "center",
        },
        {
          scaleX: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.1"
      );

      // ---------------------------------------------------------
      // 7. SHIMMER
      // ---------------------------------------------------------

      tl.to(
        ".hero-shimmer",
        {
          xPercent: 180,
          autoAlpha: 1,
          duration: 0.75,
          ease: "power2.inOut",
        },
        "+=0.05"
      );

      // ---------------------------------------------------------
      // 8. Faire disparaître le shimmer après son passage
      // ---------------------------------------------------------

      tl.set(".hero-shimmer", {
        autoAlpha: 0,
      });

      // =========================================================
      // MOTIF TRIBAL
      // =========================================================

      tl.to(
        ".tribal-divider",
        {
          opacity: 0.95,
          duration: 0.5,
        },
        "-=0.2"
      );
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-charcoal"
    >
      {/* =========================================================
          IMAGE DE FOND
      ========================================================= */}

      <div
        className="hero-image absolute inset-0 z-0"
        style={{ transform: "scale(1.08)" }}
      >
        <Image
          src="/images/gallery/interieur-2.jpg"
          alt="Ambiance chaleureuse du restaurant KamerBites"
          fill
          priority
          sizes="100vw"
          className="select-none object-cover object-center opacity-45"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-charcoal" />
      </div>

      {/* =========================================================
          PHRASE DÉCORATIVE
          "Le Cameroun dans chaque bouchée"
      ========================================================= */}

      <div
        className={`${caveat.className} hero-decorative-phrase absolute right-[10%] top-[38%] z-20 hidden w-72 text-center text-copper sm:block lg:right-[12%] lg:top-[38%] lg:w-80`}
        style={{
          opacity: 0,
          visibility: "hidden",
          transform: "translateY(10px) rotate(-7deg)",
        }}
      >
        {/* "Le Cameroun" */}

        <div className="text-4xl font-semibold leading-[0.8] lg:text-5xl">
          Le Cameroun
        </div>

        {/* =====================================================
            "dans chaque bouchée"
        ===================================================== */}

        <div
          className="hero-bouchee-text relative mt-2 inline-block text-3xl font-semibold leading-none lg:text-4xl"
          style={{
            opacity: 0,
            visibility: "hidden",
          }}
        >
          dans chaque bouchée

          {/* ===================================================
              SHIMMER
          =================================================== */}

          <span
            className="hero-shimmer pointer-events-none absolute inset-y-[-20%] left-[-60%] z-10 w-[35%] skew-x-[-20deg] opacity-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
              filter: "blur(1px)",
            }}
          />
        </div>

        {/* =====================================================
            Petit trait décoratif
        ===================================================== */}

        <div className="hero-phrase-line mx-auto mt-4 h-0.5 w-28 origin-center -rotate-6 scale-x-0 rounded-full bg-copper" />
      </div>

      {/* =========================================================
          CONTENU PRINCIPAL
      ========================================================= */}

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="max-w-3xl">
          {/* Label */}

          <p
            className="hero-label animate-hidden mb-4 translate-y-4 text-xs font-bold uppercase tracking-[0.25em] text-copper sm:text-sm"
            style={{
              opacity: 0,
              visibility: "hidden",
            }}
          >
            Le Cameroun dans chaque bouchée • Bastos
          </p>

          {/* Titre */}

          <h1 className="font-display max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            <span
              className="hero-heading-line animate-hidden block translate-y-6"
              style={{
                opacity: 0,
                visibility: "hidden",
              }}
            >
              Le goût du Cameroun,
            </span>

            <span
              className="hero-heading-line animate-hidden block translate-y-6 text-copper"
              style={{
                opacity: 0,
                visibility: "hidden",
              }}
            >
              réinventé.
            </span>
          </h1>

          {/* Description */}

          <p
            className="hero-description animate-hidden mt-6 max-w-lg translate-y-4 text-base font-light leading-7 text-cream/80 sm:text-lg"
            style={{
              opacity: 0,
              visibility: "hidden",
            }}
          >
            Des saveurs authentiques, des ingrédients locaux, une expérience
            culinaire moderne au cœur de Yaoundé.
          </p>

          {/* CTA */}

          {/* =========================================================
    CTA (Call To Action Buttons)
========================================================= */}

<div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <ShimmerButton
    href="/reservation"
    icon={ShoppingBag}
    variant="primary"
    // Space typos fixed here!
    className="hero-cta animate-hidden"
    style={{
      opacity: 0,
      visibility: "hidden",
    }}
  >
    Commander
  </ShimmerButton>

  <ShimmerButton
    href="/menu"
    icon={UtensilsCrossed}
    variant="secondary"
    // Space typos fixed here!
    className="hero-cta animate-hidden"
    style={{
      opacity: 0,
      visibility: "hidden",
    }}
  >
    Découvrir le menu
  </ShimmerButton>
</div>

        </div>
      </div>

      {/* =========================================================
          INDICATEUR DE DÉFILEMENT
      ========================================================= */}

      <div className="relative z-10 flex w-full justify-center pb-8">
        <div className="flex h-9 w-9 animate-bounce items-center justify-center rounded-full border border-white/20 bg-black/20 text-sm text-cream/60">
          ↓
        </div>
      </div>

      {/* =========================================================
          MOTIF TRIBAL
      ========================================================= */}

      <div
        className="tribal-divider absolute bottom-0 left-0 z-10 h-6 w-full"
        style={{
          backgroundImage: `url("${TRIBAL_PATTERN_SVG}")`,
          backgroundRepeat: "repeat-x",
          opacity: 0,
        }}
      />
    </section>
  );
}