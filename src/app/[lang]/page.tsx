import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { content, type Lang } from "@/lib/content";
import Image from "next/image";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (rawLang !== "es" && rawLang !== "en") notFound();
  const lang = rawLang as Lang;
  const t = content[lang];

  return (
    <>
      <Navbar lang={lang} />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 pt-24 overflow-hidden">
        {/* Background image placeholder */}
        <div className="absolute inset-0">
          <Image src="/6.png" alt="Hero" fill className="object-cover" />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060b28]/90 via-[#060b28]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060b28]/80 via-transparent to-[#060b28]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 max-w-3xl">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {t.hero.tagline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <Link
            href="#proximo"
            className="inline-flex items-center gap-3 bg-[#e91e8c] hover:bg-[#c41677] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-widest uppercase"
          >
            {t.hero.cta}
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* ─── GAME INFO ────────────────────────────────────────── */}
      <section id="proximo" className="bg-[#060b28] py-20 px-6 text-center">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 whitespace-pre-line leading-tight"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {t.gameSection.title}
        </h2>

        <div className="max-w-xl mx-auto space-y-2 mb-10">
          {t.gameSection.lines.map((line, i) => (
            <p key={i} className="text-white/80 text-sm md:text-base leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        {/* Badge */}
        <div className="inline-flex flex-col items-center gap-3">
          <span className="text-[#e91e8c] font-bold text-xs tracking-[0.3em] uppercase border border-[#e91e8c] px-5 py-2 rounded-full">
            {t.gameSection.badge}
          </span>
          {/* Down arrow */}
          <svg
            className="w-5 h-5 text-[#e91e8c] animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ─── FULL-WIDTH GAME ART BANNER ───────────────────────── */}
      <section className="w-full">
        <Image src="/game-banner.png" alt="Game Art Banner" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
      </section>

      {/* ─── VIDEO SECTION ────────────────────────────────────── */}
      <section className="bg-[#060b28] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* YouTube video placeholder */}
          <div className="w-full aspect-video bg-[#0d1145] border border-[#2a3070] rounded-xl overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <Image src="/hero-bg.png" alt="Video Thumbnail" fill className="object-cover" />
              {/* Play button overlay */}
              <div className="relative z-10 w-16 h-16 bg-[#e91e8c] rounded-full flex items-center justify-center shadow-lg shadow-[#e91e8c]/40 hover:scale-110 transition-transform cursor-pointer">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* YouTube branding simulation */}
            <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-xs text-white/60 z-10">
              ▶ YouTube
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCENE IMAGES ─────────────────────────────────────── */}
      <section className="w-full">
        <Image src="/scene-library.png" alt="Game Scene — Library" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
      </section>
      <section className="w-full">
        <Image src="/scene-street.png" alt="Game Scene — Street" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
      </section>

      {/* ─── ABOUT MORTIS ─────────────────────────────────────── */}
      <section className="bg-[#060b28] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Book cover placeholder */}
          <div>
            <div className="relative w-full max-w-xs mx-auto rounded-lg overflow-hidden aspect-[3/4]">
              <Image src="/mortis-book.png" alt="Book Cover — Mortis: Eterno Retorno" fill className="object-cover" />
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <h3
              className="text-[#e91e8c] text-2xl md:text-3xl font-black mb-5"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {t.aboutMortis.heading}
            </h3>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              {t.aboutMortis.text}
            </p>
            <Link
              href={`/${lang}/dr-mortis`}
              className="inline-flex items-center gap-3 bg-[#e91e8c] hover:bg-[#c41677] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-widest uppercase"
            >
              {t.aboutMortis.cta}
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────── */}
      <section id="equipo" className="bg-[#060b28] py-20 px-6 border-t border-[#1a1f4e]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black text-white text-center mb-14"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {t.team.heading}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
            {t.team.members.map((member, i) => {
              const avatarFiles = [
                "/team-kathy.jpg",
                "/team-pablo.jpg",
                "/team-angeles.jpg",
                "/team-ianka.jpg",
                "/team-sebastian.jpg",
                "/team-matias.jpg",
                "/team-paulina.jpg",
                "/team-estefania.jpg",
              ];
              return (
              <div key={i} className="flex flex-col items-center gap-3 text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full border-2 border-[#2a3070] overflow-hidden relative">
                  <Image src={avatarFiles[i]} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[#e91e8c] text-[10px] font-bold tracking-widest uppercase">
                    {member.role}
                  </p>
                  <p className="text-white text-sm mt-0.5">{member.name}</p>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </>
  );
}
