import Image from "next/image";
import { MenuItem, dietaryLabels } from "@/data/menu";
import { formatPrice } from "@/lib/formatPrice";

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-charcoal/10 bg-white">
      <div className="relative aspect-video bg-charcoal/5">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-sm text-charcoal/40"
            aria-hidden="true"
          >
            Photo à venir
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="whitespace-nowrap font-medium text-copper">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="text-sm text-charcoal/70">{item.description}</p>

        {item.dietary.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {item.dietary.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-charcoal/5 px-2 py-1 text-xs text-charcoal/70"
              >
                {dietaryLabels[tag]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}