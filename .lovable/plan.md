## PachecoTech — Landing Page de Conversão

Site institucional/landing em **português (BR)**, mobile-first, com visual premium (gradiente azul + foto realista no hero) e foco em capturar leads via **Instagram DM (@pachecotechh)**.

### Estrutura das seções (single page, scroll suave)

1. **Header fixo** — logo "PachecoTech", links âncora (Processo, Entregas, Planos, FAQ), botão "Falar no Instagram".

2. **Hero**
   - Fundo gradiente `#1D4ED8 → #3B82F6`
   - Headline: *"Seu site não está trazendo clientes. Eu resolvo isso com estratégia."*
   - Subheadline: *"Antes de construir qualquer coisa, eu entendo o seu negócio. Depois executo com foco claro: resultados."*
   - CTA primário: **"Ver como funciona"** (scroll para Processo)
   - CTA secundário: **"Quero uma página que traz clientes"** (abre Instagram DM)
   - Foto realista (gerada via IA) de pessoa trabalhando em laptop com contexto analítico

3. **Como Funciona — 4 etapas em cards numerados**
   - Diagnóstico → Estratégia → Construção → Entrega
   - Cada card lista entregáveis específicos do briefing

4. **O Que Você Recebe** — grid com 4 mockups visuais
   - Documento estratégico, Copywriting, Estrutura da página, Landing page final
   - Mockups estilizados (não fotos genéricas) — frames de documento e tela

5. **Casos de Uso** — 3 cards
   - Prestador de serviço local · Coach/consultor · Criador de infoproduto
   - Cada um com Problema → Solução

6. **Planos** (sem preços) — 3 cards: Presença · **Conversão** (destacado) · Sistema
   - Mostram entregáveis, não features
   - CTA em cada card → Instagram DM

7. **Diferenciais** — 4 blocos com ícones
   - Estratégia antes do design · Processo transparente · Execução rápida · Foco em resultados
   - Faixa de destaque com a frase: *"O que agências entregam em semanas, esse processo comprime em um sistema mais rápido e eficiente."*

8. **Prova social / Credibilidade**
   - Bloco com projeções realistas: *"Resultado esperado: +3 a 5 novos contatos por semana após implementação"*
   - 2-3 cenários simulados apresentados como projeções, não depoimentos falsos

9. **FAQ** — accordion
   - Posso fazer isso sozinho? · Quanto custa? (faixa R$297–R$997) · Quanto tempo leva? · Posso pedir revisões?

10. **CTA Final + Formulário**
    - Headline: *"Vamos fazer sua página trabalhar por você."*
    - Formulário simples (nome, contato, mensagem) — ao enviar, **abre o Instagram @pachecotechh em nova aba** com a mensagem montada pronta para colar (já que DM não aceita pré-preenchimento via URL, mostramos confirmação com a mensagem copiada para a área de transferência)
    - Botão alternativo: **"Chamar no Instagram"** → `instagram.com/pachecotechh`

11. **Footer** — minimalista, link Instagram, copyright.

### Design

- **Cores**: primário `#1D4ED8`, secundário `#3B82F6`, fundo branco, texto `#111827`, cinzas neutros para hierarquia
- **Tipografia**: Inter (sans-serif moderna, alta legibilidade), headings grandes e bold
- **Componentes**: cards com bordas suaves, sombras sutis, espaçamento generoso
- **Animações**: fade-in on scroll, hover lift nos cards, transições suaves nos botões
- **Mobile-first**: layout em coluna única no mobile, grid no desktop
- **Sem emojis no hero** (mantido como pedido)

### Imagens

- 1 imagem principal no hero (pessoa trabalhando em laptop, estilo realista, contexto de análise/estratégia) — gerada via IA com prompt cuidadoso para evitar look de stock
- Mockups da seção "O Que Você Recebe" feitos em CSS/SVG (frames de documento, wireframe de página) para look minimalista e profissional
- 1 imagem complementar opcional na seção de diferenciais

### Detalhes técnicos

- TanStack Start, rota única em `src/routes/index.tsx` com seções componentizadas em `src/components/sections/`
- shadcn/ui para Accordion (FAQ), Button, Card, Input, Textarea
- Form com validação Zod (nome, contato, mensagem) — submit monta mensagem e abre `https://instagram.com/pachecotechh` em nova aba + copia mensagem para clipboard com toast de confirmação
- Todos os CTAs ao longo da página (hero, planos, diferenciais, final) apontam para o mesmo destino: Instagram DM
- Imagem do hero gerada via Lovable AI Gateway (nano banana) e salva em `src/assets/`
- SEO: title, description, og tags em PT-BR no `__root.tsx` head
- Scroll suave entre âncoras, header com backdrop blur ao rolar

### Fora do escopo

- Sem WhatsApp (removido conforme sua resposta)
- Sem armazenamento de leads (form apenas redireciona)
- Sem painel admin / backend / banco de dados
- Sem múltiplas rotas — single page com âncoras (apropriado aqui pois é uma landing)