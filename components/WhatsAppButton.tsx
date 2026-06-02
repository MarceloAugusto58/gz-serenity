"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Gostaria%20de%20agendar%20uma%20massagem."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Agendar via WhatsApp"
    >
      {/* Label — expands on hover */}
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileHover={{ width: "auto", opacity: 1 }}
        transition={{ duration: 0.22 }}
        className="bg-white text-purple text-sm font-medium px-4 py-3 rounded-full whitespace-nowrap overflow-hidden shadow-[0_4px_20px_rgba(61,31,92,0.15)]"
      >
        Agendar
      </motion.span>

      {/* WhatsApp button */}
      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_36px_rgba(37,211,102,0.6)] transition-all duration-300 group-hover:scale-110 flex-shrink-0">
        <MessageCircle size={26} className="text-white fill-white" />
      </div>
    </motion.a>
  );
}
