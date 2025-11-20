# AISCGre Brasil – Design & Content Brief para VitePress

Este documento descreve como deve ser o site da **Seção Brasileira da AISCGre** usando **VitePress**, inspirado no layout e na organização do site *claytondias.com*, mas com identidade visual própria, centrada em **neumas** e **manuscritos gregorianos**.

O objetivo é que uma IA (por exemplo, o GitHub Copilot/Codex no VSCode) consiga gerar:

- estrutura de pastas e arquivos do VitePress  
- arquivos `.md` principais  
- componentes de layout (tema customizado)  

tendo este arquivo como referência.

---

## 1. Objetivo geral do site

O site representa a **Seção Brasileira da AISCGre**, ligada à associação internacional dedicada ao estudo, ensino e prática do canto gregoriano com orientação semiológica.

Funções principais:

- Apresentar **quem é a AISCGre Brasil** e sua relação com a AISCGre internacional.  
- Divulgar **cursos, encontros, oficinas e congressos** de canto gregoriano no Brasil.  
- Disponibilizar **materiais de estudo** (semiologia, paleografia, modal, liturgia, repertório).  
- Listar **publicações, pesquisas e eventos acadêmicos** relacionados ao canto gregoriano.  
- Facilitar **contato** com a equipe da seção brasileira.  

---

## 2. Público-alvo

- Regentes de coro, cantores e organistas ligados à liturgia.  
- Estudiosos de música sacra, história da música e musicologia.  
- Estudantes de graduação/pós-graduação em música e áreas afins.  
- Pessoas interessadas em espiritualidade e tradição litúrgica ligada ao canto gregoriano.

Tom do texto:

- **Sério, acadêmico, mas acessível.**  
- Português do Brasil, com eventuais termos técnicos em latim/italiano/inglês quando necessário.  
- Evitar linguagem publicitária exagerada.

---

## 3. Inspiração de layout (a partir de claytondias.com)

Inspiração a partir da homepage e páginas internas:

- **Menu superior fixo** com:
  - Logo à esquerda (no nosso caso, “AISCGre Brasil” + símbolo/brasão simples).
  - Itens de menu com submenus organizando cursos, conteúdos acadêmicos e contato.

- **Hero section** na página inicial:
  - Fundo com textura de pergaminho claro ou imagem suave de manuscrito gregoriano.
  - Título de destaque (por exemplo, “Seção Brasileira da AISCGre”).
  - Subtítulo curto explicando a missão no Brasil.
  - Botão de chamada para ação (ex.: “Ver próximos cursos” ou “Ingressar na associação”).

- **Blocos de destaque** logo abaixo do hero:
  - Card para **próximo curso ou encontro** (com data e local).
  - Card para **texto institucional** (“O que é a AISCGre Brasil?”).
  - Card para **cadernos, publicações ou materiais**.

- **Sessão “Sobre / Quem somos”**:
  - Breve apresentação da AISCGre internacional.
  - Texto específico sobre a Seção Brasileira.
  - Possível foto de manuscrito ou de curso/cursores.

- **Sessão de cursos e formações**:
  - Grade de cartões de cursos (semiologia, paleografia, modalidade, liturgia, oficinas práticas, etc.).
  - Cada cartão: título do curso, nível (introdutório/avançado), breve descrição, link para detalhes.

- **Sessão acadêmica** (inspirada na seção “Acadêmicos” do site de referência):
  - Links organizados para:
    - Teses e dissertações.
    - Artigos.
    - Eventos científicos.
    - Coordenação de publicações e gravações.
  - Estrutura simples em listas ou cards.

- **Rodapé**:
  - Localização geral (Brasil), email oficial, links para AISCGre internacional.
  - Créditos do desenvolvimento do site.
  - Links para redes sociais (se existirem).

---

## 4. Identidade visual: neumas e manuscritos gregorianos

### 4.1. Paleta de cores sugerida

Instruções para o tema do VitePress:

- Fundo principal: tons de **pergaminho** (creme claro, levemente texturizado).
- Texto: cinza-escuro puxando para **marrom**, para suavizar o contraste em relação ao preto puro.
- Destaques e links:
  - Tons de **vermelho profundo** (remetendo ao rubricado dos manuscritos).
  - Possível uso de um **azul escuro ou verde escuro** para elementos secundários.
- Bordas e divisores: cinza quente suave, para lembrar tinta antiga desbotada.

### 4.2. Tipografia

- Fonte de texto: serifada legível para corpo do texto (ex.: “Georgia”, “Merriweather” ou outra serif); deixar a IA escolher, mas sempre com cara “editorial/clássica”.
- Títulos: fonte serifada mais marcante ou uma variante sem serifa com bom contraste.
- Subtítulos e legendas podem utilizar itálico em referências a textos latinos e citações de manuscritos.

### 4.3. Imagens e elementos gráficos

Instruções para o uso de imagens (não precisa gerar as imagens, apenas preparar o layout):

- Usar **fotos ou scans** de:
  - Manuscritos gregorianos.
  - Detalhes de neumas (especialmente notação sangalense e manuscritos de Graduale/Antiphonale).
- Imagens devem ser:
  - Suaves, com opacidade reduzida quando usadas como fundo.
  - Nítidas quando exibidas como destaque em uma galeria ou card.
- Ícones simples derivados de:
  - Neumas isolados (por exemplo, podatus, clivis, torculus).
  - Letras iniciais ornamentadas (capital iluminada estilizada).

---

## 5. Arquitetura do site em VitePress

### 5.1. Estrutura básica de pastas

Sugerir à IA gerar algo como:

- `docs/.vitepress/config.ts` – configuração do tema, menu, footer.  
- `docs/index.md` – página inicial.  
- `docs/sobre/index.md` – sobre a AISCGre Brasil.  
- `docs/cursos/index.md` – visão geral dos cursos.  
- `docs/cursos/semiologia.md`  
- `docs/cursos/paleografia.md`  
- `docs/cursos/modalidade.md`  
- `docs/cursos/liturgia.md`  
- `docs/eventos/index.md` – eventos, encontros, congressos.  
- `docs/publicacoes/index.md` – publicações e materiais.  
- `docs/publicacoes/artigos.md`  
- `docs/publicacoes/cadernos.md`  
- `docs/publicacoes/graduacoes.md` – teses, dissertações, monografias.  
- `docs/equipe/index.md` – equipe, conselho, coordenação.  
- `docs/contato/index.md` – formulário de contato ou instruções.  
- `docs/blog/index.md` – listagem de posts (se for usar blog estático com VitePress).  
- `docs/lorem-ipsum.md` – **arquivo com texto dummy** que será fornecido manualmente pelo usuário, para ser reutilizado como conteúdo fictício em páginas que ainda não tiverem texto definitivo.

### 5.2. Configuração de navegação (menu)

No `themeConfig.nav`, a IA deve criar algo semelhante a:

- **Início** → `/`  
- **Sobre** → `/sobre/`  
- **Cursos** → menu dropdown com:
  - Introdutórios → `/cursos/`
  - Semiologia → `/cursos/semiologia`
  - Paleografia → `/cursos/paleografia`
  - Modalidade → `/cursos/modalidade`
  - Liturgia → `/cursos/liturgia`
- **Eventos** → `/eventos/`  
- **Publicações** → dropdown com:
  - Visão geral → `/publicacoes/`
  - Artigos → `/publicacoes/artigos`
  - Cadernos e séries → `/publicacoes/cadernos`
  - Trabalhos acadêmicos → `/publicacoes/graduacoes`
- **Equipe** → `/equipe/`  
- **Blog** → `/blog/`  
- **Contato** → `/contato/`

---

## 6. Conteúdo sugerido para cada página

**Observação importante para a IA:**  
O texto abaixo é **apenas descritivo**. Ao gerar o conteúdo real, usar texto original, sem copiar de outros sites, mas mantendo o tom acadêmico e litúrgico.

Quando for necessário usar texto fictício, **reaproveitar o conteúdo do arquivo `docs/lorem-ipsum.md`** em vez de inventar textos dummy diferentes em cada página.

### 6.1. `index.md` (Página inicial)

Seções principais:

1. **Hero**  
   - Título: algo como “AISCGre – Seção Brasileira”.  
   - Subtítulo: explicar em 1 ou 2 frases que é uma seção ligada à associação internacional dedicada ao estudo e à prática do canto gregoriano.  
   - Botão: “Próximos cursos” (link para `/cursos/`) e/ou “Conheça a associação” (link para `/sobre/`).

2. **Próximos eventos / cursos**  
   - Cards com:
     - Nome do curso ou encontro.  
     - Local (cidade/estado ou online).  
     - Data.  
     - Breve descrição (uma ou duas frases).  
     - Botão “Saiba mais”.

3. **O que é a AISCGre**  
   - Pequeno bloco texto explicando a missão da AISCGre no mundo (pesquisa, ensino e prática do canto gregoriano com orientação semiológica).  
   - Explicar que a seção brasileira partilha da mesma visão, adaptando as ações ao contexto brasileiro.

4. **Destaques acadêmicos**  
   - Lista de 3 a 6 itens:
     - Publicações relevantes de membros.  
     - Parcerias com universidades.  
     - Participação em congressos.

5. **Chamada para participação**  
   - Seção convidando:
     - Regentes, cantores, estudantes a se aproximarem da AISCGre Brasil.  
     - Indicar formas de participar (inscrição em cursos, lista de emails, etc.).

### 6.2. `sobre/index.md`

Conteúdos:

- Breve histórico da AISCGre internacional.  
- Explicação do que é “orientação semiológica” aplicada ao canto gregoriano (sem aprofundar demais, apenas introdutório).  
- Quando e por que a Seção Brasileira foi constituída (se não houver datas exatas definidas, deixar espaço para edição manual).  
- Objetivos específicos da seção:
  - Promover cursos de formação.  
  - Incentivar pesquisa e publicações.  
  - Apoiar coros e comunidades litúrgicas.

### 6.3. `cursos/*.md`

Para cada tipo de curso (semiologia, paleografia, etc.):

- Breve explicação sobre o foco do curso.  
- Público-alvo.  
- Pré-requisitos (se houver).  
- Possíveis módulos: introdutório, intermediário, avançado.  
- Espaço para inserir calendário e links de inscrição.  
- Onde precisar de “texto longo” apenas ilustrativo, indicar “ver conteúdo em `lorem-ipsum.md`”.

### 6.4. `eventos/index.md`

- Listagem de eventos passados e futuros:
  - Data.  
  - Título.  
  - Local.  
  - Tipo (curso, congresso, encontro de coro, retiro, etc.).  
- Possível separação em seções “Próximos eventos” e “Eventos anteriores”.
- Quando o conteúdo descritivo ainda não estiver definido, usar pequenos trechos do `lorem-ipsum.md`.

### 6.5. `publicacoes/*`

- **`publicacoes/index.md`**: visão geral das publicações ligadas à AISCGre Brasil.  
- **`artigos.md`**: lista com referência bibliográfica resumida e, se possível, link.  
- **`cadernos.md`**: descrever séries, cadernos e materiais didáticos.  
- **`graduacoes.md`**: teses, dissertações, TCCs, com título, autor, instituição, ano.

Em qualquer uma dessas páginas, quando o texto ainda não existir, instruir a IA a inserir apenas blocos curtos (1–2 parágrafos) e, se precisar de volume maior, comentar algo como:

> <!-- placeholder: texto adicional pode ser importado de `lorem-ipsum.md` -->

### 6.6. `equipe/index.md`

- Lista de nomes da coordenação, conselho, responsáveis por cursos.  
- Para cada pessoa:
  - Nome completo.  
  - Função na AISCGre Brasil.  
  - Pequena bio (3 a 5 linhas).  
  - Possível link para Lattes, ORCID ou página acadêmica.
- Enquanto as bios reais não estiverem prontas, usar pequenos trechos do `lorem-ipsum.md`.

### 6.7. `contato/index.md`

- Endereço de email oficial.  
- Formas de contato (formulário, redes sociais, etc. – a IA pode gerar um layout genérico, sem backend).  
- Mensagem acolhedora para quem deseja:
  - Informações sobre cursos.  
  - Propor parcerias.  
  - Esclarecer dúvidas sobre o canto gregoriano.  
- Se faltar texto, repetir a orientação de reaproveitar `lorem-ipsum.md` como fonte de dummy text.

---

## 7. Comportamento responsivo e acessibilidade

Instruções para componentes de layout em VitePress:

- Layout deve ser **totalmente responsivo**:
  - Menu se transforma em hamburguer no mobile.  
  - Cartões de cursos e eventos organizados em uma coluna em telas pequenas e em múltiplas colunas em telas maiores.

- Acessibilidade:
  - Contraste adequado entre texto e fundo.  
  - Títulos hierárquicos (`h1`, `h2`, `h3`…) bem estruturados.  
  - Texto alternativo (`alt`) para todas as imagens, especialmente manuscritos e neumas.

---

## 8. Instruções explícitas para a IA (Codex)

Ao gerar o projeto VitePress com base neste arquivo:

1. **Criar** a estrutura de pastas indicada em `docs/`, incluindo o arquivo `docs/lorem-ipsum.md`.  
   - Presumir que o usuário irá preencher `lorem-ipsum.md` com texto dummy longo.  
2. **Configurar** `.vitepress/config.ts` com:
   - `title: "AISCGre Brasil"`  
   - `description` adequada em português.  
   - `themeConfig.nav` e `themeConfig.sidebar` coerentes com as seções acima.  
3. **Aplicar** uma identidade visual que:
   - Use cores e tipografia inspiradas em manuscritos gregorianos, conforme descrito.  
   - Inclua áreas de fundo com textura/ilustração de manuscritos (sem depender de imagens específicas; apenas preparar classes e containers).  
4. **Gerar texto placeholder curto**:
   - Em português do Brasil, com tom acadêmico-litúrgico.  
   - SEM copiar textos de outros sites; todo o conteúdo textual deve ser original.  
   - Sempre que precisar de **texto dummy mais longo**, **não gerar novo “lorem ipsum”**, mas:
     - Referenciar explicitamente o arquivo `docs/lorem-ipsum.md`; ou  
     - Comentar que o texto daquela seção deve ser preenchido reutilizando trechos de `lorem-ipsum.md`.  
5. **Comentar no código** (em inglês ou português) onde o usuário deve substituir:
   - Imagens de manuscritos.  
   - Logos e brasões.  
   - Datas reais de cursos, eventos e publicações.  
   - Trechos de `lorem-ipsum.md` por conteúdo final.

---
