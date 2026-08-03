import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("builds the production-ready Next.js application", async () => {
  const buildId = await readFile(new URL("../.next/BUILD_ID", import.meta.url), "utf8");
  assert.ok(buildId.trim().length > 0);
  await access(new URL("../.next/server/app/index.html", import.meta.url));
});

test("presents the requested narrative in the intended order", async () => {
  const page = await readFile(new URL("../app/LandingPage.tsx", import.meta.url), "utf8");

  assert.match(page, /Você não precisa aprender tecnologia sozinho\./);
  assert.match(page, /Comunidade gratuita de tecnologia/);
  assert.match(page, /Ajuda prática para aprender e continuar/);
  assert.match(page, /Uma comunidade feita por pessoas reais/);
  assert.match(page, /Escolha onde participar/);
  assert.match(page, /Dúvidas antes de entrar/);
  assert.match(page, /Entre pelo espaço que combina mais com você\./);

  const order = [
    'id="inicio"',
    'id="beneficios"',
    'className="section founder-section"',
    'id="canais"',
    'id="duvidas"',
    'className="section final-cta-section"',
    'className="site-footer"',
  ].map((marker) => page.indexOf(marker));

  assert.ok(order.every((position) => position >= 0));
  assert.deepEqual(order, [...order].sort((a, b) => a - b));
});

test("uses explicit, recognizable and measurable entry actions", async () => {
  const page = await readFile(new URL("../app/LandingPage.tsx", import.meta.url), "utf8");

  assert.ok((page.match(/Entrar no grupo do WhatsApp/g) ?? []).length >= 3);
  assert.ok((page.match(/Entrar no servidor do Discord/g) ?? []).length >= 3);
  assert.match(page, /function WhatsAppIcon/);
  assert.match(page, /function DiscordIcon/);
  assert.match(page, /data-cta-channel=\{channel\}/);
  assert.match(page, /data-cta-placement=\{placement\}/);
  assert.match(page, /placement="header"/);
  assert.match(page, /placement="hero"/);
  assert.match(page, /placement="channel-section"/);
  assert.match(page, /placement="final"/);
  assert.match(page, /https:\/\/chat\.whatsapp\.com\/GaIYpxCJBLSKmv4L863dFB/);
  assert.match(page, /https:\/\/discord\.gg\/9vxmxCFkDq/);

  assert.doesNotMatch(page, /Entrar gratuitamente na comunidade|Participar agora|Conhecer o Discord/);
  assert.doesNotMatch(page, /pay\.kiwify\.com\.br|CheckoutButton|CHECKOUT_URL/i);
});

test("keeps only purposeful client-side interaction", async () => {
  const [landing, mobileMenu, packageJson] = await Promise.all([
    readFile(new URL("../app/LandingPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/MobileMenu.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(landing, /OrbCanvas|particle|mockup|mobile-join-bar/);
  assert.match(mobileMenu, /^"use client";/);
  assert.match(mobileMenu, /Escape/);
  assert.match(mobileMenu, /aria-expanded/);
  assert.doesNotMatch(
    packageJson,
    /@react-three\/fiber|framer-motion|gsap|lucide-react|"three"|tailwindcss/,
  );
});

test("uses semantic landmarks, accessible states and reduced motion", async () => {
  const [landing, layout, css] = await Promise.all([
    readFile(new URL("../app/LandingPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(landing, /<header className="site-header">/);
  assert.match(landing, /<main id="conteudo-principal">/);
  assert.match(landing, /<footer className="site-footer">/);
  assert.match(landing, /<details key=\{item\.question\}>/);
  assert.match(landing, /Pular para o conteúdo principal/);
  assert.match(landing, /compactLabel="Entrar"/);
  assert.match(layout, /lang="pt-BR"/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /:focus-visible/);
});

test("keeps SEO metadata and enables Vercel Web Analytics", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Comunidade gratuita no WhatsApp e Discord/);
  assert.match(layout, /VERCEL_PROJECT_PRODUCTION_URL/);
  assert.match(layout, /\/opengraph-image/);
  assert.match(layout, /@vercel\/analytics\/next/);
  assert.match(layout, /<Analytics \/>/);
  assert.match(packageJson, /"@vercel\/analytics"/);
});

test("does not fabricate community proof", async () => {
  const page = await readFile(new URL("../app/LandingPage.tsx", import.meta.url), "utf8");

  assert.match(page, /capturas reais, autorizadas e anonimizadas/);
  assert.doesNotMatch(page, /depoimento|membros ativos|pessoas ajudadas/i);
});
