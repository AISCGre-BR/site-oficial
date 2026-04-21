# Site Oficial AISCGre Brasil

Landing page institucional da **Seção Brasileira da AISCGre** (Associazione Internazionale Studi di Canto Gregoriano), construída com [VitePress](https://vitepress.dev/) e tema customizado inspirado em manuscritos gregorianos carolíngios.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20.19+ (requerido pelo VitePress 2.x)
- `npm` (incluído no Node.js)

## Desenvolvimento

```bash
npm install
npm run dev
```

Servidor local em `http://localhost:5173`.

## Build e preview

```bash
npm run build    # Gera estáticos em docs/.vitepress/dist/
npm run preview  # Serve o build localmente
```

## Estrutura

```
site-oficial/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts           # Configuração do site e fontes
│   │   └── theme/              # Tema customizado
│   │       ├── Layout.vue      # Layout raiz (nav + conteúdo + footer)
│   │       ├── HomePage.vue    # Composição da landing
│   │       └── styles/         # CSS modular (tokens, componentes)
│   ├── public/
│   │   ├── brand/              # Logos oficiais AISCGre (SVG)
│   │   └── photos/             # Fotografias e imagens
│   └── index.md                # Entry point da landing (frontmatter only)
├── openspec/                   # Spec-driven development — histórico
│                                 de decisões e mudanças
├── package.json
└── README.md
```

## Identidade visual

- Tipografia: **Source Serif 4** (variável)
- Paleta: creme-pergaminho `#f6f1e7` · vermelho rubrical `#a02531` · tinta `#222222`
- Logos oficiais em `docs/public/brand/` (positivo, negativo, compacto, monocromático, ícone)

## Créditos de imagens

- **Intróito Puer natus** — Codex Einsiedeln 121, p. 30 · Stiftsbibliothek Einsiedeln / e-codices · [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- **Foto da diretoria** — [@beatrizclleal](https://www.instagram.com/beatrizclleal/)

## Workflow

Este repositório adota [OpenSpec](https://github.com/Fission-AI/OpenSpec) para desenvolvimento spec-driven. As mudanças ativas e as decisões de arquitetura ficam em `openspec/changes/` e `openspec/project.md`.
