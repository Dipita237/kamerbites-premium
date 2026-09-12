import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KamerBites | Authentic Cameroonian Cuisine",
  description:
    "Discover authentic Cameroonian cuisine, made with local ingredients and served with warmth in Yaoundé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}