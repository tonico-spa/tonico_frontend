import type { Metadata } from "next";
import { Outfit, Alfa_Slab_One, Creepster } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const alfaSlabOne = Alfa_Slab_One({
  variable: "--font-alfa",
  subsets: ["latin"],
  weight: "400",
});

const creepster = Creepster({
  variable: "--font-creepster",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tónico — Aventuras narrativas con alma latinoamericana",
  description: "Story-driven adventures with a Latin American spirit",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${alfaSlabOne.variable} ${creepster.variable} antialiased`}
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
