
# additional-instructions.md

## 1. Purpose of this repository

This VitePress site is for the **seção brasileira da AISCGre** (Associação Internacional para o Estudo do Canto Gregoriano).  
It must be **strongly inspired by the visual structure and information architecture of https://aiscgre.pl**, but:

- Texts will be primarily in **Brazilian Portuguese**.
- Visual identity should **evoke Gregorian chant, neumes and medieval manuscripts**.
- The code and content must be **clean, maintainable and VitePress-friendly**.

This file defines **rules and expectations** for all code and content generated for this site.


## 2. Overall look & feel (inspired by aiscgre.pl)

### 2.1 Layout

- Use a **fixed top navigation bar** similar to the Polish AISCGre site:
  - Logo on the left.
  - Main navigation items on the right with dropdowns when needed.
- Below the navbar, the home page should have a **hero section**:
  - Full-width background image of a **Gregorian manuscript / parchment**.
  - Overlay with site title and short description.
  - One or two **call-to-action buttons** (e.g., “Próximo curso”, “Conheça a AISCGre”).

- Content sections should be **stacked vertically**, in a structure similar to WordPress sections:
  - Sections with generous padding.
  - Alternating light backgrounds (plain parchment vs. off-white).
  - Headings aligned left, not centered, except in hero or special sections.

### 2.2 Color palette (approximate, not mandatory but recommended)

Use a palette that suggests parchment and ink:

- Background base: `#f5f1e8` (parchment off-white)
- Body text: `#2b2117` (dark brown ink)
- Primary accent (links, buttons): `#7a1f2b` (deep red / wine)
- Secondary accent (borders, hover details): `#c9a14a` (muted gold)
- Muted gray for secondary text: `#66615b`

Buttons and links:
- Links default: underlined only on hover.
- Buttons: rounded corners (small radius), solid fill in primary accent, subtle hover effect (slightly darker + box shadow).

### 2.3 Typography

Prefer free web fonts with a classical feeling:

- Headings: **EB Garamond**.
- Body text: a modern sans-serif, e.g. **“Source Sans Pro”, “Open Sans” or similar**.

Rules:

- Use **all caps or small caps** for Latin headings (e.g., “CANTUS GREGORIANUS”, “SCHOLA CANTORUM”).
- Portuguese headings in Title Case (e.g., “Cursos de Canto Gregoriano”).
- Line spacing comfortable (1.6–1.8) for long texts.

### 2.4 Imagery

- Use images of:
  - **neumes**, **medieval manuscripts**, **scholas** singing, **interiors of churches** etc.
- Images must be treated as **figures** with captions:
  - Example caption style:  
    `_Figura 1 – Antífona “Gaudeamus” no manuscrito Einsiedeln 121, séc. X._`
- Avoid modern / flashy vector icons; prefer simple line icons when needed.


## 3. Information architecture (menu & pages)

Structure the site similar to aiscgre.pl, but adapted to Brazil. Use the following tree:

- **Início** (`index.md`)
  - Hero + highlights + latest content.
- **Sobre** (`sobre/index.md`)
  - “Sobre a AISCGre” (global) + “Seção Brasileira” specifics.
- **Cursos** (`cursos/index.md`)
  - Overview of Gregorian chant courses in Brazil.
  - Individual course pages:
    - `cursos/curso-AAAA-nome.md`
- **Projetos & Eventos** (`eventos/index.md`)
  - Subsections analogous to:
    - `Dies Gregoriani`
    - `Gregorianus de Vespera`
    - Congressos / encontros.
- **Documentos** (`documentos/index.md`)
  - Guidelines, estatutos, regulamentos.
- **Biblioteca** (`biblioteca/index.md`)
  - Links to articles, livros, PDFs, partituras.
- **Notícias** (`noticias/index.md`)
  - List of news posts (reverse chronological).
- **Contato** (`contato.md`)
  - Email, formulário simples, redes sociais.

The navigation bar in VitePress config should approximate:

```ts
// .vitepress/config.ts (illustrative – Codex should adapt)
export default {
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      {
        text: 'Sobre',
        items: [
          { text: 'AISCGre – Internacional', link: '/sobre/' },
          { text: 'Seção Brasileira', link: '/sobre/secao-brasileira' },
        ],
      },
      { text: 'Cursos', link: '/cursos/' },
      {
        text: 'Projetos & Eventos',
        items: [
          { text: 'Dies Gregoriani', link: '/eventos/dies-gregoriani' },
          { text: 'Gregorianus de Vespera', link: '/eventos/gregorianus-de-vespera' },
          { text: 'Congressos', link: '/eventos/congressos' },
        ],
      },
      { text: 'Documentos', link: '/documentos/' },
      { text: 'Biblioteca', link: '/biblioteca/' },
      { text: 'Notícias', link: '/noticias/' },
      { text: 'Contato', link: '/contato' },
    ],
  },
}
```


## 4. Home page (`index.md`) – structure and content

The home page should conceptually mirror the structure of the Polish AISCGre homepage:

1. **Hero section**
   - Full-width background image (`/images/hero-manuscrito.jpg` placeholder).
   - Overlay with:
     - Title: `AISCGre – Seção Brasileira`
     - Subtitle: short sentence describing mission.
     - CTA buttons:
       - “Próximo Curso” → `/cursos/proximo-curso`
       - “Conheça a AISCGre” → `/sobre/`

2. **Introductory block**
   - Short paragraph “Sobre a AISCGre” with a “Saiba mais” link.

3. **Three cards / columns** (like “feature boxes”):
   - Card 1: “Cursos”
   - Card 2: “Projetos & Eventos”
   - Card 3: “Documentos & Biblioteca”
   Each card:
   - Icon or small image.
   - Short descriptive text.
   - Link to relevant section.

4. **Highlight of next course**
   - Box with:
     - Course title
     - Date
     - Location
     - Short text
     - Button “Detalhes do curso”

5. **Últimas notícias**
   - List of 3–5 recent news items.
   - Each item: title, date, 1–2 line summary + “Leia mais”.

6. **Rodapé resumido**
   - Short paragraph about AISCGre.
   - Contact email.
   - Basic navigation links.

The markdown should be structured with semantic headings:

```md
---
layout: home
title: AISCGre – Seção Brasileira
---

# AISCGre – Seção Brasileira

_Slogan curto em português aqui._

[Próximo curso](/cursos/proximo-curso) · [Conheça a AISCGre](/sobre/)

## Quem somos

(Trecho breve; pode reutilizar texto de `lorem-ipsum.md` enquanto o conteúdo definitivo não estiver pronto.)

## Cursos de Canto Gregoriano

(Resumo + link para `/cursos/`)

## Projetos & Eventos

(Resumo + links para páginas de eventos.)

## Últimas notícias

(Lista com links para `/noticias/...`)
```


## 5. Cursos (`cursos/`) – inspiração na página de cursos

A página polonesa de cursos apresenta uma **lista cronológica de edições**, com imagens de cartazes, datas e locais.

Reproduzir esse padrão em VitePress:

- `cursos/index.md` deve conter:
  - Breve explicação do objetivo dos cursos.
  - Uma **lista cronológica** (descendente) dos cursos passados e futuros.
  - Cada item com:
    - Ano (destacado)
    - Título do curso
    - Local
    - Pequeno resumo
    - Link para uma página detalhada (`/cursos/curso-AAAA-nome`)

- Páginas de curso individual (`cursos/curso-2025-introducao-ao-canto-gregoriano.md`):
  - Frontmatter com:
    - `title`
    - `date`
    - `location`
    - `status` (planejado, inscrições abertas, concluído)
  - Seções: descrição, programa, equipe de formadores, inscrições.

Exemplo de frontmatter:

```md
---
title: 'Curso de Canto Gregoriano 2025 – Introdução'
date: 2025-07-15
location: 'São José do Rio Preto – SP'
status: 'inscricoes-abertas'
---

# Curso de Canto Gregoriano 2025 – Introdução

(Conteúdo detalhado aqui.)
```


## 6. Sobre (`sobre/`) – estrutura

Criar pelo menos:

- `sobre/index.md` – visão geral da AISCGre (inspirada no site polonês, porém em português).
- `sobre/secao-brasileira.md` – texto específico sobre a seção brasileira.

Padrão:

```md
---
title: Sobre a AISCGre
---

# Sobre a AISCGre

(Texto em português, eventualmente com citações em latim. Use `lorem-ipsum.md` como placeholder se necessário.)

## Seção Brasileira

(Explicação específica da seção brasileira, contato, objetivos, história.)
```


## 7. Biblioteca, Documentos, Notícias

### 7.1 Documentos (`documentos/`)

- Página principal com **lista categorizada**:
  - Estatutos / regulamentos
  - Orientações para scholas
  - Materiais de estudo

Cada documento pode ser um arquivo Markdown próprio ou um link externo.

### 7.2 Biblioteca (`biblioteca/`)

- Lista de referências:
  - Livros
  - Artigos
  - Sites
  - PDFs de domínio público (ex: tratados históricos)

Usar padrão de citação consistente (autor, título, ano, etc.).

### 7.3 Notícias (`noticias/`)

- `noticias/index.md` deve listar as publicações ordenadas por data.
- Each news post is a separate file, such as:
  - `noticias/2025-03-15-curso-de-2025-abertas-inscricoes.md`

Frontmatter padrão:

```md
---
title: 'Abertas as inscrições para o Curso de 2025'
date: 2025-03-15
category: 'Cursos'
---

# Abertas as inscrições para o Curso de 2025

(Conteúdo da notícia.)
```


## 8. Contato (`contato.md`)

Conteúdo mínimo:

- Pequena introdução.
- E-mail de contato.
- Links para redes sociais (se houver).
- Opcional: bloco com FAQ curta (2–4 perguntas).


## 9. Uso do arquivo `lorem-ipsum.md`

Haverá um arquivo `lorem-ipsum.md` com texto fictício. Regras para uso:

- Não exibir `lorem-ipsum.md` diretamente no menu ou sidebar.
- Em páginas ainda sem conteúdo definitivo, é permitido:
  - Copiar e colar trechos desse arquivo.
  - Ou incluir um aviso:  
    `_Conteúdo provisório. Este texto será substituído por material definitivo._`

- Nunca deixar páginas “vazias”; usar `lorem-ipsum.md` como placeholder até o conteúdo real ser produzido.


## 10. VitePress & estilos (implementação técnica)

### 10.1 Estrutura de pastas recomendada

```text
docs/
  .vitepress/
    config.ts
    theme/
      index.ts
      custom.css
  index.md
  sobre/
    index.md
    secao-brasileira.md
  cursos/
    index.md
    curso-2025-introducao-ao-canto-gregoriano.md
  eventos/
    index.md
    dies-gregoriani.md
    gregorianus-de-vespera.md
    congressos.md
  documentos/
    index.md
  biblioteca/
    index.md
  noticias/
    index.md
    2025-03-15-curso-2025-inscricoes.md
  contato.md
  lorem-ipsum.md
  images/
    hero-manuscrito.jpg
    logo-aiscgre-brasil.png
    ...
```

### 10.2 CSS

All visual adjustments should be done primarily in `.vitepress/theme/custom.css`, for example:

- Customizing navbar (background, shadow, fixed position).
- Typography (importing fonts, setting font-family for headings and body).
- Colors for links, buttons and backgrounds.
- Cards and grids for the home page and courses page.

Avoid inline styles in Markdown; use classes when necessary.

### 10.3 Accessibility

- Headings must follow hierarchy (`h1` → `h2` → `h3`).
- Images must have meaningful `alt` attributes.
- Contrast must be sufficient (especially for red and gold accents on parchment-like background).

### 10.4 Using EB Garamond

Use **EB Garamond** as the primary serif font for headings and, optionally, for highlighted quotes or Latin text.

Implementation guidelines:

1. **Add Google Fonts link in VitePress config head** (preferred for simplicity):

   ```ts
   // docs/.vitepress/config.ts
   import { defineConfig } from 'vitepress'

   export default defineConfig({
     // ...
     head: [
       [
         'link',
         {
           rel: 'stylesheet',
           href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&display=swap'
         }
       ]
     ]
   })
   ```

2. **Configure typography in `custom.css`:**

   ```css
   :root {
     --font-serif: 'EB Garamond', 'Times New Roman', serif;
     --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
   }

   body {
     font-family: var(--font-sans);
     line-height: 1.7;
   }

   h1, h2, h3, h4, h5, h6 {
     font-family: var(--font-serif);
     letter-spacing: 0.03em;
   }

   /* Optional: Latin headings in small caps style */
   .latin-heading {
     font-family: var(--font-serif);
     text-transform: uppercase;
     letter-spacing: 0.12em;
     font-weight: 500;
   }

   blockquote {
     font-family: var(--font-serif);
     font-style: italic;
   }
   ```

3. **Usage in Markdown:**

   For Latin headings or special sections that should clearly evoke the “chant manuscript” feeling, wrap the heading text in a span with the `latin-heading` class using raw HTML in Markdown:

   ```md
   <h2 class="latin-heading">CANTUS GREGORIANUS</h2>
   ```

   or

   ```md
   <span class="latin-heading">INTROITUS</span>
   ```

EB Garamond should always be loaded globally via the config head and applied via CSS variables, not hard-coded inline, to keep the theme maintainable.


## 11. Tone and language

- Primary language: **Portuguese (Brasil)**.
- Occasional use of **Latin** is acceptable for:
  - Titles of chants.
  - Liturgical terms.
  - Small headings (in small caps or all caps).
- The tone should be:
  - Formal but welcoming.
  - Geared toward musicians, scholas and people interested in Gregorian chant.
  - Faithful to the liturgical and academic nature of AISCGre.


## 12. General rules for Codex-generated content

When generating or modifying code/content for this site:

1. **Respect this information architecture and naming conventions**.
2. Keep texts **in Portuguese**, unless clearly specified otherwise.
3. Use **neumes/manuscripts** as the main visual motif: parchment tones, classical typography.
4. Prefer **Markdown + CSS** over complex custom components, unless strictly necessary.
5. When in doubt, imitate the structure and layout logic of the Polish AISCGre site, adapted to Brazilian context and VitePress constraints.
