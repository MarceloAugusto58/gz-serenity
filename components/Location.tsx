"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const info = [
  { icon: MapPin,    label: "Localização", value: "Dourados, MS",       sub: "Mato Grosso do Sul — Brasil",   href: null },
  { icon: Clock,     label: "Horário",     value: "Seg–Sex: 9h às 19h", sub: "Sáb: 9h às 14h",               href: null },
  { icon: Phone,     label: "WhatsApp",    value: "+55 67 99642-8381",  sub: "Clique para conversar",          href: "https://wa.me/5567996428381" },
  { icon: Instagram, label: "Instagram",   value: "@grizi_capasso",      sub: "Acompanhe no Instagram",        href: "https://www.instagram.com/grizi_capasso" },
];

export default function Location() {
  return (
    <section id="localizacao" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-gold/70 text-xs tracking-[0.3em] uppercase mb-4">Onde estamos</p>
          <h2
            className="font-playfair font-bold text-purple leading-tight"
            style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)" }}
          >
            Atendimento em{" "}
            <em className="italic text-gold">Dourados, MS</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {info.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="p-5 bg-cream border border-purple/[0.07] rounded-2xl hover:border-gold/30 hover:shadow-[0_4px_20px_rgba(201,168,76,0.1)] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-purple/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                      <Icon size={14} className="text-purple/50 group-hover:text-gold transition-colors" />
                    </div>
                    <span className="text-purple/30 text-[10px] tracking-[0.2em] uppercase">{item.label}</span>
                  </div>
                  <p className="text-purple text-sm font-medium mb-0.5">{item.value}</p>
                  <p className="text-purple/35 text-xs font-light">{item.sub}</p>
                </motion.div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="aspect-[4/3] bg-cream border border-purple/[0.07] rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-5 relative">
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: "linear-gradient(#3D1F5C 1px, transparent 1px), linear-gradient(90deg, #3D1F5C 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple/[0.02] to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-purple/[0.08] border border-purple/15 flex items-center justify-center">
                  <MapPin size={26} className="text-purple/60" />
                </div>
                <div className="text-center">
                  <p className="font-playfair text-xl font-semibold text-purple mb-1">Dourados, MS</p>
                  <p className="text-purple/35 text-sm font-light">GZ Serenity | Clínica Bella Face</p>
                </div>
                <a
                  href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Qual%20é%20o%20endereço%20da%20clínica?"
                  target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-purple/15 text-purple/60 text-sm rounded-full hover:border-purple/40 hover:text-purple hover:bg-purple/[0.04] transition-all"
                >
                  Consultar endereço →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
