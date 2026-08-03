import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("builds the production-ready Next.js application", async () => {
  const buildId = await readFile(new URL("../.next/BUILD_ID", import.meta.url), "utf8");
  assert.ok(buildId.trim().length > 0);
  await access(new URL("../.next/server/app/index.html", import.meta.url));
});

test("keeps the complete sales offer and checkout in source", async () => {
  const page = await readFile(new URL("../app/LandingPage.tsx", import.meta.url), "utf8");
  assert.match(page, /Pacheco Lab\./);
  assert.match(page, /Aprenda programação/);
  assert.match(page, /Evolua junto/);
  assert.match(page, /Perguntas honestas/);
  assert.match(page, /https:\/\/pay\.kiwify\.com\.br\/SEyfpDy/);
  assert.match(page, /R\$ 19,90/);
  assert.match(page, /mobile-checkout-bar/);
  assert.doesNotMatch(page, /codex-preview|Your site is taking shape/);
});

test("keeps the finished site metadata and removes starter content", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<LandingPage \/>/);
  assert.match(layout, /lang="pt-BR"/);
  assert.match(layout, /VERCEL_PROJECT_PRODUCTION_URL/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(packageJson, /"build": "next build"/);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
