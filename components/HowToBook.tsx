"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Escolha",
    description: "Explore os protocolos ou use o seletor interativo para montar sua sessão personalizada.",
  },
  {
    n: "02",
    title: "Mensagem",
    description: "Envie uma mensagem via WhatsApp. A Grizi responde rápido e confirma o melhor horário.",
  },
  {
    n: "03",
    title: "Relaxe",
    description: "Apareça e entregue o peso do dia. Deixe que as mãos certas cuidem do resto.",
  },
];

export default function HowToBook() {
  return (
    <section id="agendamento" className="bg-purple py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-4">Como agendar</p>
          <h2
            className="font-playfair font-bold italic text-cream leading-tight"
            style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)" }}
          >
            Simples assim
          </h2>
        </motion.div>

        {/* Steps — editorial horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-cream/[0.08] mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0"
            >
              <span className="font-playfair text-[5rem] md:text-[6rem] font-bold leading-none text-cream/[0.06] group-hover:text-gold/15 transition-colors duration-500 select-none block mb-4">
                {s.n}
              </span>
              <h3 className="font-playfair text-2xl font-semibold text-cream mb-3">{s.title}</h3>
              <p className="text-cream/40 text-sm font-light leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Gostaria%20de%20agendar%20uma%20sessão."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-9 py-4 bg-gold text-purple-dark font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] hover:scale-[1.02]"
          >
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            Agendar via WhatsApp
          </a>
          <p className="text-cream/25 text-sm font-light">Sem compromisso · Resposta rápida</p>
        </motion.div>
      </div>
    </section>
  );
}
