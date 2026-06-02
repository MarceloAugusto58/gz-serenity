"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const photoY  = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%",  "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6],  [1, 0]);

  return (
    <section ref={ref} id="inicio" className="relative min-h-[100svh] bg-cream overflow-hidden">

      {/* Organic clip definition for desktop photo panel */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="gz-photo-clip" clipPathUnits="objectBoundingBox">
            {/* Curved cut on the left edge: top-left curves in, straight down from ~14% */}
            <path d="M 0.22 0 C 0.12 0 0.02 0.05 0 0.13 L 0 1 L 1 1 L 1 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ── MOBILE: photo banner at top ────────────────────────────── */}
      <div className="lg:hidden absolute top-0 inset-x-0 h-[44vh] z-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/grizi-hero.jpg"
            alt="Grizi Capasso, massoterapeuta em Dourados MS"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-dark/30" />
        </div>
        {/* Wave transition to cream */}
        <div
          className="absolute -bottom-1 inset-x-0 h-16 bg-cream"
          style={{ clipPath: "ellipse(65% 100% at 50% 100%)" }}
        />
      </div>

      {/* ── DESKTOP: organic photo panel, right side ───────────────── */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[46%] z-0">
        <div className="absolute inset-0" style={{ clipPath: "url(#gz-photo-clip)" }}>
          <motion.div
            className="absolute -top-[15%] inset-x-0 bottom-[-15%] bg-purple"
            style={{ y: photoY }}
          >
            {/* Atmospheric lighting */}
            <div className="absolute top-[18%] right-[22%] w-96 h-96 rounded-full bg-purple-light/30 blur-[130px]" />
            <div className="absolute bottom-[22%] left-[12%] w-72 h-72 rounded-full bg-gold/[0.05] blur-[100px]" />
            <div className="absolute top-[55%] right-[5%] w-48 h-48 rounded-full bg-purple-dark/50 blur-[60px]" />

            {/* Foto da Grizi */}
            <Image
              src="/grizi-hero.jpg"
              alt="Grizi Capasso, massoterapeuta em Dourados MS"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Warm gradient overlay — preserves legibilidade dos badges */}
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-dark/40 via-transparent to-purple-dark/20 pointer-events-none" />
          </motion.div>
        </div>

        {/* Floating location badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-12 left-10 z-10 bg-cream/96 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_16px_48px_rgba(61,31,92,0.14)]"
        >
          <p className="text-gold text-[10px] tracking-[0.32em] uppercase font-medium mb-1">Localização</p>
          <p className="text-purple text-sm font-semibold leading-snug">Dourados, MS</p>
          <p className="text-purple/40 text-xs font-light mt-0.5">GZ Serenity · Clínica Bella Face</p>
        </motion.div>

        {/* Vertical Instagram handle */}
        <motion.a
          href="https://www.instagram.com/grizi_capasso"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.55 }}
          className="absolute top-16 right-7 z-10 text-cream/[0.18] text-[11px] tracking-[0.28em] hover:text-gold/50 transition-colors duration-300"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          @grizi_capasso
        </motion.a>
      </div>

      {/* ── TEXT PANEL ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-end lg:justify-center min-h-[100svh] lg:pr-[46%]">
        <motion.div
          style={{ y: textY }}
          className="px-6 md:px-12 lg:px-20 xl:px-28 pt-[46vh] lg:pt-0 pb-16 lg:pb-0"
        >
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-10 h-px bg-gold flex-shrink-0" />
            <span className="text-purple/38 text-[11px] tracking-[0.38em] uppercase font-light">
              Massoterapeuta · Dourados, MS
            </span>
          </motion.div>

          {/* Headline — Playfair italic, large, line-by-line entrance */}
          <h1
            className="font-playfair italic text-purple leading-[0.91] mb-7"
            style={{ fontSize: "clamp(3.5rem, 7.8vw, 5.9rem)" }}
          >
            {[
              { delay: 0.20, el: <>Terapias</> },
              { delay: 0.28, el: <>que <span className="text-gold not-italic">acolhem</span>,</> },
              { delay: 0.36, el: <>aliviam e</> },
              { delay: 0.44, el: <>transformam</> },
            ].map(({ delay, el }, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, y: 56 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
              >
                {el}
              </motion.span>
            ))}
          </h1>

          {/* Animated gold rule */}
          <motion.div
            className="origin-left w-14 h-[1.5px] bg-gold mb-7"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.72, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.67 }}
            className="text-purple/55 text-[1.05rem] font-light max-w-[320px] leading-[1.82] mb-10"
          >
            Massagem terapêutica integrativa em Dourados, MS.
            Cuidado com intenção e presença real.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3.5 mb-14"
          >
            <a
              href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Gostaria%20de%20agendar."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-[0.9rem] bg-purple text-cream text-sm font-medium rounded-full
                         hover:bg-purple-light hover:shadow-[0_10px_40px_rgba(61,31,92,0.4)] hover:scale-[1.02]
                         transition-all duration-300 w-fit"
            >
              <MessageCircle
                size={16}
                className="group-hover:rotate-12 transition-transform duration-300 flex-shrink-0"
              />
              Agendar agora
            </a>

            <button
              onClick={() =>
                document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2.5 px-8 py-[0.9rem] border border-purple/15 text-purple/55
                         text-sm font-light rounded-full hover:border-purple/35 hover:text-purple
                         transition-all duration-300 w-fit"
            >
              Ver serviços <ArrowDown size={14} />
            </button>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex items-start gap-8 sm:gap-12 pt-8 border-t border-purple/[0.07]"
          >
            {[
              { v: "500+", l: "clientes atendidos" },
              { v: "3+",   l: "anos de experiência" },
              { v: "100%", l: "personalizado" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.12 + i * 0.09 }}
              >
                <p className="font-playfair text-[1.65rem] font-bold text-purple leading-none">{s.v}</p>
                <p className="text-purple/30 text-[11px] tracking-wide font-light mt-1.5">{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        style={{ opacity }}
        className="absolute bottom-9 left-[27%] -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-purple/20 text-[10px] tracking-[0.4em] uppercase">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple/15 to-transparent" />
      </motion.div>
    </section>
  );
}
