"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormValues = {
  date: string;
  heure: string;
  personnes: string;
  nom: string;
  telephone: string;
  email: string;
  message: string;
  societe: string;
};

const initialValues: FormValues = {
  date: "",
  heure: "",
  personnes: "2",
  nom: "",
  telephone: "",
  email: "",
  message: "",
  societe: "",
};

export default function ReservationForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.date) newErrors.date = "Veuillez choisir une date.";
    if (!values.heure) newErrors.heure = "Veuillez choisir une heure.";
    if (!values.nom.trim()) newErrors.nom = "Veuillez indiquer votre nom.";
    if (!values.telephone.trim() && !values.email.trim()) {
      newErrors.telephone = "Indiquez un téléphone ou un email.";
      newErrors.email = "Indiquez un téléphone ou un email.";
    }
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Adresse email invalide.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (values.societe) {
      setSubmitted(true);
      return;
    }
    if (validate()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-copper/30 bg-copper/5 p-8 text-center max-w-xl mx-auto shadow-md">
        <div className="text-3xl mb-3">✨</div>
        <p className="font-display font-bold text-lg text-charcoal">
          Merci, {values.nom || "et bienvenue"} !
        </p>
        <p className="mt-2 text-sm text-charcoal/80">
          Votre demande de réservation a bien été reçue. Nous vous confirmerons votre table sous peu par SMS ou email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 max-w-4xl mx-auto">
      {/* Honeypot hidden container for blocking malicious tracking bots */}
      <input
        type="text"
        name="societe"
        value={values.societe}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="date" className="text-xs font-bold tracking-wider text-charcoal/60 uppercase mb-2">
            Date
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">📅</span>
            <input
              id="date"
              name="date"
              type="date"
              value={values.date}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-copper/50 transition-colors"
            />
          </div>
          {errors.date && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.date}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="heure" className="text-xs font-bold tracking-wider text-charcoal/60 uppercase mb-2">
            Heure
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">🕒</span>
            <input
              id="heure"
              name="heure"
              type="time"
              value={values.heure}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-copper/50 transition-colors"
            />
          </div>
          {errors.heure && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.heure}</p>}
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="personnes" className="text-xs font-bold tracking-wider text-charcoal/60 uppercase mb-2">
          Nombre de personnes
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">👥</span>
          <select
            id="personnes"
            name="personnes"
            value={values.personnes}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 bg-white border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-copper/50 transition-colors appearance-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "personne" : "personnes"}
              </option>
            ))}
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 pointer-events-none text-xs">▼</span>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="nom" className="text-xs font-bold tracking-wider text-charcoal/60 uppercase mb-2">
          Votre nom complet
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">👤</span>
          <input
            id="nom"
            name="nom"
            type="text"
            value={values.nom}
            onChange={handleChange}
            placeholder="Jean Dupont"
            className="w-full pl-10 pr-4 py-3 bg-white border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-copper/50 transition-colors"
          />
        </div>
        {errors.nom && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.nom}</p>}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="telephone" className="text-xs font-bold tracking-wider text-charcoal/60 uppercase mb-2">
            Téléphone / Mobile
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">📞</span>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              value={values.telephone}
              onChange={handleChange}
              placeholder="+237 6XX XXX XXX"
              className="w-full pl-10 pr-4 py-3 bg-white border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-copper/50 transition-colors"
            />
          </div>
          {errors.telephone && (
            <p className="mt-1.5 text-xs font-medium text-red-600">{errors.telephone}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-xs font-bold tracking-wider text-charcoal/60 uppercase mb-2">
            Adresse Email
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 text-sm">✉️</span>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="exemple@domaine.com"
              className="w-full pl-10 pr-4 py-3 bg-white border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-copper/50 transition-colors"
            />
          </div>
          {errors.email && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-xs font-bold tracking-wider text-charcoal/60 uppercase mb-2">
          Notes ou demandes particulières (facultatif)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={values.message}
          onChange={handleChange}
          placeholder="Allergies, choix de table, anniversaire..."
          className="w-full px-4 py-3 bg-white border border-charcoal/10 rounded-xl text-sm focus:outline-none focus:border-copper/50 transition-colors resize-none"
        />
      </div>

      <div className="pt-4 flex flex-col items-center gap-3">
        <button
          type="submit"
          className="w-full rounded-full bg-copper px-10 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-copper-dark hover:-translate-y-0.5 hover:shadow-copper/20"
        >
          Réserver ma table
        </button>
        <p className="text-[11px] text-charcoal/50 flex items-center gap-1.5">
          <span>🔒</span> Nous vous confirmerons votre réservation sous peu.
        </p>
      </div>
    </form>
  );
}
