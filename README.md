# GZ Serenity — Site Oficial

Site institucional da massoterapeuta **Grizi Capasso**, desenvolvido com design editorial premium.

🌐 **[gz-serenity.vercel.app](https://gz-serenity.vercel.app)**

---

## Sobre o projeto

Site mobile-first para GZ Serenity | Clínica Bella Face, com foco em conversão via WhatsApp e experiência visual de nível editorial.

**Paleta:**
- Creme `#F5F0E8` — fundo principal
- Roxo profundo `#3D1F5C` — cor primária
- Dourado `#C9A84C` — destaque e acentos

---

## Funcionalidades

- **Hero assimétrico** com clip-path orgânico e parallax
- **Seletor de sessão interativo** — avatar SVG clicável com protocolos prontos e cálculo de preço em tempo real
- **Geração automática de mensagem** para WhatsApp com áreas e valor estimado
- Animações com **Framer Motion**
- **SEO completo** — metadata, sitemap, robots.txt, JSON-LD (LocalBusiness)
- Cursor customizado (desktop)
- Botão flutuante do WhatsApp

---

## Stack

| Tecnologia | Versão |
|---|---|
| Next.js (App Router) | 14 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| Framer Motion | 11 |
| Lucide React | 0.414 |

---

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Deploy

O projeto está configurado para deploy contínuo na **Vercel**.

```bash
vercel --prod
```

---

## Estrutura

```
gz-serenity/
├── app/
│   ├── layout.tsx        # Fontes, metadata, JSON-LD
│   ├── page.tsx          # Composição das seções
│   └── globals.css       # Tokens de design e utilitários
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx          # Layout assimétrico + clip-path orgânico
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── BodyMassageSelector.tsx  # Seletor interativo com protocolos
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── HowToBook.tsx
│   ├── Location.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── CustomCursor.tsx
├── public/
│   ├── grizi-hero.jpg
│   └── grizi-sobre.jpg
└── tailwind.config.ts
```

---

## Adicionando fotos

Coloque os arquivos em `/public` e referencie com `/nome-do-arquivo.jpg`.  
O componente `next/image` já está configurado com `fill` + `object-cover` no Hero e na seção Sobre.

---

## Contato

**Grizi Capasso** — Massoterapeuta  
📍 Dourados, MS  
📱 [+55 67 99642-8381](https://wa.me/5567996428381)  
📸 [@grizi_capasso](https://www.instagram.com/grizi_capasso)
