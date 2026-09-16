import { menuItems } from "@/data/menu";
import MenuCard from "@/components/menu/MenuCard";

export default function MenuPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">Notre Menu</h1>
        <p className="mt-4 text-base text-charcoal/70 sm:text-lg">
          Des plats pour tous les goûts, préparés avec des ingrédients
          locaux.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}