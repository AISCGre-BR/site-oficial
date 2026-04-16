## Why

A tentativa anterior de identidade visual (feita com GPT Codex a partir de dois briefings) terminou em três commits consecutivos marcados como `"not quite there yet"`. O site atualmente em `docs/` mistura estruturas de dois briefings conflitantes, tem um tema custom que não convence, e usa placeholders de layout que não honram a natureza institucional da AISCGre Brasil. A retomada do projeto exige um sistema visual novo, coerente, e explicitamente inspirado em manuscritos carolíngios sem recair em skeuomorfismo. Um protótipo HTML estático já foi aprovado como referência (ver `prototype/` local — não versionado); esta mudança formaliza o sistema e prepara sua migração para VitePress.

## What Changes

- Introduzir um **sistema visual completo** (tokens, escalas, componentes) inspirado em manuscritos carolíngios (São Galo, Einsiedeln, Laon) traduzido em linguagem editorial moderna — não skeuomórfica.
- **Paleta alinhada à marca oficial AISCGre**: preto `#222222`, vermelho rubrical `#a02531`, creme-pergaminho `#f6f1e7`. Vermelho reservado a funções estruturais (rubricas, âncoras de seção, links importantes), nunca decorativo.
- **Tipografia unificada em Source Serif 4** (variável, com italic e optical sizing). Small caps para rótulos de seção e navegação. Sem fontes script, sem blackletter, sem EB Garamond.
- **Princípio "ornamento só em limiares"**: momentos ornamentais confinados a thresholds (hero, aberturas de capítulo). Nenhuma textura de fundo, nenhum ícone pseudo-medieval difuso.
- **Integração dos logos oficiais** (fornecidos pela AISCGre): ícone compacto no nav e no rodapé, variantes positivo/negativo/mono disponíveis no sistema.
- **Conjunto de componentes institucionais**: nav pegajosa, hero split (tipo + plate ilustrada), threshold (pausa escura com citação), seções com rótulo rubricado, listas editoriais (notícias, cursos, pessoas), galeria com tiles enquadrados, feature de destaque, rodapé resumido, artigo long-form com capitular rubricada e rail de ficha.
- **BREAKING**: substitui completamente o tema atual em `docs/.vitepress/theme/` e a configuração visual em `docs/.vitepress/config.ts`. Conteúdo em `.md` é preservado; apenas o layer de apresentação é refeito.
- **NÃO ESCOPO**: arquitetura de informação (qual página existe e como o menu se estrutura) será revisitada em proposta posterior, após o visual estabilizar. Conteúdo editorial final também é fora de escopo.

## Capabilities

### New Capabilities

- `visual-identity`: Sistema de identidade visual do site — paleta, tipografia, escala de espaçamento, princípios de ornamento, uso de logo, regras de uso de imagem. É o contrato de design.
- `design-system`: Componentes reutilizáveis da interface — nav, hero, threshold, seção rotulada, lista editorial, galeria, feature, rodapé, artigo long-form. Cada componente tem contrato de HTML/CSS e regras de uso.

### Modified Capabilities

<!-- Nenhuma: é a primeira proposta formal do projeto; não há specs pré-existentes em openspec/specs/ -->

## Impact

- **Código afetado**:
  - `docs/.vitepress/theme/` — substituído integralmente.
  - `docs/.vitepress/config.ts` — ajustado para carregar as novas fontes e refletir decisões de `head`.
  - `docs/.vitepress/public/` — adição dos logos oficiais AISCGre (variantes positivo, negativo, compacto, mono).
  - `docs/index.md` — refatorado para usar `layout: home` com composição nova; conteúdo textual preservado onde aplicável.
  - `docs/*/index.md` — pequenos ajustes de frontmatter para casar com novo sistema (títulos, layouts).
- **Dependências**: adição de fonte web `Source Serif 4` via Google Fonts (ou self-hosted em iteração posterior). Sem novas dependências de npm.
- **Arquivos de briefing históricos** (`instrucoes.md`, `additional-instructions.md`) permanecem na raiz como referência histórica, sem papel normativo.
- **Protótipo local** em `prototype/` (gitignored) continua servindo como "verdade visual" até o tema VitePress estar equivalente; após isso, pode ser removido.
- **Performance**: arquivos de tema enxutos; carregamento de 1 família de fonte variável. Sem impacto negativo sobre o build estático do VitePress.
- **Acessibilidade**: contraste WCAG AA garantido no sistema de tokens; hierarquia de headings preservada; `prefers-reduced-motion` respeitado nas animações de entrada.
- **Sem escopo neste change**: migração de conteúdo, reestruturação de menu/IA, formulário de contato, busca interna, analytics, i18n.
