<script setup lang="ts">
import { withBase } from 'vitepress'

const photoJpg = withBase('/photos/diretoria-conselho.jpg')
const photoWebp = withBase('/photos/diretoria-conselho.webp')

const heroJpg = withBase('/photos/manuscrito-e121.jpg')
const heroWebp = withBase('/photos/manuscrito-e121.webp')

const formIndividual = 'https://docs.google.com/forms/d/e/1FAIpQLSfqifdcOtKqyOrixFthyWtdexqk1RAGR_H1XhMcS4vkI9Q3RA/viewform'
const formCoros = 'https://docs.google.com/forms/d/e/1FAIpQLSdyY68TMgq9vrj4b3igtSK2HvXdEQV8B8D1fUDJ3BnxsxpxOg/viewform'
</script>

<template>
  <!-- HERO -->
  <section class="hero hero--split" id="inicio" aria-labelledby="hero-title">
    <div class="hero__grid hero__grid--split">
      <div class="hero__text">
        <p class="hero__kicker">Canto Gregoriano · Orientação Semiológica</p>
        <h1 class="hero__title" id="hero-title">
          <span class="rubric-initial">P</span>esquisar, ensinar e <em>interpretar</em> o repertório gregoriano no Brasil.
        </h1>
        <p class="hero__dek">
          A AISCGre — Seção Brasileira dá continuidade, no país, à orientação semiológica inaugurada por Dom Eugène Cardine, OSB.
        </p>
        <div class="hero__meta">
          <a class="cta" href="#pessoa-fisica">Associe-se</a>
          <a class="cta cta--ghost" href="#aiscgre">Saiba mais</a>
        </div>
      </div>

      <figure class="hero__figure">
        <div class="plate plate--photo">
          <picture>
            <source :srcset="heroWebp" type="image/webp" />
            <img :src="heroJpg" alt="Inicial P historiada em ouro e vermelho abrindo o introito Puer natus est nobis, no Codex Einsiedeln 121." />
          </picture>
        </div>
        <figcaption class="plate__caption">
          Intróito <em>Puer natus</em> no Codex Einsiedeln 121
        </figcaption>
      </figure>
    </div>
  </section>

  <!-- O QUE É A AISCGRE -->
  <section class="section" id="aiscgre" aria-labelledby="sec-aiscgre">
    <div class="section__inner">
      <p class="section__label" id="sec-aiscgre">A AISCGre</p>
      <div class="section__body">
        <h2>Pesquisa, ensino e prática do canto gregoriano.</h2>
        <p>
          A <a href="https://www.aiscgre.org/" target="_blank" rel="noopener">Associação Internacional de Estudo do Canto Gregoriano</a> dá continuidade à orientação semiológica iniciada por <em>Dom Eugène Cardine, OSB</em> (1905–1988), guiada pelo princípio da simbiose entre texto e melodia.
        </p>

        <div class="pairs">
          <div class="pair">
            <h3 class="pair__title">Abordagem</h3>
            <p>
              A semiologia gregoriana conduz da paleografia à compreensão do significado musical e expressivo da notação neumática.
            </p>
          </div>
          <div class="pair">
            <h3 class="pair__title">Atuação</h3>
            <p>
              Pesquisa, publicação científica, ensino em diversos níveis e organização de cursos, conferências, concertos e gravações.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FUNDAMENTOS ECLESIAIS -->
  <section class="section section--alt" id="fundamentos" aria-labelledby="sec-fundamentos">
    <div class="section__inner">
      <p class="section__label" id="sec-fundamentos">Fundamentos</p>
      <div class="section__body">
        <h2>Em continuidade com o magistério da Igreja.</h2>
        <p>
          O trabalho da AISCGre desenvolve-se em comunhão com o Magistério e à luz do Concílio Vaticano II, que recomendou expressamente a continuidade da pesquisa científica sobre os livros de canto gregoriano.
        </p>

        <div class="citations">
          <blockquote class="citation">
            <p>
              Procure terminar-se a edição típica dos livros de canto gregoriano; prepare-se uma edição mais crítica dos livros já editados depois da reforma de S. Pio X.
            </p>
            <cite>Concílio Vaticano II · <em>Sacrosanctum Concilium</em>, §117</cite>
          </blockquote>

          <blockquote class="citation">
            <p>
              A fundação da Seção Brasileira da AISCGre representa um passo importante no fortalecimento da pesquisa, da formação e da prática qualificada do canto gregoriano em nosso país, sempre em comunhão com o Magistério da Igreja e com o espírito do Concílio Vaticano II.
            </p>
            <cite>Dom Ricardo Hoepers · Secretário-Geral da CNBB<br/>Mensagem ao <em>Laudis Canticum</em> · dezembro de 2025</cite>
          </blockquote>
        </div>
      </div>
    </div>
  </section>

  <!-- THRESHOLD: contexto internacional -->
  <section class="threshold" aria-label="contexto internacional">
    <div class="threshold__inner">
      <p class="threshold__kicker">Contexto Internacional</p>
      <blockquote class="threshold__quote">
        Mais de <em>700 membros</em> em <em>28 países</em>, organizados em seis seções — alemã, brasileira, espanhola, italiana, japonesa e polonesa.
      </blockquote>
    </div>
  </section>

  <!-- SEÇÃO BRASILEIRA + FOTO + CONSELHOS -->
  <section class="section" id="secao-brasileira" aria-labelledby="sec-secao">
    <div class="section__inner">
      <p class="section__label" id="sec-secao">Seção Brasileira</p>
      <div class="section__body">
        <h2>A mais recente das seções da AISCGre.</h2>
        <p>
          A Seção Brasileira reúne associados de diversas regiões do país em torno da pesquisa, do ensino e da prática do canto gregoriano segundo a orientação semiológica. Seu núcleo fundador consolidou-se a partir da atuação do <strong>Prof. Dr. Clayton Júnior Dias</strong>, primeiro presidente da seção.
        </p>

        <figure class="photo">
          <div class="photo__frame">
            <picture>
              <source :srcset="photoWebp" type="image/webp" />
              <img :src="photoJpg" alt="Diretoria e conselhos da AISCGre — Seção Brasileira reunidos em encontro institucional." loading="lazy" />
            </picture>
          </div>
          <figcaption class="photo__caption">
            Diretoria e Conselhos da AISCGre — Seção Brasileira, inclusive seu Presidente Prof. Dr. Clayton Júnior Dias, junto ao Prof. Dr. Giovanni Conti, Consultor do Dicastério para o Culto Divino e a Disciplina dos Sacramentos, vice-presidente da AISCGre Internacional e presidente da Seção Italiana.
            <span class="photo__credit">Foto: <a href="https://www.instagram.com/beatrizclleal/" target="_blank" rel="noopener">@beatrizclleal</a></span>
          </figcaption>
        </figure>

        <div class="board">
          <div class="board__group">
            <h3 class="board__title">Diretoria</h3>
            <dl class="roster">
              <div class="roster__row">
                <dt>Presidente</dt>
                <dd>Prof. Dr. Clayton Júnior Dias</dd>
              </div>
              <div class="roster__row">
                <dt>Vice-presidente</dt>
                <dd>Pe. Breno Cury Alheiro da Silva</dd>
              </div>
              <div class="roster__row">
                <dt>1.º Secretário</dt>
                <dd>Prof. Me. Diego da Silva Lima</dd>
              </div>
              <div class="roster__row">
                <dt>2.º Secretário</dt>
                <dd>Willian Lovato</dd>
              </div>
              <div class="roster__row">
                <dt>1.º Tesoureiro</dt>
                <dd>Pe. Filipe Gonçalves Macêdo</dd>
              </div>
              <div class="roster__row">
                <dt>2.º Tesoureiro</dt>
                <dd>Lucas Siduoski</dd>
              </div>
            </dl>
          </div>

          <div class="board__group">
            <h3 class="board__title">Conselho Fiscal</h3>
            <ul class="roster roster--list">
              <li>Edwin Aldrin Corrêa Lima</li>
              <li>Me. Laércio Benedito Savali de Sousa</li>
              <li>Nivaldo Aparecido de Souza Júnior</li>
            </ul>
          </div>

          <div class="board__group">
            <h3 class="board__title">Conselho Consultivo</h3>
            <ul class="roster roster--list">
              <li>Dr. Antonio Carlos Silvano Pessotti</li>
              <li>Daniela Ayres da Rocha</li>
              <li>Dr. Fernando Sávio da Conceição Cury</li>
              <li>Prof. Me. Felipe Antônio Bernardo</li>
              <li>Prof. Dr. Giovanni Conti</li>
              <li>Me. Danilo Martins Ferreira</li>
              <li>Prof. Dr. André Alves Gaby</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PESSOA FÍSICA -->
  <section class="section section--alt" id="pessoa-fisica" aria-labelledby="sec-pf">
    <div class="section__inner">
      <p class="section__label" id="sec-pf">Associação para Pessoa Física</p>
      <div class="section__body">
        <h2>Para estudantes, pesquisadores, regentes, cantores e apoiadores.</h2>
        <p>
          Podem associar-se aqueles que reconheçam e apoiem a missão da AISCGre — Seção Brasileira e tenham interesse no estudo, na prática, na pesquisa ou na promoção do canto gregoriano. Entusiastas e apoiadores podem ser admitidos como colaboradores.
        </p>
        <p><a class="cta" :href="formIndividual" target="_blank" rel="noopener">Formulário Individual</a></p>
      </div>
    </div>
  </section>

  <!-- COROS E INSTITUIÇÕES -->
  <section class="section" id="coros-instituicoes" aria-labelledby="sec-ci">
    <div class="section__inner">
      <p class="section__label" id="sec-ci">Associação para Coros e Instituições</p>
      <div class="section__body">
        <h2>Para Scholas, corais litúrgicos e instituições culturais.</h2>
        <p>
          A AISCGre — Seção Brasileira acolhe tanto Coros dedicados ao canto gregoriano quanto Coros de repertório mais amplo que observam os princípios da semiologia ao executar o repertório gregoriano. Os Coros associados se classificam em duas categorias:
        </p>

        <div class="pairs pairs--equal">
          <div class="pair">
            <h3 class="pair__title">Efetivos</h3>
            <p>
              Grupos com estudo e prática regulares segundo os princípios semiológicos reconhecidos pela AISCGre, com regente ou diretor(a) com formação comprovada na área.
            </p>
          </div>
          <div class="pair">
            <h3 class="pair__title">Afiliados</h3>
            <p>
              Grupos que promovem ou incluem o canto gregoriano em seu repertório, mantendo vínculo institucional e cultural com a associação.
            </p>
          </div>
        </div>

        <p style="margin-top: var(--s-5);"><a class="cta" :href="formCoros" target="_blank" rel="noopener">Formulário para Coros e Instituições</a></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pairs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--s-6);
  margin-top: var(--s-5);
}
@media (max-width: 780px) {
  .pairs { grid-template-columns: 1fr; gap: var(--s-5); }
}
.pair__title {
  font-size: 1.3rem;
  font-weight: 540;
  color: var(--ink);
  margin: 0 0 var(--s-3);
  padding-left: 1.4rem;
  position: relative;
  letter-spacing: -0.005em;
}
.pair__title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 8px; height: 8px;
  background: var(--rubric);
}
.pair p { margin: 0 0 var(--s-3); color: var(--ink-soft); }

.cta-pairs .pair {
  background: var(--surface);
  padding: var(--s-5) var(--s-5) var(--s-4);
  border: 1px solid var(--rule-soft);
}

.photo { margin: var(--s-6) 0 0; }
.photo__frame {
  background: var(--cream-deep);
  border: 1px solid var(--rule);
  overflow: hidden;
}
.photo__frame img {
  display: block;
  width: 100%;
  height: auto;
}
.photo__caption {
  font-size: 0.92rem;
  color: var(--ink-muted);
  line-height: 1.55;
  margin-top: var(--s-3);
  font-style: italic;
  max-width: 62ch;
}
.photo__credit {
  display: block;
  margin-top: var(--s-2);
  font-style: normal;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  color: var(--ink-muted);
}
.photo__credit a {
  color: var(--rubric);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 180ms ease;
}
.photo__credit a:hover { border-bottom-color: var(--rubric); }

/* ---------- Citations (SC + CNBB) ---------- */

.citations {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--s-5);
  margin-top: var(--s-5);
}
@media (max-width: 780px) {
  .citations { grid-template-columns: 1fr; gap: var(--s-4); }
}
.citation {
  margin: 0;
  padding: var(--s-4) var(--s-4) var(--s-4) var(--s-4);
  background: var(--surface);
  border-left: 2px solid var(--rubric);
  color: var(--ink-soft);
}
.citation p {
  margin: 0 0 var(--s-3);
  font-style: italic;
  font-size: 1.02rem;
  line-height: 1.55;
  color: var(--ink-soft);
}
.citation cite {
  display: block;
  font-style: normal;
  font-size: 0.88rem;
  letter-spacing: 0.01em;
  color: var(--ink-muted);
  line-height: 1.55;
}
.citation cite em {
  font-style: italic;
  color: var(--ink-soft);
}

/* ---------- Board (diretoria & conselhos) ---------- */

.board {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--s-5);
  margin-top: var(--s-7);
  padding-top: var(--s-5);
  border-top: 1px solid var(--rule);
}
@media (max-width: 900px) {
  .board { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .board { grid-template-columns: 1fr; gap: var(--s-5); }
}
.board__title {
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  color: var(--rubric);
  font-weight: 560;
  margin: 0 0 var(--s-3);
  padding-left: 1.2rem;
  position: relative;
}
.board__title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px; height: 6px;
  background: var(--rubric);
}
.roster {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.95rem;
  line-height: 1.5;
}
.roster__row {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--rule-soft);
}
.roster__row:last-child { border-bottom: none; }
.roster dt {
  font-size: 0.82rem;
  letter-spacing: 0.02em;
  color: var(--ink-muted);
  font-weight: 500;
  margin-bottom: 0.2rem;
}
.roster dd {
  margin: 0;
  color: var(--ink);
  font-weight: 440;
}
.roster--list li {
  padding: 0.45rem 0;
  border-bottom: 1px solid var(--rule-soft);
  color: var(--ink);
  font-weight: 440;
}
.roster--list li:last-child { border-bottom: none; }
</style>
