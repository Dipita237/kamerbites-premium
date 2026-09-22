"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import { formatPrice } from "@/lib/formatPrice";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedDishes() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = menuItems.filter((item) => item.isFeatured);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // Animates the inner wrapper safely without framework interference
      gsap.from(".featured-card", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  function scroll(direction: "left" | "right") {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section ref={sectionRef} className="overflow-hidden bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-copper">
              NOS PLATS SIGNATURES
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
              Des recettes emblématiques, revisitées avec passion.
            </h2>
          </div>

          <div className="mb-1 hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Plat précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 transition-colors hover:bg-charcoal/5"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Plat suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 transition-colors hover:bg-charcoal/5"
            >
              →
            </button>
          </div>
        </div>

        {/* Added explicit right-padding hack (pr-6) so the last card doesn't hit the screen edge */}
        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pr-6 scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {featured.map((item) => (
            <Link
              key={item.id}
              href="/menu"
              className={`group relative aspect-3/4 flex-none shrink-0 snap-start overflow-hidden rounded-2xl bg-charcoal shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                item.isChefsChoice ? "w-80 sm:w-104" : "w-64 sm:w-72"
              }`}
            >
              {/* Inner wrapper target for GSAP animation */}
              <div className="featured-card relative h-full w-full">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes={
                      item.isChefsChoice
                        ? "(min-width: 640px) 416px, 320px"
                        : "(min-width: 640px) 288px, 256px"
                    }
                    className="object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
                  />
                )}

                {/* Deeper gradient mix for better readability on lighter images */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent transition-opacity duration-300 group-hover:via-black/70" />

                {item.isChefsChoice && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-copper px-3 py-1 text-[10px] font-bold tracking-wider text-white shadow-md">
                    CHOIX DU CHEF
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">
                  <h3 className="font-display text-xl font-bold tracking-wide transition-colors group-hover:text-gold">
                    {item.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm font-light text-white/80">
                    {item.description}
                  </p>
                  <p className="mt-4 text-lg font-bold tracking-wide text-gold">
                    {formatPrice(item.price)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-1 text-sm font-semibold text-copper hover:underline"
          >
            Voir tout le menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
