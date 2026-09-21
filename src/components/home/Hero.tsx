"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /*
       * If the user prefers reduced motion,
       * immediately show all the content without animation.
       */
      if (prefersReducedMotion) {
        gsap.set(".animate-hidden", {
          autoAlpha: 1,
          y: 0,
        });

        gsap.set(".hero-image", {
          scale: 1,
        });

        return;
      }

      /*
       * Create the animation timeline.
       *
       * Position parameters (like "-=1.2") overlap the text builds
       * onto the background animation so there is no awkward delay.
       */
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // 1. Background image starts immediately
      tl.to(
        ".hero-image",
        {
          scale: 1,
          duration: 1.6,
          ease: "power2.out",
        },
        0
      );

      // 2. Label appears quickly during the background scale (0.4s into the timeline)
      tl.to(".hero-label", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
      }, "-=1.2");

      // 3. Heading lines appear right behind the label
      tl.to(".hero-heading-line", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
      }, "-=0.25");

      // 4. Description appears seamlessly
      tl.to(".hero-description", {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
      }, "-=0.2");

      // 5. CTA buttons cascade up smoothly at the finish line
      tl.to(".hero-cta", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
      }, "-=0.15");
    },
    {
      scope: containerRef,
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-150 overflow-hidden sm:min-h-162.5 bg-black"
    >
      {/* Background image */}
      <div
        className="hero-image absolute inset-0"
        style={{
          transform: "scale(1.08)",
        }}
      >
        <Image
          src="/images/gallery/interieur-2.jpg"
          alt="Ambiance chaleureuse du restaurant KamerBites"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
      </div>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-black/20" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-150 max-w-7xl items-center px-6 py-20 sm:min-h-162.5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">

          {/* Label */}
          <p
            className="hero-label animate-hidden mb-5 translate-y-4 text-xs font-semibold tracking-[0.2em] text-copper sm:text-sm"
            style={{
              opacity: 0,
              visibility: "hidden",
            }}
          >
            AUTHENTIQUE CUISINE CAMEROUNAISE • YAOUNDÉ
          </p>

          {/* Heading */}
          <h1 className="font-display max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
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
            className="hero-description animate-hidden mt-6 max-w-lg translate-y-4 text-base leading-7 text-cream/80 sm:text-lg"
            style={{
              opacity: 0,
              visibility: "hidden",
            }}
          >
            Des saveurs authentiques, des ingrédients locaux, une expérience
            culinaire moderne à Bastos, Yaoundé.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/reservation"
              className="hero-cta animate-hidden inline-flex translate-y-6 items-center justify-center rounded-md bg-copper px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-copper-dark"
              style={{
                opacity: 0,
                visibility: "hidden",
              }}
            >
              Réserver une table
            </Link>

            <Link
              href="/menu"
              className="hero-cta animate-hidden inline-flex translate-y-6 items-center justify-center px-4 py-3.5 text-sm font-medium text-cream transition hover:text-copper"
              style={{
                opacity: 0,
                visibility: "hidden",
              }}
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
