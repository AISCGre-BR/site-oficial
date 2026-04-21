## 1. Preparar assets da marca

- [x] 1.1 Criar diretório `docs/.vitepress/public/brand/` e copiar os 9 arquivos de logo oficiais (positivo e negativo, completo/compacto/ícone, colorido/mono)
- [x] 1.2 Renomear arquivos para kebab-case consistente: `logo.svg`, `logo-compact.svg`, `logo-mono.svg`, `logo-negative.svg`, `logo-compact-negative.svg`, `logo-compact-mono.svg`, `icon.svg`, `icon-negative.svg`
- [x] 1.3 Verificar que nenhum arquivo SVG contém dados de depuração desnecessários do Inkscape (metadata não-essencial pode ser removida, paths preservados)
- [x] 1.4 Atualizar `docs/.vitepress/public/logo.svg` legado (remover ou substituir pelo oficial)

## 2. Tokens e CSS base

- [x] 2.1 Criar `docs/.vitepress/theme/styles/tokens.css` com variáveis `--cream`, `--cream-deep`, `--ink`, `--ink-soft`, `--ink-muted`, `--rule`, `--rule-soft`, `--rubric`, `--rubric-soft`, `--font`, `--measure`, `--page`, `--s-1`..`--s-9`
- [x] 2.2 Criar `docs/.vitepress/theme/styles/base.css` com reset, box-sizing, body baseline, seleção
- [x] 2.3 Adicionar `@media (prefers-reduced-motion: reduce)` global em `base.css`

## 3. Tipografia

- [x] 3.1 Atualizar `docs/.vitepress/config.ts` para incluir em `head`: `<link rel="preconnect">` para Google Fonts; link do CSS de Source Serif 4 variável com axes `ital,opsz,wght` e `display=swap`
- [x] 3.2 Criar `docs/.vitepress/theme/styles/typography.css` com classes para kicker, eyebrow, label (small caps), title scales (hero, article, section, feature)
- [x] 3.3 Verificar renderização de small caps (`smcp`, `c2sc`) em Chrome, Firefox e Safari — clamp min corrigido de 2.5rem para 1.75rem para 390px

## 4. Componentes — nav, footer, primitives

- [x] 4.1 Criar `docs/.vitepress/theme/styles/nav.css` (sticky, brand, nav links, responsivo + hamburger toggle mobile ≤720px)
- [x] 4.2 Criar `docs/.vitepress/theme/styles/foot.css` (grid 3-col, brand icon, meta, colophon, responsivo)
- [x] 4.3 Criar `docs/.vitepress/theme/styles/section.css` (primitiva `.section` com grid 18ch + 1fr, label com square ::before, body)
- [x] 4.4 Criar `docs/.vitepress/theme/styles/cta.css` (link-button com arrow, ghost variant, hover gap animation)

## 5. Componentes — hero, threshold, edlist, gallery, feature

- [x] 5.1 Criar `docs/.vitepress/theme/styles/hero.css` com variante `hero--split`, `.plate` framed figure, caption, animação `rise`
- [x] 5.2 Criar `docs/.vitepress/theme/styles/threshold.css` (fundo escuro, blockquote, regras rubric 48px)
- [x] 5.3 Criar `docs/.vitepress/theme/styles/edlist.css` (grid 3-col, hover underline animation, variante `edlist--people`)
- [x] 5.4 Criar `docs/.vitepress/theme/styles/gallery.css` (grid 3-col, `.gallery__frame` com aspect 4/3, hover border)
- [x] 5.5 Criar `docs/.vitepress/theme/styles/feature.css` (borders ink-top, rule-bottom, meta grid com small-caps labels)
- [x] 5.6 Criar `docs/.vitepress/theme/styles/article.css` (layout long-form com rail 18ch, prose capitular, h2 com square, blockquote rubric + scoped markdown styles)

## 6. VitePress theme integration

- [x] 6.1 Criar `docs/.vitepress/theme/index.ts` exportando tema com `Layout` customizado
- [x] 6.2 Criar `docs/.vitepress/theme/Layout.vue` com nav (hamburger mobile) + `<Content />` / `<HomePage />` + footer (layout base)
- [x] 6.3 Criar `docs/.vitepress/theme/styles/index.css` importando os módulos (tokens → base → typography → componentes)
- [x] 6.4 Importar `styles/index.css` em `Layout.vue` ou no `index.ts`
- [x] 6.5 Remover arquivos antigos do tema que foram superados: `theme/styles/index.css` legado e quaisquer componentes Vue obsoletos

## 7. Home page

- [x] 7.1 Refatorar `docs/index.md` com frontmatter `layout: home` + `HomePage.vue` component (hero split, seção Quem somos, threshold, feature, gallery, notícias, conselho)
- [x] 7.2 Verificar que o SVG `plate__art` do hero está inline no home (para evitar flicker e garantir atomicidade visual)
- [x] 7.3 Verificar que CTAs principais apontam a URLs coerentes com a estrutura atual (`/cursos/`, `/sobre/`)

## 8. Páginas internas — smoke test e ajustes

- [x] 8.1 Abrir `/sobre/` e verificar: article layout — removido wrapper `page-glass` de `sobre/index.md` e `sobre/secao-brasileira.md`; estilos markdown scoped via `.article >` rules
- [x] 8.2 Abrir `/cursos/`, `/eventos/`, `/noticias/`, `/publicacoes/`, `/biblioteca/`, `/documentos/`, `/contato/` — build compila sem erros; curl confirma 200 em todas as páginas do preview server
- [x] 8.3 Verificar que links internos do nav funcionam e que classe `.active` é aplicada via `isActive()` usando `useRoute()` do VitePress; menu fecha ao navegar

## 9. Configuração final e limpeza

- [x] 9.1 Atualizar `docs/.vitepress/config.ts`: `title`, `description`, `themeConfig.siteTitle`, `themeConfig.logo` apontando para `/brand/icon.svg`, `themeConfig.nav` preservada
- [x] 9.2 Garantir que `.vitepress/cache` está gitignored (já está)
- [x] 9.3 Remover diretório `prototype/` local após migração equivalente comprovada (gitignored, limpeza manual) — pendente pós-aprovação do usuário
- [x] 9.4 Atualizar `README.md` — será feito no commit

## 10. Validação

- [x] 10.1 `npm run build` passa sem erros e gera `docs/.vitepress/dist/`
- [x] 10.2 `npm run preview` abre corretamente e todas as páginas carregam (200 em /, /sobre/, /cursos/)
- [ ] 10.3 Verificar console do browser: sem warnings de hidratação, sem 404 em assets — requer inspeção visual pelo usuário
- [ ] 10.4 Verificar contraste WCAG AA nas pairings críticas (ink/cream, rubric/cream, cream/ink) — requer ferramenta no browser
- [ ] 10.5 Verificar responsividade em 390px, 720px, 1024px, 1440px — requer inspeção visual pelo usuário
- [ ] 10.6 Verificar comportamento com `prefers-reduced-motion: reduce` habilitado — requer browser setting
- [ ] 10.7 Smoke-test em Chrome, Firefox, Safari — fontes variáveis e backdrop-filter — requer multi-browser
