"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Massagem Terapêutica Integrativa",
    desc: "Técnica personalizada que une diferentes abordagens manuais para aliviar tensões profundas, restaurar o equilíbrio e promover bem-estar duradouro.",
    bullets: ["Alívio de dores crônicas", "Técnica adaptada ao seu corpo", "Equilíbrio físico e emocional"],
    duration: "60–90 min",
    tag: null,
  },
  {
    n: "02",
    title: "Protocolos Corporais",
    desc: "Drenagem linfática, modelagem e protocolos estéticos com técnicas avançadas. Resultados visíveis, cuidado real.",
    bullets: ["Drenagem linfática manual", "Modelagem corporal", "Redução de inchaço"],
    duration: "60 min",
    tag: null,
  },
  {
    n: "03",
    title: "Terapias de Relaxamento",
    desc: "Sessões imersivas para aliviar estresse, desacelerar a mente e reequilibrar o sistema nervoso. Para quem precisa de uma pausa verdadeira.",
    bullets: ["Redução do estresse", "Melhora do sono", "Reequilíbrio do sistema nervoso"],
    duration: "45–60 min",
    tag: null,
  },
  {
    n: "04",
    title: "Sessão Personalizada",
    desc: "Atendimento 100% sob medida — escolha as regiões no seletor interativo e a Grizi monta o protocolo ideal para você.",
    bullets: ["Você escolhe as áreas", "Protocolo exclusivo", "Preço calculado na hora"],
    duration: "Variável",
    tag: "Personalizada",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-purple py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-10 border-b border-cream/[0.06]"
        >
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-gold/50" />
              <span className="text-gold/55 text-[11px] tracking-[0.35em] uppercase font-light">Protocolos</span>
            </div>
            <h2
              className="font-playfair italic font-bold text-cream leading-[0.94]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)" }}
            >
              O que posso<br />
              <span className="text-gold not-italic">fazer por você</span>
            </h2>
          </div>

          <a
            href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Quero%20saber%20sobre%20os%20valores."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-cream/30 text-sm font-light hover:text-gold transition-colors whitespace-nowrap self-end"
          >
            Consultar preços
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Editorial numbered list */}
        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.09, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group py-9 md:py-11 grid grid-cols-1 md:grid-cols-[4.5rem_1fr_9rem] gap-4 md:gap-8 items-start border-b border-cream/[0.06] last:border-b-0 hover:pl-2 transition-all duration-400"
            >
              {/* Number */}
              <span
                className="font-playfair font-bold leading-none text-cream/[0.08] group-hover:text-gold/30 transition-colors duration-300 select-none hidden md:block"
                style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)" }}
              >
                {s.n}
              </span>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <h3
                    className="font-playfair font-semibold text-cream group-hover:text-gold transition-colors duration-300 leading-snug"
                    style={{ fontSize: "clamp(1.15rem, 2vw, 1.45rem)" }}
                  >
                    {s.title}
                  </h3>
                  {s.tag && (
                    <span className="text-[10px] tracking-[0.18em] uppercase text-gold/60 border border-gold/20 px-2.5 py-0.5 rounded-full font-sans flex-shrink-0">
                      {s.tag}
                    </span>
                  )}
                </div>
                <p className="text-cream/45 text-sm font-light leading-relaxed max-w-xl mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.bullets.map(b => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1.5 text-[11px] text-gold/55 font-light tracking-wide"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Duration + cta */}
              <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 mt-0 md:mt-1">
                <span className="text-cream/20 text-xs font-light tracking-wide">{s.duration}</span>
                <a
                  href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Gostaria%20de%20saber%20mais."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-gold/60 text-xs font-light hover:text-gold flex items-center gap-1"
                >
                  Saiba mais <ArrowUpRight size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.65 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Gostaria%20de%20agendar%20uma%20sessão."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-purple-dark text-sm font-semibold rounded-full
                       hover:bg-gold-light hover:shadow-[0_8px_32px_rgba(201,168,76,0.35)] hover:scale-[1.02]
                       transition-all duration-300"
          >
            Agendar sessão
          </a>
          <p className="text-cream/20 text-sm font-light">
            Atendimento personalizado · Dourados, MS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
