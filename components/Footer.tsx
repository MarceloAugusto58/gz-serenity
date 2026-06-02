import { Instagram, MessageCircle, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Serviços",    href: "#servicos"          },
  { label: "Sua Sessão",  href: "#monte-sua-sessao"  },
  { label: "Sobre",       href: "#sobre"             },
  { label: "Depoimentos", href: "#depoimentos"       },
  { label: "Agendamento", href: "#agendamento"       },
  { label: "Localização", href: "#localizacao"       },
];

export default function Footer() {
  return (
    <footer className="bg-purple-dark pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16 mb-14">

          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-playfair text-2xl font-bold italic text-gold mb-1">GZ Serenity</p>
            <p className="text-cream/20 text-[10px] tracking-[0.25em] uppercase mb-5">Clínica Bella Face</p>
            <p className="text-cream/40 text-sm font-light leading-relaxed">
              Terapias que acolhem, aliviam e transformam. Massoterapeuta humanizada em Dourados, MS.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-cream/20 text-[10px] tracking-[0.25em] uppercase mb-5">Navegação</p>
            <ul className="space-y-3">
              {footerLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/40 text-sm font-light hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-cream/20 text-[10px] tracking-[0.25em] uppercase mb-5">Contato</p>
            <div className="space-y-4">
              <a
                href="https://wa.me/5567996428381?text=Olá%20Grizi!%20Gostaria%20de%20agendar."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/40 text-sm font-light hover:text-gold transition-colors group"
              >
                <MessageCircle size={14} className="flex-shrink-0" />
                +55 67 99642-8381
              </a>
              <a
                href="https://www.instagram.com/grizi_capasso"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/40 text-sm font-light hover:text-gold transition-colors group"
              >
                <Instagram size={14} className="flex-shrink-0" />
                @grizi_capasso
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-cream/20 text-xs pt-2">Dourados, MS — Brasil</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/[0.07] mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/15 text-xs font-light">
            © {new Date().getFullYear()} GZ Serenity | Clínica Bella Face — Grizi Capasso. Todos os direitos reservados.
          </p>
          <p className="text-cream/10 text-xs">Massoterapeuta em Dourados, MS</p>
        </div>
      </div>
    </footer>
  );
}
