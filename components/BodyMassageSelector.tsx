"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, RotateCcw, Clock, Banknote, Sparkles } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────── */
const REGIONS = [
  { id: "cabeca",  label: "Cabeça",   price: 30,  duration: 15, desc: "Massagem craniana — alivia enxaquecas e tensão mental" },
  { id: "pescoco", label: "Pescoço",  price: 25,  duration: 10, desc: "Liberação cervical e rigidez muscular profunda" },
  { id: "ombros",  label: "Ombros",   price: 40,  duration: 15, desc: "Liberação de pontos-gatilho nos trapézios" },
  { id: "costas",  label: "Costas",   price: 60,  duration: 20, desc: "Massagem dorsal profunda — lombalgia e tensões crônicas" },
  { id: "abdomen", label: "Abdômen",  price: 40,  duration: 15, desc: "Drenagem abdominal e massagem visceral suave" },
  { id: "bracos",  label: "Braços",   price: 35,  duration: 15, desc: "Drenagem linfática dos membros superiores" },
  { id: "maos",    label: "Mãos",     price: 25,  duration: 10, desc: "Reflexologia — ideal para quem usa computador" },
  { id: "coxas",   label: "Coxas",    price: 45,  duration: 15, desc: "Drenagem, modelagem e circulação" },
  { id: "pernas",  label: "Pernas",   price: 45,  duration: 15, desc: "Alívio de inchaço e peso nos membros inferiores" },
  { id: "pes",     label: "Pés",      price: 35,  duration: 15, desc: "Reflexologia podal — conectada a todo o corpo" },
] as const;

type RegionId = (typeof REGIONS)[number]["id"];

const PROTOCOLS: {
  id: string;
  label: string;
  sub: string;
  regions: RegionId[];
  color: string;
}[] = [
  {
    id: "relaxamento",
    label: "Relaxamento Total",
    sub: "Foco em tensão e estresse",
    regions: ["cabeca", "pescoco", "ombros", "costas"],
    color: "from-purple/[0.08] to-purple/[0.04]",
  },
  {
    id: "drenagem",
    label: "Drenagem Express",
    sub: "Circulação e leveza",
    regions: ["abdomen", "coxas", "pernas", "pes"],
    color: "from-gold/[0.1] to-gold/[0.04]",
  },
  {
    id: "cervical",
    label: "Alívio Cervical",
    sub: "Pescoço e ombros",
    regions: ["cabeca", "pescoco", "ombros"],
    color: "from-purple/[0.08] to-purple/[0.04]",
  },
  {
    id: "corpo-inteiro",
    label: "Corpo Completo",
    sub: "Sessão exclusiva integral",
    regions: REGIONS.map((r) => r.id) as RegionId[],
    color: "from-gold/[0.12] to-gold/[0.05]",
  },
];

const ZONE_RENDER_ORDER: RegionId[] = [
  "pes", "pernas", "coxas", "abdomen", "maos", "bracos", "costas", "ombros", "pescoco", "cabeca",
];
const CHIPS: RegionId[] = [
  "cabeca", "pescoco", "ombros", "costas", "abdomen", "bracos", "maos", "coxas", "pernas", "pes",
];

/* ─── Zone colour tokens ─────────────────────────────────────────── */
const C = {
  idle:   { fill: "rgba(61,31,92,0.055)", stroke: "rgba(61,31,92,0.18)",   sw: 0.7 },
  hover:  { fill: "rgba(201,168,76,0.18)", stroke: "rgba(201,168,76,0.65)", sw: 1.2 },
  active: { fill: "rgba(201,168,76,0.32)", stroke: "rgba(201,168,76,1)",    sw: 1.8 },
};

/* ─── SVG Zone component ─────────────────────────────────────────── */
type ZoneProps = {
  id: RegionId;
  sel: boolean;
  hov: boolean;
  onClick: () => void;
  onEnter: () => void;
  onLeave: () => void;
};

function Zone({ id, sel, hov, onClick, onEnter, onLeave }: ZoneProps) {
  const s   = sel ? C.active : hov ? C.hover : C.idle;
  const flt = sel ? "url(#gz-glow)" : "none";
  const pp  = { fill: s.fill, stroke: s.stroke, strokeWidth: s.sw, filter: flt, className: "cursor-pointer", onClick, onMouseEnter: onEnter, onMouseLeave: onLeave };
  const gp  = { onClick, onMouseEnter: onEnter, onMouseLeave: onLeave, className: "cursor-pointer" };

  switch (id) {
    case "cabeca":  return <ellipse {...pp} cx="100" cy="36" rx="27" ry="30" />;
    case "pescoco": return <path {...pp} d="M91 65 L109 65 L112 84 L88 84 Z" />;
    case "ombros":  return (
      <g {...gp}>
        <path fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt}
          d="M57 93 Q64 81 88 84 L84 111 Q68 116 57 108 Z" />
        <path fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt}
          d="M143 93 Q136 81 112 84 L116 111 Q132 116 143 108 Z" />
      </g>
    );
    case "costas":  return <path {...pp} d="M84 111 L116 111 Q130 124 128 150 L72 150 Q70 124 84 111 Z" />;
    case "abdomen": return <path {...pp} d="M72 150 L128 150 Q134 170 130 190 Q115 200 100 200 Q85 200 70 190 Q66 170 72 150 Z" />;
    case "bracos":  return (
      <g {...gp}>
        <path fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt}
          d="M53 97 L46 99 L42 194 L51 196 L55 112 Z" />
        <path fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt}
          d="M147 97 L154 99 L158 194 L149 196 L145 112 Z" />
      </g>
    );
    case "maos":    return (
      <g {...gp}>
        <ellipse fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt} cx="46" cy="206" rx="13" ry="11" />
        <ellipse fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt} cx="154" cy="206" rx="13" ry="11" />
      </g>
    );
    case "coxas":   return (
      <g {...gp}>
        <path fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt}
          d="M70 190 Q85 200 100 200 L96 286 L64 283 Q62 238 70 190 Z" />
        <path fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt}
          d="M130 190 Q115 200 100 200 L104 286 L136 283 Q138 238 130 190 Z" />
      </g>
    );
    case "pernas":  return (
      <g {...gp}>
        <path fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt}
          d="M64 283 L96 286 L92 376 L61 374 Z" />
        <path fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt}
          d="M104 286 L136 283 L139 374 L108 376 Z" />
      </g>
    );
    case "pes":     return (
      <g {...gp}>
        <ellipse fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt} cx="76"  cy="387" rx="21" ry="11" />
        <ellipse fill={s.fill} stroke={s.stroke} strokeWidth={s.sw} filter={flt} cx="124" cy="387" rx="21" ry="11" />
      </g>
    );
    default: return null;
  }
}

/* ─── Main component ─────────────────────────────────────────────── */
export default function BodyMassageSelector() {
  const [selected, setSelected] = useState<Set<RegionId>>(new Set());
  const [hovered,  setHovered]  = useState<RegionId | null>(null);
  const [activeProtocol, setActiveProtocol] = useState<string | null>(null);

  const toggle = (id: RegionId) =>
    setSelected(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  const applyProtocol = (pId: string) => {
    if (activeProtocol === pId) {
      setSelected(new Set());
      setActiveProtocol(null);
      return;
    }
    const p = PROTOCOLS.find(x => x.id === pId)!;
    setSelected(new Set(p.regions));
    setActiveProtocol(pId);
  };

  const selectedArr   = REGIONS.filter(r => selected.has(r.id));
  const totalPrice    = selectedArr.reduce((s, r) => s + r.price, 0);
  const totalDuration = selectedArr.reduce((s, r) => s + r.duration, 0);
  const activeRegion  = hovered ? REGIONS.find(r => r.id === hovered) : null;

  const waMsg = encodeURIComponent(
    `Olá Grizi! 🌿 Quero agendar uma sessão personalizada:\n\n` +
    selectedArr.map(r => `• ${r.label} — R$ ${r.price},00 (${r.duration} min)`).join("\n") +
    `\n\n💰 Total estimado: R$ ${totalPrice},00\n⏱️ Duração: ${totalDuration} min\n\nPodemos confirmar?`
  );

  return (
    <section id="monte-sua-sessao" className="bg-cream py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={12} className="text-gold" />
            <span className="text-gold/75 text-[11px] tracking-[0.35em] uppercase font-light">
              Experiência personalizada
            </span>
          </div>
          <h2
            className="font-playfair italic font-bold text-purple leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}
          >
            Monte a sua{" "}
            <span className="text-gold not-italic">sessão ideal</span>
          </h2>
          <p className="text-purple/50 text-base font-light max-w-lg leading-relaxed">
            Escolha um protocolo pronto ou selecione as regiões manualmente. O valor e a mensagem para WhatsApp são gerados automaticamente.
          </p>
        </motion.div>

        {/* ── Protocol presets ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {PROTOCOLS.map((p, i) => {
            const isActive = activeProtocol === p.id;
            const dur = REGIONS
              .filter(r => p.regions.includes(r.id))
              .reduce((s, r) => s + r.duration, 0);
            const price = REGIONS
              .filter(r => p.regions.includes(r.id))
              .reduce((s, r) => s + r.price, 0);

            return (
              <motion.button
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                onClick={() => applyProtocol(p.id)}
                className={`group relative text-left p-4 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "border-gold bg-purple text-cream shadow-[0_8px_32px_rgba(61,31,92,0.25)]"
                    : "border-purple/10 bg-white hover:border-purple/25 hover:shadow-[0_4px_20px_rgba(61,31,92,0.07)]"
                }`}
              >
                {!isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                )}
                <div className="relative">
                  <p className={`text-sm font-semibold mb-0.5 leading-snug ${isActive ? "text-cream" : "text-purple"}`}>
                    {p.label}
                  </p>
                  <p className={`text-[11px] font-light mb-3 ${isActive ? "text-cream/60" : "text-purple/40"}`}>
                    {p.sub}
                  </p>
                  <div className={`flex items-center gap-2 text-[11px] ${isActive ? "text-gold" : "text-purple/35"}`}>
                    <span>{dur} min</span>
                    <span>·</span>
                    <span>R$ {price}</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-purple/[0.06]" />
          <span className="text-purple/25 text-[11px] tracking-[0.3em] uppercase font-light">ou selecione manualmente</span>
          <div className="flex-1 h-px bg-purple/[0.06]" />
        </div>

        {/* ── Main grid: SVG + Info panel ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* SVG column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Avatar card */}
            <div className="relative bg-white border border-purple/[0.07] rounded-3xl p-6 shadow-[0_4px_40px_rgba(61,31,92,0.07)] w-full max-w-sm mx-auto">

              {/* Hover tooltip */}
              <AnimatePresence>
                {activeRegion && (
                  <motion.div
                    key={activeRegion.id}
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0,  scale: 1 }}
                    exit={{ opacity: 0, y: -6,  scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 bg-purple rounded-2xl px-4 py-2.5 text-center min-w-[200px] shadow-[0_8px_28px_rgba(61,31,92,0.22)]"
                  >
                    <p className="text-gold text-xs font-semibold mb-0.5">{activeRegion.label}</p>
                    <p className="text-cream/55 text-[11px] leading-snug font-light">{activeRegion.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-center text-purple/25 text-[10px] tracking-[0.28em] uppercase mb-5">
                Toque para selecionar
              </p>

              <svg
                viewBox="0 0 200 408"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxHeight: 500 }}
              >
                <defs>
                  <filter id="gz-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Centre guide line */}
                <line
                  x1="100" y1="64" x2="100" y2="378"
                  stroke="rgba(61,31,92,0.05)" strokeWidth="0.5"
                  strokeDasharray="3 5" pointerEvents="none"
                />

                {/* Body zones in back-to-front order */}
                {ZONE_RENDER_ORDER.map(id => (
                  <Zone
                    key={id}
                    id={id}
                    sel={selected.has(id)}
                    hov={hovered === id}
                    onClick={() => { toggle(id); setActiveProtocol(null); }}
                    onEnter={() => setHovered(id)}
                    onLeave={() => setHovered(null)}
                  />
                ))}
              </svg>

              {selected.size > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => { setSelected(new Set()); setActiveProtocol(null); }}
                  className="absolute bottom-4 right-4 flex items-center gap-1.5 text-purple/25 text-xs hover:text-gold transition-colors"
                >
                  <RotateCcw size={10} /> Limpar
                </motion.button>
              )}
            </div>

            {/* Chip row */}
            <div className="flex flex-wrap justify-center gap-2 max-w-sm w-full">
              {CHIPS.map(id => {
                const r   = REGIONS.find(r => r.id === id)!;
                const sel = selected.has(id);
                return (
                  <button
                    key={id}
                    onClick={() => { toggle(id); setActiveProtocol(null); }}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                      sel
                        ? "bg-gold border-gold text-purple-dark"
                        : "bg-transparent border-purple/12 text-purple/45 hover:border-purple/30 hover:text-purple"
                    }`}
                  >
                    {r.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Info / summary panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white border border-purple/[0.07] rounded-3xl p-7 shadow-[0_4px_40px_rgba(61,31,92,0.07)] flex flex-col gap-5 lg:sticky lg:top-28"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-playfair text-xl font-semibold text-purple">Sua sessão</h3>
              {selected.size > 0 && (
                <span className="text-[11px] text-gold border border-gold/30 bg-gold/[0.08] rounded-full px-2.5 py-0.5">
                  {selected.size} {selected.size === 1 ? "área" : "áreas"}
                </span>
              )}
            </div>

            <AnimatePresence mode="wait">
              {selected.size === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full border border-purple/[0.08] flex items-center justify-center">
                    <span className="font-playfair text-2xl italic text-purple/15">GC</span>
                  </div>
                  <p className="text-purple/25 text-sm font-light leading-relaxed max-w-[200px]">
                    Escolha um protocolo acima ou selecione as regiões no avatar
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="filled"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-3"
                >
                  <div className="space-y-2">
                    <AnimatePresence>
                      {selectedArr.map(r => (
                        <motion.div
                          key={r.id}
                          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22 }}
                          className="flex items-center justify-between p-3 bg-cream rounded-xl overflow-hidden"
                        >
                          <div>
                            <p className="text-purple text-sm font-medium">{r.label}</p>
                            <p className="text-purple/35 text-xs font-light">{r.duration} min</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-gold text-sm font-semibold">R$ {r.price}</span>
                            <button
                              onClick={() => { toggle(r.id); setActiveProtocol(null); }}
                              className="text-purple/20 hover:text-red-400/60 transition-colors text-xl leading-none"
                            >
                              ×
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  <div className="gold-line" />

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-purple/40 text-sm font-light">
                        <Clock size={12} />
                        Duração estimada
                      </div>
                      <span className="text-purple text-sm font-medium">{totalDuration} min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-purple/40 text-sm font-light">
                        <Banknote size={12} />
                        Total estimado
                      </div>
                      <span className="text-gold text-2xl font-bold font-playfair">R$ {totalPrice}</span>
                    </div>
                  </div>

                  <p className="text-purple/20 text-[10px] font-light text-center leading-relaxed">
                    * Valores estimados. A Grizi confirma o preço final no agendamento.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <a
              href={
                selected.size > 0
                  ? `https://wa.me/5567996428381?text=${waMsg}`
                  : "https://wa.me/5567996428381?text=Olá%20Grizi!%20Gostaria%20de%20agendar%20uma%20sessão."
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-medium text-sm transition-all duration-300 ${
                selected.size > 0
                  ? "bg-gold text-purple-dark hover:bg-gold-light hover:shadow-[0_8px_28px_rgba(201,168,76,0.35)] hover:scale-[1.01]"
                  : "bg-purple/[0.05] text-purple/40 border border-purple/[0.08] hover:border-purple/20 hover:text-purple/60"
              }`}
            >
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
              {selected.size > 0 ? "Enviar sessão no WhatsApp" : "Agendar via WhatsApp"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
