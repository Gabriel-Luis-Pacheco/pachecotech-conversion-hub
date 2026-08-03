# Pacheco Lab

Landing page da comunidade gratuita Pacheco Lab, construída com Next.js,
React e TypeScript.

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

- `app/LandingPage.tsx`: Server Component com o conteúdo e os links oficiais;
- `app/MobileMenu.tsx`: único componente cliente, responsável pelo menu mobile;
- `app/globals.css`: tokens, estilos responsivos e estados acessíveis;
- `tests/rendered-html.test.mjs`: verificações de build, clareza dos textos e links.

Os links oficiais do WhatsApp e do Discord ficam centralizados em
`app/LandingPage.tsx`. Não há checkout, cobrança ou integração com gateway de
pagamento.

## Métricas

A página usa o Vercel Web Analytics para medir pageviews sem adicionar um
gerenciador de tags. Todos os links de entrada possuem os atributos
`data-cta-channel` e `data-cta-placement`, que identificam o canal e a posição
do CTA no HTML.

Eventos personalizados de entrada não foram ativados porque o projeto está no
plano Hobby da Vercel. Os atributos deixam a página preparada para essa medição
caso o recurso seja habilitado no futuro.
