"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "A Grizi tem um dom raro: ela escuta o que o corpo está pedindo antes mesmo de você falar. Saí da primeira sessão sentindo que tinha dormido dez horas.",
    name: "Fernanda R.",
    role: "Cliente há 8 meses",
    num: "01",
  },
  {
    quote:
      "Cheguei com uma contratura no ombro que me perseguia há meses. Após três sessões, a dor reduziu 80%. Ela realmente estuda o seu caso.",
    name: "Marcos T.",
    role: "Cliente há 1 ano",
    num: "02",
  },
  {
    quote:
      "GZ Serenity virou parte essencial da minha rotina de autocuidado. Profissional impecável, ambiente acolhedor e resultados que você sente de verdade.",
    name: "Juliana M.",
    role: "Cliente há 5 meses",
    num: "03",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 pb-10 border-b border-purple/[0.07]"
        >
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold/70 text-[11px] tracking-[0.35em] uppercase font-light">Depoimentos</span>
            </div>
            <h2
              className="font-playfair font-bold text-purple leading-[0.94]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              O que dizem<br />
              <em className="italic text-gold">as clientes</em>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/grizi_capasso"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-purple/30 text-sm font-light hover:text-purple transition-colors whitespace-nowrap self-end"
          >
            @grizi_capasso no Instagram
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Large editorial quote list */}
        <div>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="group py-10 md:py-12 grid grid-cols-1 md:grid-cols-[3.5rem_1fr_auto] gap-5 md:gap-8 items-center border-b border-purple/[0.06] last:border-b-0"
            >
              {/* Index */}
              <span className="font-playfair text-3xl font-bold text-purple/[0.07] group-hover:text-gold/25 transition-colors duration-300 select-none hidden md:block">
                {t.num}
              </span>

              {/* Quote */}
              <div className="relative">
                <span className="absolute -top-3 -left-1 font-playfair text-7xl text-gold/[0.1] leading-none select-none pointer-events-none">
                  "
                </span>
                <p
                  className="font-playfair italic text-purple/72 leading-[1.45] relative z-10"
                  style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.55rem)" }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="md:text-right flex-shrink-0">
                <p className="text-purple text-sm font-semibold">{t.name}</p>
                <p className="text-purple/32 text-xs font-light mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
