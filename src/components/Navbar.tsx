import Link from "next/link";
import TonicLogo from "./TonicLogo";
import { content, type Lang } from "@/lib/content";

interface NavbarProps {
  lang: Lang;
  showBack?: boolean;
}

export default function Navbar({ lang, showBack = false }: NavbarProps) {
  const t = content[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-[#060b28]/90 backdrop-blur-sm">
      <TonicLogo href={`/${lang}`} size="sm" />

      <ul className="flex items-center gap-6 md:gap-8 text-sm text-white/90">
        {showBack && (
          <li>
            <Link
              href={`/${lang}`}
              className="text-[#e91e8c] hover:text-[#e91e8c]/80 transition-colors flex items-center gap-1"
            >
              ← {t.drMortis.back}
            </Link>
          </li>
        )}
        <li>
          <Link
            href={showBack ? `/${lang === "es" ? "en" : "es"}${showBack ? "/dr-mortis" : ""}` : "/"}
            className="hover:text-[#e91e8c] transition-colors"
          >
            {t.nav.idioma}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}#proximo`} className="hover:text-[#e91e8c] transition-colors">
            {t.nav.proximamente}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}#equipo`} className="hover:text-[#e91e8c] transition-colors">
            {t.nav.equipo}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}#contacto`} className="hover:text-[#e91e8c] transition-colors">
            {t.nav.contacto}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
