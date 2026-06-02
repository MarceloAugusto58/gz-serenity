"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1.001+", label: "seguidores no Instagram" },
  { value: "500+",   label: "clientes atendidos"      },
  { value: "3+",     label: "anos de experiência"     },
  { value: "100%",   label: "atendimento humanizado"  },
];

export default function Stats() {
  return (
    <section className="bg-cream">
      <div className="gold-line" />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className={`group py-10 px-6 md:px-8 flex flex-col items-start gap-1.5 ${
                i < 3  ? "border-r border-purple/[0.06]" : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-purple/[0.06]" : ""}`}
            >
              <span
                className="font-playfair font-bold text-purple leading-none group-hover:text-gold transition-colors duration-400"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
              >
                {s.value}
              </span>
              <span className="text-purple/38 text-sm font-light tracking-wide">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gold-line" />
    </section>
  );
}
