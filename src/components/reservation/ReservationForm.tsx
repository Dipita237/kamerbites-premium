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
      <div className="rounded-lg border border-copper/30 bg-copper/5 p-6 text-center">
        <p className="font-medium text-charcoal">
          Merci, {values.nom || "et bienvenue"} ! Votre demande de
          réservation a bien été reçue.
        </p>
        <p className="mt-2 text-sm text-charcoal/70">
          Nous vous confirmerons votre réservation sous peu.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="text-sm font-medium">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm"
          />
          {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="heure" className="text-sm font-medium">
            Heure
          </label>
          <input
            id="heure"
            name="heure"
            type="time"
            value={values.heure}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm"
          />
          {errors.heure && <p className="mt-1 text-xs text-red-600">{errors.heure}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="personnes" className="text-sm font-medium">
          Nombre de personnes
        </label>
        <select
          id="personnes"
          name="personnes"
          value={values.personnes}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "personne" : "personnes"}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="nom" className="text-sm font-medium">
          Nom complet
        </label>
        <input
          id="nom"
          name="nom"
          type="text"
          value={values.nom}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm"
        />
        {errors.nom && <p className="mt-1 text-xs text-red-600">{errors.nom}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telephone" className="text-sm font-medium">
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={values.telephone}
            onChange={handleChange}
            placeholder="+237 6XX XXX XXX"
            className="mt-1 w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm"
          />
          {errors.telephone && (
            <p className="mt-1 text-xs text-red-600">{errors.telephone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message (facultatif)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={values.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-copper px-4 py-3 text-sm font-medium text-cream hover:bg-copper-dark sm:w-auto"
      >
        Réserver ma table
      </button>
    </form>
  );
}