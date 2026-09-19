import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-charcoal/2 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-copper">
            TÉMOIGNAGES
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Ils ont aimé
          </h2>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg border border-charcoal/10 bg-white p-6"
            >
              <div className="text-copper" aria-hidden="true">
                {"★".repeat(testimonial.rating)}
              </div>
              <p className="mt-3 text-sm text-charcoal/70">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-charcoal">
                {testimonial.name}
              </p>
              <p className="text-xs text-charcoal/50">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}