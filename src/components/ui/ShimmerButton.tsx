"use client"; // Tells Next.js this component can use interactive features like clicks or animations

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

// This is like a "menu of options" for the button. It tells Next.js what properties this button expects to receive.
type ShimmerButtonProps = {
  href: string;             // The link destination (e.g., "/menu")
  children: ReactNode;     // The text inside the button (e.g., "Commander")
  icon?: LucideIcon;       // An optional icon from Lucide React
  variant?: "primary" | "secondary"; // The color style (defaults to primary)
  className?: string;      // Extra Tailwind classes sent from outside
  style?: CSSProperties;   // Inline styles (like the animation opacity)
};

export default function ShimmerButton({
  href,
  children,
  icon: Icon,
  variant = "primary",
  className = "", // If no extra classes are given, start with an empty string
  style,
}: ShimmerButtonProps) {
  
  // These are the design styles for the primary (copper) and secondary (see-through) buttons
  const variants = {
    primary:
      "bg-copper text-white shadow-lg hover:bg-copper-dark hover:shadow-xl hover:shadow-copper/20",
    secondary:
      "border border-white/30 bg-white/5 text-cream backdrop-blur-xs hover:bg-white/10 hover:border-white/60",
  };

  return (
    <Link
      href={href}
      style={style}
      // CRITICAL FIX: I moved the base transition classes here so they always apply.
      // `${variants[variant]} ${className}` glues your variant styles and your page classes together!
      className={`relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${variants[variant]} ${className}`}
    >
      {/* This renders the Icon and the Text neatly side-by-side */}
      <span className="relative z-10 inline-flex items-center gap-2">
        {Icon && <Icon size={16} />}
        {children}
      </span>
      
      {/* This empty tag creates the shiny shimmer visual effect */}
      <span className="shine-effect" aria-hidden="true" />
    </Link>
  );
}
