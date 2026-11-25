import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight, ArrowDown, Heart } from "lucide-react";
import { LangProvider, useLang } from "@/useLang";

function Nav() {
  const { t, toggle } = useLang();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4">
      <div className="mx-auto max-w-6xl flex items-center justify-between rounded-full border-2 border-ink bg-cream/90 backdrop-blur-sm px-4 sm:px-6 py-2.5 shadow-[3px_3px_0_0_#1a1a1a]">
        <span className="font-display font-extrabold text-ink text-lg tracking-tight">
          krystal<span className="text-magenta">.</span>
        </span>
        <div className="flex items-center gap-1 sm:gap-5 text-sm font-medium">
          <a href="#about" className="hidden sm:inline hover:text-magenta transition-colors">
            {t.nav.about}
          </a>
          <a href="#work" className="hidden sm:inline hover:text-magenta transition-colors">
            {t.nav.work}
          </a>
          <a href="#contact" className="hidden sm:inline hover:text-magenta transition-colors">
            {t.nav.contact}
          </a>
          <button
            onClick={toggle}
            className="rounded-full border-2 border-ink bg-yellow px-3 py-1 font-mono font-bold text-ink hover:bg-magenta hover:text-white transition-colors text-xs"
            aria-label="Toggle language"
          >
            {t.nav.toggleTo}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative px-4 sm:px-8 pt-24 sm:pt-32 pb-12">
      <div className="mx-auto max-w-5xl">
        {/* Main big card */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] border-[3px] border-ink bg-white shadow-[8px_8px_0_0_#1a1a1a] overflow-hidden"
        >
          {/* Diagonal magenta band - top name */}
          <div className="relative overflow-hidden border-b-[3px] border-ink">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-magenta py-3 sm:py-5 -rotate-[2.5deg] origin-left -ml-[3%] w-[106%]"
            >
              <h1 className="font-display font-extrabold text-white text-4xl sm:text-7xl md:text-8xl tracking-tight text-center leading-none px-4">
                {h.bandTop}
              </h1>
            </motion.div>
          </div>

          {/* Yellow band - second name */}
          <div className="relative overflow-hidden border-b-[3px] border-ink">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-yellow py-3 sm:py-5 rotate-[2.5deg] origin-right -mr-[3%] w-[106%]"
            >
              <h2 className="font-display font-extrabold text-ink text-4xl sm:text-7xl md:text-8xl tracking-tight text-center leading-none px-4">
                {h.bandBottom}
              </h2>
            </motion.div>
          </div>

          {/* Body of card */}
          <div className="p-5 sm:p-10">
            {/* ID tags - speech bubble style */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              {h.idTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="relative inline-block rounded-2xl border-2 border-ink bg-cream px-3 py-1.5 text-xs sm:text-sm font-medium text-ink"
                >
                  {tag}
                  {/* tail */}
                  <span
                    className="absolute -bottom-[7px] left-4 h-3 w-3 border-2 border-ink bg-cream"
                    style={{ borderTop: "none", borderLeft: "none", transform: "rotate(-45deg)" }}
                  />
                </motion.span>
              ))}
            </div>

            {/* Quote box */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="border-l-4 border-magenta pl-4 sm:pl-6 mb-8"
            >
              <p className="font-display text-lg sm:text-2xl md:text-3xl leading-snug text-ink font-medium">
                "{h.quote}"
              </p>
              <p className="mt-2 text-sm font-mono text-ink/60">{h.tagline}</p>
            </motion.blockquote>

            {/* Capsule buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-yellow border-2 border-ink px-5 sm:px-7 py-2.5 sm:py-3 font-display font-bold text-ink text-sm sm:text-base shadow-[3px_3px_0_0_#1a1a1a] hover:shadow-[1px_1px_0_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                {h.ctaWork}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-magenta border-2 border-ink px-5 sm:px-7 py-2.5 sm:py-3 font-display font-bold text-white text-sm sm:text-base shadow-[3px_3px_0_0_#1a1a1a] hover:shadow-[1px_1px_0_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                {h.ctaContact}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-8"
        >
          <ArrowDown className="w-5 h-5 text-ink/40 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="about" className="px-4 sm:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_1.4fr] gap-6 sm:gap-10 items-start">
        {/* Section title card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border-[3px] border-ink bg-magenta shadow-[5px_5px_0_0_#1a1a1a] p-5 sm:p-7"
        >
          <p className="font-mono text-xs text-white/70 mb-2">01 / ABOUT</p>
          <h3 className="font-display font-extrabold text-white text-3xl sm:text-4xl leading-tight">
            {t.about.title}
          </h3>
        </motion.div>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="font-body text-base sm:text-lg leading-relaxed text-ink/85">
            {t.about.body}
          </p>

          {/* Skills */}
          <div className="mt-7">
            <p className="font-mono text-xs text-ink/50 mb-3 uppercase tracking-wider">
              {t.skills.title}
            </p>
            <div className="flex flex-wrap gap-3">
              {t.skills.items.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-default rounded-xl border-2 border-ink bg-white px-4 py-2.5 shadow-[3px_3px_0_0_#1a1a1a] transition-all hover:shadow-[1px_1px_0_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]"
                  style={{
                    backgroundColor: hovered === i ? "#ffd54f" : "#ffffff",
                  }}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-ink">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Work() {
  const { t, lang } = useLang();

  return (
    <section id="work" className="px-4 sm:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8 sm:mb-12"
        >
          <div className="rounded-xl border-[3px] border-ink bg-yellow px-4 py-2 shadow-[4px_4px_0_0_#1a1a1a]">
            <p className="font-mono text-xs text-ink/60">02 / WORK</p>
            <h3 className="font-display font-extrabold text-ink text-2xl sm:text-3xl">
              {t.work.title}
            </h3>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {t.work.projects.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group rounded-2xl border-[3px] border-ink bg-white shadow-[5px_5px_0_0_#1a1a1a] overflow-hidden hover:shadow-[2px_2px_0_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex flex-col"
            >
              {/* yellow title bar */}
              <div className="border-b-[3px] border-ink bg-yellow px-4 py-3 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wide">
                  {p.tag}
                </span>
                <span className="font-mono text-xs text-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-display font-bold text-base sm:text-lg text-ink leading-snug mb-3">
                  {p.title}
                </h4>
                <p className="font-body text-sm leading-relaxed text-ink/75 flex-1">
                  {p.desc}
                </p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-display font-bold text-sm text-magenta hover:text-magenta-dark transition-colors"
                  >
                    {lang === "zh" ? "查看" : "View"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Volunteer() {
  const { t } = useLang();
  const v = t.volunteer;

  return (
    <section className="px-4 sm:px-8 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 rounded-2xl border-[3px] border-ink bg-white shadow-[5px_5px_0_0_#1a1a1a] p-5 sm:p-6"
        >
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full border-[3px] border-ink bg-magenta">
            <Heart className="w-6 h-6 text-white" fill="white" />
          </div>
          <div>
            <p className="font-mono text-xs text-ink/50 mb-1">{v.title}</p>
            <p className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
              {v.role}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className="px-4 sm:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border-[3px] border-ink bg-ink shadow-[8px_8px_0_0_#e91e63] p-6 sm:p-12 text-center"
        >
          <p className="font-mono text-xs text-yellow mb-3">03 / CONTACT</p>
          <h3 className="font-display font-extrabold text-white text-3xl sm:text-5xl mb-8">
            {c.title}
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md mx-auto">
            <a
              href={`mailto:${c.email}`}
              className="group flex-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-yellow border-2 border-ink px-5 py-3 font-display font-bold text-ink text-sm shadow-[3px_3px_0_0_#000] hover:shadow-[1px_1px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <Mail className="w-4 h-4" />
              {c.emailLabel}
            </a>
            <a
              href={c.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-magenta border-2 border-ink px-5 py-3 font-display font-bold text-white text-sm shadow-[3px_3px_0_0_#000] hover:shadow-[1px_1px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <Linkedin className="w-4 h-4" />
              {c.linkedinLabel}
            </a>
          </div>

          <p className="mt-6 font-mono text-xs text-white/50 break-all">{c.email}</p>
        </motion.div>
      </div>
    </section>
  );
}

function MarqueeTape() {
  const { lang } = useLang();
  const items =
    lang === "zh"
      ? ["数据驱动决策", "Excel · Xero · PowerPoint", "市场分析", "内容运营", "USYD 商科研究生", "统计检验", "品牌竞争研究", "悉尼马拉松志愿者"]
      : ["Data-driven decisions", "Excel · Xero · PowerPoint", "Market Analysis", "Content Ops", "USYD Master of Commerce", "Statistical Testing", "Brand Competition", "Sydney Marathon Volunteer"];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative py-10 sm:py-16 overflow-hidden">
      <div className="bg-yellow border-y-[3px] border-ink py-4 -rotate-[3deg] w-[120%] -ml-[10%]">
        <div className="flex whitespace-nowrap animate-marquee">
          {repeated.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center font-display font-extrabold text-ink text-xl sm:text-3xl uppercase tracking-tight px-6"
            >
              {item}
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-magenta mx-6 border-2 border-ink" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="px-4 sm:px-8 pb-8 pt-4">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 border-t-2 border-ink/15 pt-6">
        <span className="font-display font-extrabold text-ink text-lg">
          krystal<span className="text-magenta">.</span>
        </span>
        <p className="font-mono text-xs text-ink/50">{t.contact.footer}</p>
      </div>
    </footer>
  );
}

function AppInner() {
  return (
    <div className="min-h-screen bg-cream paper-grain">
      <Nav />
      <Hero />
      <About />
      <Work />
      <MarqueeTape />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  );
}
