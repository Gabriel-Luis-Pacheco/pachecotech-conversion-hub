# Pacheco Lab.

Landing page da comunidade gratuita Pacheco Lab., construída com Next.js,
React, TypeScript, GSAP, Framer Motion e React Three Fiber.

## Desenvolvimento

Requer Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run typecheck
npm test
```

## Estrutura

- `app/LandingPage.tsx`: conteúdo, navegação e interações da página;
- `app/OrbCanvas.tsx`: elemento visual WebGL com fallback em CSS;
- `app/globals.css`: tokens e sistema visual responsivo;
- `app/chatgpt-auth.ts`: helper de autenticação opcional preservado do projeto-base;
- `tests/rendered-html.test.mjs`: verificações de build, comunicação gratuita e links oficiais.

Os links oficiais de entrada ficam centralizados em `LandingPage.tsx`:

- WhatsApp: ação principal;
- Discord: ação complementar.

Não há checkout, cobrança ou integração com gateway de pagamento no projeto.
