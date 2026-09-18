import ReservationForm from "@/components/reservation/ReservationForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réservation | KamerBites",
  description:
    "Réservez votre table chez KamerBites, restaurant à Bastos, Yaoundé.",
};


export default function ReservationPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl">Réservation</h1>
        <p className="mt-4 text-base text-charcoal/70 sm:text-lg">
          Réservez votre table en quelques clics.
        </p>
      </div>

      <div className="mt-10">
        <ReservationForm />
      </div>
    </section>
  );
}