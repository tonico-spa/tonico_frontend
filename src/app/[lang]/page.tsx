import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
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
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/hero-bg.png" alt="Hero" fill className="object-cover" />
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
              <span
                key={i}
                className="block animate-fade-slide-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>
          <Link
            href="#proximo"
            className="btn-glow inline-flex items-center gap-3 bg-[#e91e8c] hover:bg-[#c41677] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-widest uppercase animate-fade-slide-up"
            style={{ animationDelay: `${t.hero.tagline.length * 150 + 100}ms` }}
          >
            {t.hero.cta}
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* ─── GAME INFO ────────────────────────────────────────── */}
      <section id="proximo" className="bg-[#060b28] py-20 px-6 text-center">
        <FadeInSection>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 whitespace-pre-line leading-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {t.gameSection.title}
          </h2>
        </FadeInSection>

        <FadeInSection delay={150}>
          <div className="max-w-xl mx-auto space-y-2 mb-10">
            {t.gameSection.lines.map((line, i) => (
              <p key={i} className="text-white/80 text-sm md:text-base leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={300}>
          <div className="inline-flex flex-col items-center gap-3">
            <span className="badge-pulse text-[#e91e8c] font-bold text-xs tracking-[0.3em] uppercase border border-[#e91e8c] px-5 py-2 rounded-full">
              {t.gameSection.badge}
            </span>
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
        </FadeInSection>
      </section>

      {/* ─── FULL-WIDTH GAME ART BANNER ───────────────────────── */}
      <section className="w-full">
        <FadeInSection>
          <Image src="/game-banner.png" alt="Game Art Banner" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
        </FadeInSection>
      </section>

      {/* ─── VIDEO SECTION ────────────────────────────────────── */}
      <section className="bg-[#060b28] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="w-full aspect-video bg-[#0d1145] border border-[#2a3070] rounded-xl overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <Image src="/hero-bg.png" alt="Video Thumbnail" fill className="object-cover" />
                <div className="animate-breathe relative z-10 w-16 h-16 bg-[#e91e8c] rounded-full flex items-center justify-center shadow-lg shadow-[#e91e8c]/40 cursor-pointer">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-xs text-white/60 z-10">
                ▶ YouTube
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── SCENE IMAGES ─────────────────────────────────────── */}
      <section className="w-full">
        <FadeInSection>
          <Image src="/scene-library.png" alt="Game Scene — Library" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
        </FadeInSection>
      </section>
      <section className="w-full">
        <FadeInSection>
          <Image src="/scene-street.png" alt="Game Scene — Street" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
        </FadeInSection>
      </section>

      {/* ─── ABOUT MORTIS ─────────────────────────────────────── */}
      <section className="bg-[#060b28] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="relative w-full max-w-xs mx-auto rounded-lg overflow-hidden aspect-[3/4]">
              <Image src="/mortis-book.png" alt="Book Cover — Mortis: Eterno Retorno" fill className="object-cover" />
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
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
                className="btn-glow inline-flex items-center gap-3 bg-[#e91e8c] hover:bg-[#c41677] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm tracking-widest uppercase"
              >
                {t.aboutMortis.cta}
                <span className="text-lg">→</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────── */}
      <section id="equipo" className="bg-[#060b28] py-20 px-6 border-t border-[#1a1f4e]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2
              className="text-4xl md:text-5xl font-black text-white text-center mb-14"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {t.team.heading}
            </h2>
          </FadeInSection>

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
                <FadeInSection key={i} delay={i * 75}>
                  <div className="flex flex-col items-center gap-3 text-center group cursor-default hover:scale-105 transition-transform duration-300">
                    <div className="w-20 h-20 rounded-full border-2 border-[#2a3070] group-hover:border-[#e91e8c] group-hover:shadow-[0_0_14px_4px_rgba(233,30,140,0.4)] overflow-hidden relative transition-all duration-300">
                      <Image src={avatarFiles[i]} alt={member.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-[#e91e8c] text-[10px] font-bold tracking-widest uppercase">
                        {member.role}
                      </p>
                      <p className="text-white text-sm mt-0.5">{member.name}</p>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </>
  );
}
