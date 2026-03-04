import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { content, type Lang } from "@/lib/content";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function DrMortisPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (rawLang !== "es" && rawLang !== "en") notFound();
  const lang = rawLang as Lang;
  const t = content[lang];
  const dm = t.drMortis;

  return (
    <>
      <Navbar lang={lang} showBack />

      <main className="bg-[#060b28] min-h-screen pt-24 pb-0">

        {/* ─── DR. MORTIS TITLE ─────────────────────────────── */}
        <section className="px-6 md:px-12 py-12 text-center">
          <h1
            className="text-6xl md:text-8xl font-normal text-[#c8230c] drop-shadow-[0_0_30px_rgba(200,35,12,0.5)] tracking-wider"
            style={{ fontFamily: "var(--font-creepster)" }}
          >
            {dm.title}
          </h1>
        </section>

        {/* ─── INTRO ───────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 pb-12">
          <p className="text-white/80 text-xs md:text-sm leading-relaxed tracking-wide uppercase font-semibold text-center">
            {dm.intro}
          </p>
        </section>

        {/* ─── TRAYECTORIA HEADING ──────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 pb-8 text-center">
          <h2
            className="text-[#e91e8c] text-xl font-black tracking-[0.3em] uppercase border-b border-[#e91e8c]/30 pb-4"
          >
            {dm.trayectory}
          </h2>
        </section>

        {/* ─── SECTION 1: RADIO THEATER ─────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
          <h3 className="text-white font-black text-sm tracking-[0.2em] uppercase mb-6 border-l-2 border-[#e91e8c] pl-4">
            {dm.sections[0].heading}
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Text column */}
            <div className="space-y-4">
              {dm.sections[0].paragraphs.map((p, i) => (
                <p key={i} className="text-white/80 text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            {/* Image column */}
            <div className="space-y-4">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/radio-actors.png" alt="Radio actors — historical photo" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Aside + second image (two-column) */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              {"aside" in dm.sections[0] && (
                <p className="text-white/80 text-sm leading-relaxed">
                  {(dm.sections[0] as unknown as { aside: string }).aside}
                </p>
              )}
            </div>
            <div className="space-y-4">
              <div className="relative w-full max-w-[180px] mx-auto aspect-[3/4] rounded-lg overflow-hidden">
                <Image src="/comic-cover-1.jpeg" alt="Comics magazine cover" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Rest paragraphs full-width */}
          {"rest" in dm.sections[0] && (
            <div className="space-y-4">
              {(dm.sections[0] as unknown as { rest: readonly string[] }).rest.map((p, i) => (
                <p key={i} className="text-white/80 text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          )}
        </section>

        {/* ─── SECTION 2: COMICS ────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
          <h3 className="text-white font-black text-sm tracking-[0.15em] uppercase mb-6 border-l-2 border-[#e91e8c] pl-4">
            {dm.sections[1].heading}
          </h3>

          <div className="space-y-4 mb-10">
            {dm.sections[1].paragraphs.map((p, i) => (
              <p key={i} className="text-white/80 text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Three comic cover images */}
          <div className="grid grid-cols-3 gap-4">
            {["/comic-cover-1.jpeg", "/comic-cover-2.png", "/comic-cover-3.png"].map((src, i) => (
              <div key={i} className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                <Image src={src} alt={`Comic cover ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 3: RESURGENCE ────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
          <h3 className="text-white font-black text-sm tracking-[0.15em] uppercase mb-6 border-l-2 border-[#e91e8c] pl-4">
            {dm.sections[2].heading}
          </h3>

          <div className="space-y-4 mb-10">
            {dm.sections[2].paragraphs.map((p, i) => (
              <p key={i} className="text-white/80 text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Three Mortis: Eterno Retorno covers */}
               <section className="w-full" style={{ alignContent: "center" }}>
                      <Image src="/mortis-eterno-1.jpg" alt="Game Scene — Library" width={0} height={0} sizes="100vw" style={{ width: "70%", height: "auto", alignSelf: "center" }} />
                    </section>
        </section>

        {/* ─── BOTTOM NAV ───────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 pb-16 flex items-center justify-between flex-wrap gap-4">
          <Link
            href={`/${lang}`}
            className="text-[#e91e8c] hover:text-white transition-colors text-sm font-semibold flex items-center gap-1"
          >
            ← {dm.back}
          </Link>

          {/* Wikipedia attribution */}
          <button className="inline-flex items-center gap-2 bg-[#e91e8c] hover:bg-[#c41677] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors tracking-wide">
            {dm.wikiLink}
            <span>→</span>
          </button>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
