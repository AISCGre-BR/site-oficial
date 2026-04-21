# AISCGre Brasil — Site Oficial

## Missão

Site institucional da **Seção Brasileira da AISCGre** (Associação Internacional de Estudo do Canto Gregoriano), maior referência nacional no estudo, ensino e prática do canto gregoriano com orientação semiológica.

## Público

Institucional — regentes, cantores, scholas, pesquisadores, estudantes de música sacra, e comunidades litúrgicas interessadas em canto gregoriano.

## Stack

- **VitePress 2** (alpha) — gerador estático
- **Vue 3** — componentes de tema quando necessário
- Saída estática, sem backend próprio

## Tom visual

Estética de **manuscrito carolíngio** — institucional, sóbrio, anti-template. Referência histórica concreta (Einsiedeln 121, Laon 239, Saint-Gall 359, Hartker Antiphonale), não estilização genérica de "coisa medieval".

## Arquitetura da informação

**Em definição.** Hipótese atual são seis seções pedidas pelo presidente da associação:

1. AISCGre Internacional (definição, história, seções, Cardine/Agustoni, revistas científicas)
2. AISCGre Brasil (histórico, conselho, sócios, coros associados, estatuto, galeria)
3. Canto Gregoriano (bibliografia, links, glossário/FAQ, cursos)
4. Notícias e Agenda (eventos, congressos, boletim)
5. Publicações e Recursos (publicações próprias, livros recomendados, arquivo de congressos, downloads)
6. Contato (e-mail, redes sociais)

Esta hipótese pode se mover conforme o trabalho avança. Não é contrato.

## Estado atual (2026-04-15)

Projeto retomado após meses parado. Implementação anterior (via GPT Codex) produziu:

- Estrutura de pastas em `docs/` que cobre parcialmente as seções acima
- Conteúdo textual em `.md` parcial (dummy em várias páginas via `docs/lorem-ipsum.md`)
- Tentativa de tema visual que não convence — últimos três commits são `"not quite there yet"`

**Prioridade imediata: redesign da identidade visual.** A arquitetura da informação será revisitada *depois* que o visual estabilizar.

## Arquivos de referência histórica

- `instrucoes.md` — briefing original inspirado em claytondias.com. **Histórico, não contrato.**
- `additional-instructions.md` — briefing posterior inspirado em aiscgre.pl com paleta e tipografia específicas. **Histórico, não contrato.**

Ambos serão superados pelas specs do OpenSpec conforme mudanças forem propostas e arquivadas.

## Convenções

- Conteúdo em **português do Brasil**, com latim quando litúrgica ou musicalmente apropriado
- Commits mascaram email pessoal via GitHub noreply
