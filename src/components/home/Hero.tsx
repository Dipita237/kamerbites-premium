"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
// Importing clean luxury web icons instead of emojis
import { Star, ChefHat, Calendar, Leaf } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".animate-hidden", { autoAlpha: 1, y: 0 });
        gsap.set(".hero-image", { scale: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".hero-image", { scale: 1, duration: 1.6, ease: "power2.out" }, 0);
      tl.to(".hero-label", { autoAlpha: 1, y: 0, duration: 0.6 }, "-=1.2");
      tl.to(".hero-heading-line", { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.12 }, "-=0.25");
      tl.to(".hero-description", { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.2");
      tl.to(".hero-cta", { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.12 }, "-=0.15");
      tl.to(".hero-trust-bar", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3");
    },
    { scope: containerRef }
  );

  // Repeatable geometric SVG pattern definition for the traditional Cameroonian border strip
  const tribalPatternSvg = `data:image/svg+xml,%3Csvg xmlns='http://w3.org' width='60' height='24' viewBox='0 0 60 24'%3E%3Cpath d='M0 0h60v24H0z' fill='none'/%3E%3Cpath d='M0 12l15-10v20L0 12zm15-10l15 10-15 10V2zm15 10l15-10v20L30 12zm15-10l15 10-15 10V2zM0 2h60M0 22h60' stroke='%23e65100' stroke-width='1.5' fill='none' stroke-linejoin='round'/%3E%3Cpath d='M7.5 12c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3zm30 0c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3z' fill='%23e65100' opacity='0.7'/%3E%3C/svg%3E`;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-charcoal flex flex-col justify-between overflow-hidden"
    >
      {/* Background Media Graphic Canvas */}
      <div className="hero-image absolute inset-0 z-0" style={{ transform: "scale(1.08)" }}>
        <Image
          src="/images/gallery/interieur-2.jpg"
          alt="Ambiance chaleureuse du restaurant KamerBites"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-charcoal" />
      </div>

      {/* Main Core Brand Callouts Box */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 flex-1 flex flex-col justify-center pt-32 pb-12">
        <div className="max-w-3xl">
          
          {/* Label tag displaying requested sub-tagline context */}
          <p
            className="hero-label animate-hidden mb-4 translate-y-4 text-xs font-bold tracking-[0.25em] text-copper uppercase sm:text-sm"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            Le Cameroun dans chaque bouchée • Bastos
          </p>

          <h1 className="font-display max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            <span
              className="hero-heading-line animate-hidden block translate-y-6"
              style={{ opacity: 0, visibility: "hidden" }}
            >
              Le goût du Cameroun,
            </span>
            {/* Replaced gold with your original crisp orange color accent */}
            <span
              className="hero-heading-line animate-hidden block translate-y-6 text-copper"
              style={{ opacity: 0, visibility: "hidden" }}
            >
              réinventé.
            </span>
          </h1>

          <p
            className="hero-description animate-hidden mt-6 max-w-lg translate-y-4 text-base leading-7 text-cream/80 sm:text-lg font-light"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            Des saveurs authentiques, des ingrédients locaux, une expérience
            culinaire moderne au cœur de Yaoundé.
          </p>

          {/* Buttons with smooth -translate-y-1 lift animations on hover */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/reservation"
              className="hero-cta animate-hidden inline-flex h-12 translate-y-6 items-center justify-center rounded-full bg-copper px-8 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-copper-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-copper/20"
              style={{ opacity: 0, visibility: "hidden" }}
            >
              Réserver une table
            </Link>
            <Link
              href="/menu"
              className="hero-cta animate-hidden inline-flex h-12 translate-y-6 items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 text-sm font-semibold text-cream backdrop-blur-xs transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:-translate-y-1"
              style={{ opacity: 0, visibility: "hidden" }}
            >
              Découvrir le menu →
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Animated Pointer Indicator */}
      <div className="relative z-10 w-full flex justify-center pb-4">
        <div className="animate-bounce flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-cream/60 text-sm">
          ↓
        </div>
      </div>

      {/* Modern Professional Trust Badges Bar Container (Wiped out emojis, applied requested #F5F0E8 background color) */}
      <div 
        className="hero-trust-bar relative z-10 w-full bg-[#F5F0E8] border-y border-charcoal/5 py-4 translate-y-4 opacity-0"
        style={{ willChange: "transform, opacity" }}
      >
        {/* Continuous Cameroonian Tribal Art Pattern Border Layer Accent */}
        <div 
          className="absolute top-0 left-0 w-full h-[24px] -translate-y-[23px] opacity-95" 
          style={{ backgroundImage: `url("${tribalPatternSvg}")`, backgroundRepeat: "repeat-x" }}
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ul className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 text-xs font-semibold text-charcoal/80">
            <li className="flex items-center gap-2">
              <div className="flex gap-0.5 text-orange-500">
                <Star size={13} fill="currentColor" stroke="none" />
                <Star size={13} fill="currentColor" stroke="none" />
                <Star size={13} fill="currentColor" stroke="none" />
                <Star size={13} fill="currentColor" stroke="none" />
                <Star size={13} fill="currentColor" stroke="none" />
              </div>
              <span>4.9/5 · Apprécié à Yaoundé</span>
            </li>
            <li className="flex items-center gap-2">
              <ChefHat size={14} className="text-copper" />
              <span>Cuisine camerounaise authentique</span>
            </li>
            <li className="flex items-center gap-2">
              <Calendar size={14} className="text-copper" />
              <span>Ouvert 7j/7</span>
            </li>
            <li className="flex items-center gap-2">
              <Leaf size={14} className="text-copper" />
              <span>Produits locaux frais</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
