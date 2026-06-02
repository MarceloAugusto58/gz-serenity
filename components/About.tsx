"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const highlights = [
  "Atendimento humanizado",
  "Técnicas integradas",
  "Espaço reservado",
  "100% personalizado",
];

export default function About() {
  return (
    <section id="sobre" className="bg-offwhite py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Photo side ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-1"
          >
            {/* Decorative ring behind photo */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-[2.5rem] border border-purple/[0.06] hidden lg:block" />

            {/* Main photo frame */}
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-cream max-w-[400px] mx-auto lg:max-w-none">
              {/* Foto da Grizi */}
              <Image
                src="/grizi-sobre.jpg"
                alt="Grizi Capasso, massoterapeuta"
                fill
                className="object-cover object-center"
              />

              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-gold/25" />
              <div className="absolute top-6 right-6 w-10 h-10 border-r-2 border-t-2 border-gold/25" />
              <div className="absolute bottom-6 left-6 w-10 h-10 border-l-2 border-b-2 border-gold/25" />
              <div className="absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-gold/25" />
            </div>

            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.65 }}
              className="absolute -bottom-5 -right-4 lg:-right-8 bg-purple rounded-2xl px-5 py-4 shadow-[0_16px_48px_rgba(61,31,92,0.24)]"
            >
              <p className="text-gold/55 text-[10px] tracking-[0.22em] uppercase mb-1">Especialidade</p>
              <p className="text-cream text-sm font-semibold">Massagem Integrativa</p>
              <p className="text-cream/35 text-xs font-light mt-0.5">Dourados, MS</p>
            </motion.div>

            {/* Decorative ring top-right */}
            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full border border-gold/[0.14] hidden lg:block" />
            <div className="absolute -top-9 -right-9 w-28 h-28 rounded-full border border-gold/[0.07] hidden lg:block" />
          </motion.div>

          {/* ── Text side ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold/70 text-[11px] tracking-[0.35em] uppercase font-light">Sobre mim</span>
            </div>

            <h2
              className="font-playfair font-bold italic text-purple leading-[1.03] mb-8"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.1rem)" }}
            >
              Massoterapeuta<br />
              <span className="not-italic">humanizada,</span><br />
              presente de verdade
            </h2>

            {/* Pull-quote */}
            <div className="relative pl-6 mb-8 border-l-2 border-gold">
              <span className="absolute -top-3 -left-2 font-playfair text-6xl text-gold/20 leading-none select-none">"</span>
              <blockquote className="font-playfair text-lg italic text-purple/65 leading-relaxed">
                Cada corpo carrega uma história, e cada sessão é uma oportunidade de escuta real — sem pressa, sem fórmula pronta.
              </blockquote>
            </div>

            <p className="text-purple/52 text-base font-light leading-[1.85] mb-4">
              Sou Grizi Capasso, massoterapeuta com formação em terapias corporais integrativas. Atendo em{" "}
              <strong className="text-purple font-medium">Dourados, MS</strong>, na GZ Serenity | Clínica Bella Face,
              onde cada sessão começa com uma conversa honesta sobre o que seu corpo precisa.
            </p>
            <p className="text-purple/52 text-base font-light leading-[1.85] mb-10">
              Aqui não existe protocolo genérico. Existe intenção, presença e técnica a serviço do seu bem-estar.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 mb-11">
              {highlights.map(h => (
                <div key={h} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-purple/58 text-sm font-light">{h}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Quero%20saber%20mais%20sobre%20os%20seus%20atendimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-purple font-medium text-sm hover:text-gold transition-colors duration-300"
            >
              Conversar com a Grizi
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
