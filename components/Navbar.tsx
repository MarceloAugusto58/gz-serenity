"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Serviços",    href: "#servicos"         },
  { label: "Sua Sessão",  href: "#monte-sua-sessao" },
  { label: "Sobre",       href: "#sobre"            },
  { label: "Depoimentos", href: "#depoimentos"      },
  { label: "Localização", href: "#localizacao"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/92 backdrop-blur-md border-b border-purple/[0.06] py-3.5 shadow-[0_1px_24px_rgba(61,31,92,0.06)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col leading-none group text-left"
          >
            <span className="font-playfair text-[1.25rem] font-bold italic text-purple group-hover:text-gold transition-colors duration-300">
              GZ Serenity
            </span>
            <span className="text-[8.5px] text-purple/28 tracking-[0.28em] uppercase font-light mt-0.5">
              Clínica Bella Face
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  className="text-[13px] text-purple/45 hover:text-purple transition-colors duration-200 font-light tracking-wide"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Gostaria%20de%20agendar."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-purple text-cream text-[13px] font-medium rounded-full
                       hover:bg-purple-light hover:shadow-[0_4px_24px_rgba(61,31,92,0.35)] transition-all duration-300"
          >
            Agendar
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-purple/65 hover:text-purple transition-colors p-1"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col justify-center items-center gap-7 lg:hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-purple/45 hover:text-purple transition-colors"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>

            {/* Brand in menu */}
            <p className="font-playfair text-sm italic text-gold/70 mb-2 tracking-wide">GZ Serenity</p>

            {/* Nav links */}
            {links.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => go(l.href)}
                className="font-playfair text-[2.2rem] italic font-bold text-purple/75 hover:text-gold transition-colors duration-200"
              >
                {l.label}
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Gostaria%20de%20agendar."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3.5 bg-purple text-cream text-sm font-medium rounded-full hover:bg-purple-light transition-all duration-300"
            >
              Agendar agora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
