"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import { formatPrice } from "@/lib/formatPrice";

export default function FeaturedDishes() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = menuItems.filter((item) => item.isFeatured);

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
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-copper">
              NOS PLATS SIGNATURES
            </p>
            <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
              Des recettes emblématiques, revisitées avec passion.
            </h2>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Plat précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 hover:bg-charcoal/5"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Plat suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 hover:bg-charcoal/5"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-none] [&::-webkit-scrollbar]:hidden"
        >
          {featured.map((item) => (
            <Link
              key={item.id}
              href="/menu"
              className="group w-64 flex-none snap-start overflow-hidden rounded-lg border border-charcoal/10 bg-white sm:w-72"
            >
              <div className="relative aspect-4/3 bg-charcoal/5">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 640px) 288px, 256px"
                    className="object-cover transition group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-charcoal">{item.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-charcoal/60">
                  {item.description}
                </p>
                <p className="mt-2 font-medium text-copper">
                  {formatPrice(item.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/menu"
            className="text-sm font-medium text-copper hover:underline"
          >
            Voir tout le menu →
          </Link>
        </div>
      </div>
    </section>
  );
}