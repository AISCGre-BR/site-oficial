## Context

O site atual (`docs/.vitepress/theme/`) é resultado de duas gerações de tentativas com GPT Codex, guiadas por dois briefings parcialmente conflitantes (`instrucoes.md` e `additional-instructions.md`). Os três últimos commits do autor indicam insatisfação persistente com o resultado ("not quite there yet"). O presidente da AISCGre forneceu um conjunto de arquivos de logo oficial (positivo/negativo, colorido/mono, compacto/completo) disponíveis em formato SVG, que ainda não foram integrados ao tema.

Uma sessão de exploração com o usuário (15 abr 2026) convergiu nas seguintes premissas:
- Projeto retomado após meses parado; autor único ativo no branch `dev-gabriel`.
- Prioridade #1 é redesign visual; arquitetura de informação fica para ciclo posterior.
- Referências visuais são manuscritos carolíngios reais (St. Gall 359/390/391, Einsiedeln 121, Laon 239) — mas o tratamento DEVE ser editorial moderno, não skeuomórfico.
- Referência de tom: Claude.ai, Edward Tufte's website, revistas editoriais institucionais.
- Fonte pedida: serifa, sem ser caricata. EB Garamond foi considerada cliché.

Um protótipo HTML estático foi construído e aprovado em três iterações (v1–v3) sob `prototype/` (gitignored). Ele serve como *verdade visual* de referência desta proposta. A proposta formaliza esse sistema, especifica-o em contratos testáveis, e planeja sua migração para o tema VitePress.

Stack-alvo: VitePress 2 alpha + Vue 3, saída estática em `docs/.vitepress/dist/`.

## Goals / Non-Goals

**Goals:**
- Sistema visual coerente, respaldado em tokens CSS versionados.
- Tipografia única (Source Serif 4 variável) reduzindo complexidade e garantindo carga performática.
- Uso funcional e contido do vermelho rubrical (`#a02531`), sempre alinhado à marca.
- Componentes reutilizáveis com contratos claros: nav, hero split, threshold, seção rotulada, edlist, gallery, feature, footer, artigo long-form.
- Integração dos logos oficiais AISCGre como assets de primeira classe.
- Acessibilidade WCAG AA em todas as combinações de cor texto/fundo definidas.
- Respeito a `prefers-reduced-motion`.

**Non-Goals:**
- Revisão da arquitetura de informação (estrutura de pastas `docs/`, itens de menu finais).
- Reescrita de conteúdo textual em português.
- Internacionalização, busca interna, formulário de contato com backend, analytics.
- Substituição do VitePress ou adoção de outro gerador.
- Gestão de imagens reais de eventos/scholas — permanecem como placeholders SVG custom até que o cliente forneça fotos.
- Modos escuro (dark mode) — o tema é exclusivamente claro por coerência com a estética pergaminho.

## Decisions

### Tipografia: Source Serif 4 como única família
Source Serif 4 (Adobe, Open Font License) foi escolhida por:
- legibilidade institucional em tamanhos de leitura (16–20px);
- arcos quietos e baixa excentricidade de glifos (evita "charater-forward" que o usuário rejeitou na v1 com Fraunces);
- suporte a optical sizing variável, permitindo um único asset cobrir display e texto;
- italic completo e pareamento de pesos adequados.

**Alternativas consideradas:**
- *Fraunces* — rejeitada (v1): variável rica mas difícil de ler em corpo, mesmo com eixo SOFT dialado.
- *Newsreader* — descartada: mais "editorial de revista", menos institucional.
- *EB Garamond* — descartada: explicitamente cliché de site acadêmico/medieval.
- *Literata, Cardo, IBM Plex Serif* — preteridas por menor presença editorial ou perfil tech demais.

Carregamento inicial via Google Fonts CDN (rápido para iteração); migração para self-hosted fica registrada como tarefa de follow-up (não escopo desta proposta).

### Paleta alinhada à marca
Os tokens de cor foram derivados **dos próprios arquivos SVG da marca** fornecidos pela AISCGre: preto `#222222` e vermelho `#a02531` aparecem como `fill` nos logos. Demais tokens (creme, cream-deep, ink-soft, rule) foram calibrados para WCAG AA contra o texto (verificado manualmente: `#222` sobre `#f6f1e7` ≈ 14.5:1; `#a02531` sobre `#f6f1e7` ≈ 7.4:1).

**Alternativa considerada:** a paleta sugerida no `additional-instructions.md` (`#7a1f2b`, `#c9a14a`) foi descartada pois não coincide com os SVGs oficiais — risco de dessincronização com material impresso e comunicação oficial da associação.

### Ornamento confinado a thresholds
Decisão estrutural: *todo o peso* gráfico evocativo de manuscrito concentra-se em momentos pré-definidos (hero plate, seção threshold, capitular de primeiro parágrafo, pseudo-elementos de label). O resto da interface é pura tipografia + regras + retângulos. Isso é o que afasta o design do skeuomorfismo — o manuscrito inspira ritmo e pausas, não textura difusa.

**Alternativa considerada:** paleta tipográfica com fundo de pergaminho, ícones decorativos por seção, bordas ornamentadas — rejeitada explicitamente pelo usuário como "caricata / skeuomorphism".

### Componentes como primitivos, não como páginas
Optou-se por definir contratos de componentes (nav, section, edlist, gallery, feature, threshold, article) e deixar as páginas livres para compor com eles. Cada componente tem classes BEM-ish (`.section`, `.section__label`, `.section__body`). Essa abordagem facilita:
- evolução incremental do conteúdo sem tocar em CSS;
- reuso em novas páginas criadas futuramente (e.g., `publicacoes/artigo-x.md`);
- especificação em contratos testáveis (Requirements de `design-system`).

**Alternativa considerada:** Vue components tipados com props — deixada como refino futuro. Para v1 do tema, classes CSS + markup semântico já cumprem o contrato.

### Logos como assets, não como código
Os 7 arquivos SVG oficiais (positivo completo, positivo compacto, negativo completo, negativo compacto, mono positivo, mono compacto, ícone positivo, ícone negativo) são copiados para `docs/.vitepress/public/brand/` e referenciados por `src="/brand/icon.svg"`. Nenhuma manipulação CSS (filter, fill, color) incide sobre os paths do SVG — garantia de fidelidade de marca.

### Motion: entrada elegante, sem excesso
Animações limitadas a uma entrada de hero (stagger rise 120–700ms) e micro-interações em links/gallery (260ms max). `prefers-reduced-motion` implementado globalmente com `animation-duration: 0.001ms !important`. Sem parallax, sem scroll-hijack, sem carrosséis.

**Alternativa considerada:** páginas com scroll-linked animations — rejeitada por conflitar com a sobriedade institucional e por risco de acessibilidade.

### VitePress theme sem Vue custom components (fase inicial)
Para a primeira versão do tema, o `Layout.vue` carregará o conteúdo do markdown sem props customizadas; a composição específica da home será escrita no próprio `docs/index.md` via HTML + VitePress slots. Componentes Vue (e.g., `<FeatureCard>`) viram refino futuro. Isso reduz superficie de bugs na migração inicial.

## Risks / Trade-offs

- **[Risco] VitePress 2 em alpha — quebras de API** → Mitigação: fixar versão no `package.json`; manter tema simples (apenas `Layout.vue` + CSS) para reduzir superfície de incompatibilidade; validar visualmente após upgrade.

- **[Risco] Carregamento da fonte via CDN pode piorar LCP** → Mitigação: `<link rel="preconnect">` para `fonts.googleapis.com` e `fonts.gstatic.com`; `font-display: swap`. Self-hosting em task de follow-up.

- **[Risco] SVGs de logo grandes (90KB para o horizontal completo)** → Mitigação: o horizontal completo só aparece em footer ampliado e contextos PDF; nav usa o `icon.svg` (2.5KB) ou `compacto` (21KB). Opção de rodar SVGO em tarefa separada se necessário.

- **[Risco] Conteúdo existente em `docs/` (páginas de cursos, eventos, notícias) pode ter markup que conflita com novos estilos** → Mitigação: estilos de `.article__prose` escopados; smoke-test em cada página existente após migração e registrar ajustes como issues separados.

- **[Trade-off] Uma única família de fonte** → perde-se a dupla serif + sans que dá contraste tipográfico institucional convencional. Aceito: aumenta coerência editorial e reduz carga.

- **[Trade-off] Ornamento contido limita o "wow factor" visual** → aceito deliberadamente; o "wow" vem da composição tipográfica do hero e do momento threshold, não de decoração difusa.

- **[Trade-off] Modo escuro ausente** → aceito: a estética pergaminho + tinta não se traduz bem para fundo preto sem se tornar "goth" ou perder identidade. Se exigido no futuro, uma proposta separada pode introduzi-lo.

## Migration Plan

1. **Snapshot do tema atual**: branch `dev-gabriel` já tem o tema atual; nenhuma branch extra é necessária (proteção por backup `.git.bak-*` local feito na sessão de abr/2026).
2. **Copiar logos** para `docs/.vitepress/public/brand/`.
3. **Substituir** `docs/.vitepress/theme/index.ts`, `Layout.vue`, e folhas CSS por implementação derivada de `prototype/style.css`.
4. **Atualizar** `docs/.vitepress/config.ts` com `head` para fonts, título e descrição oficiais.
5. **Refatorar** `docs/index.md` para usar composição de hero split + seções aprovadas na v3.
6. **Smoke-test visual** página por página: `/`, `/sobre/`, `/cursos/`, `/eventos/`, `/noticias/`, etc.
7. **Commit por estágio** (atomic): tokens, tipografia, layout, hero, seções, footer, refactor de home.
8. **Rollback**: `git reset --hard` ao commit imediatamente anterior ao primeiro commit de tema; não há dependência externa que prejudique o rollback.

## Open Questions

- **Escopo de migração do conteúdo existente**: alguns `.md` em `docs/` ainda usam placeholders de `lorem-ipsum.md`. Preservar ou substituir por textos do protótipo (institucionais curtos) como parte deste change? *Resposta provisória*: preservar; substituição de conteúdo entra em ciclo separado.
- **Nome do domínio final**: afeta o `sitemap` e `canonical` mas não o visual — registrado como follow-up.
- **Galeria com fotos reais**: depende de material fornecido pela AISCGre; enquanto isso, SVGs placeholder. Sem ação nesta proposta.
