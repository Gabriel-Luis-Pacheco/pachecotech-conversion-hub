import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("builds the production-ready Next.js application", async () => {
  const buildId = await readFile(new URL("../.next/BUILD_ID", import.meta.url), "utf8");
  assert.ok(buildId.trim().length > 0);
  await access(new URL("../.next/server/app/index.html", import.meta.url));
});

test("presents the community as free with working official entry links", async () => {
  const page = await readFile(new URL("../app/LandingPage.tsx", import.meta.url), "utf8");

  assert.match(page, /Uma comunidade gratuita/);
  assert.match(page, /Entrar gratuitamente na comunidade/);
  assert.match(page, /Gratuito/);
  assert.match(page, /Sem cartão/);
  assert.match(page, /Sem assinatura/);
  assert.match(page, /https:\/\/chat\.whatsapp\.com\/GxaDRr8NWmYGsbYmjp7vCN/);
  assert.match(page, /https:\/\/discord\.gg\/9vxmxCFkDq/);
  assert.match(page, /mobile-join-bar/);

  assert.doesNotMatch(page, /pay\.kiwify\.com\.br/i);
  assert.doesNotMatch(page, /R\$\s*19[,.]90/i);
  assert.doesNotMatch(page, /CheckoutButton|CHECKOUT_URL/i);
  assert.doesNotMatch(page, /codex-preview|Your site is taking shape/);
});

test("uses free-community metadata and keeps the existing application shell", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<LandingPage \/>/);
  assert.match(page, /Comunidade gratuita de tecnologia/);
  assert.match(layout, /lang="pt-BR"/);
  assert.match(layout, /VERCEL_PROJECT_PRODUCTION_URL/);
  assert.match(layout, /\/opengraph-image/);
  assert.match(packageJson, /"build": "next build"/);
  assert.match(packageJson, /"typecheck": "tsc --noEmit"/);
});
