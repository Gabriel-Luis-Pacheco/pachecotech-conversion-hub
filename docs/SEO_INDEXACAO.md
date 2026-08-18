# SEO, indexação e discoverability — PachecoLab

## URL canônica atual

Enquanto não houver domínio próprio configurado, a URL canônica de produção é:

`https://pacheco-lab-comunidade.vercel.app`

O código usa `VERCEL_PROJECT_PRODUCTION_URL` em produção e mantém essa URL como fallback conhecido.

## Implementação técnica

- metadata global e específica da homepage com título, descrição e canonical;
- Open Graph e Twitter Card;
- JSON-LD com `Organization`, `WebSite` e `WebPage`;
- identificação consistente de `PachecoLab` e nome alternativo `Pacheco Lab`;
- `robots.txt` gerado pelo Metadata API do Next.js;
- Googlebot, Bingbot e OAI-SearchBot explicitamente permitidos;
- `sitemap.xml` gerado pelo Metadata API do Next.js;
- `manifest.webmanifest`;
- `llms.txt` complementar, sem tratá-lo como fator de ranking;
- suporte a Google Search Console via variável `GOOGLE_SITE_VERIFICATION`;
- idioma `pt-BR`;
- Vercel Web Analytics preservado;
- conteúdo principal renderizado no servidor e acessível sem depender de interação do cliente.

## URLs para validar após cada deploy

- `/`
- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`
- `/llms.txt`
- `/opengraph-image`
- `/pacheco-lab-logo.png`

Todas devem ser testadas no domínio canônico de produção.

## Google Search Console — ação manual

1. Abra o Google Search Console.
2. Adicione o domínio/URL oficial do PachecoLab.
3. Faça a verificação solicitada pelo Google. Se optar por meta tag, copie apenas o token de `google-site-verification` para a variável `GOOGLE_SITE_VERIFICATION` da Vercel; não coloque credenciais privadas no repositório.
4. Envie `https://pacheco-lab-comunidade.vercel.app/sitemap.xml`.
5. Inspecione a homepage e solicite indexação.
6. Acompanhe Indexação/Páginas e Performance.

Quando houver domínio próprio, prefira verificar a propriedade de domínio por DNS e atualize o domínio canônico antes de enviar o novo sitemap.

## Bing Webmaster Tools

1. Adicione o site ao Bing Webmaster Tools.
2. Verifique a propriedade.
3. Envie o mesmo `sitemap.xml`.
4. Acompanhe rastreamento, indexação e erros.

IndexNow não foi ativado porque não é necessário para esta landing page estática de uma única URL e exigiria gerenciamento adicional de chave sem benefício proporcional no estado atual do projeto.

## IA e mecanismos generativos

O site não bloqueia `OAI-SearchBot`. O arquivo `llms.txt` existe apenas como complemento legível; sitemap, robots, HTML público, metadata e structured data continuam sendo as fontes técnicas principais.

Nenhuma configuração garante recomendação por ChatGPT, Google, Bing ou qualquer outro sistema. O objetivo desta implementação é tornar a entidade e o conteúdo público fáceis de descobrir e interpretar.

## Manutenção

Ao criar novas páginas públicas:

1. dê a cada página um título e descrição próprios;
2. defina canonical;
3. adicione ao sitemap somente se for pública e indexável;
4. conecte a página por links HTML internos;
5. use structured data apenas quando representar conteúdo realmente visível;
6. não invente datas, avaliações, números de membros ou atributos de entidade;
7. valide o build e as URLs produzidas.

## Checklist curto para Gabriel

- [ ] Verificar o site no Google Search Console.
- [ ] Enviar `/sitemap.xml` ao Google.
- [ ] Solicitar indexação da homepage.
- [ ] Adicionar/verificar o site no Bing Webmaster Tools.
- [ ] Se comprar um domínio próprio, configurá-lo na Vercel e atualizar a URL canônica antes de nova submissão.
