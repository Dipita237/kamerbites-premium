import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <LogoMark size={36} />
            <div>
              <p className="text-lg font-semibold">KamerBites</p>
              <p className="mt-2 max-w-sm text-sm text-cream/70">
                Une expérience culinaire premium qui célèbre les saveurs du
                Cameroun, au cœur de Yaoundé.
              </p>
            </div>
          </div>

          <div className="text-sm text-cream/70">
            <p>
              <span className="font-medium text-cream">Email :</span>{" "}
              hello@kamerbites.example.com
            </p>
            <p className="mt-1">
              <span className="font-medium text-cream">Téléphone :</span>{" "}
              +237 000 000 000
            </p>
          </div>
        </div>

        <p className="mt-8 border-t border-cream/10 pt-6 text-xs text-cream/50">
          &copy; {new Date().getFullYear()} KamerBites. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}