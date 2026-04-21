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
        <p class="hero__kicker">associação internacional · seção brasileira</p>
        <h1 class="hero__title" id="hero-title">
          <span class="rubric-initial">P</span>esquisar, ensinar e <em>cantar</em> o repertório gregoriano no Brasil.
        </h1>
        <p class="hero__dek">
          A AISCGre Brasil dá continuidade, no país, à orientação semiológica inaugurada por Dom Eugène Cardine.
        </p>
        <div class="hero__meta">
          <a class="cta" href="#associe-se">Associe-se</a>
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
          A Associação Internacional de Estudos de Canto Gregoriano dá continuidade à orientação semiológica iniciada por <em>Dom Eugène Cardine</em> (1905–1988), guiada pelo princípio da simbiose entre texto e melodia.
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

  <!-- THRESHOLD: contexto internacional -->
  <section class="threshold" aria-label="contexto internacional">
    <div class="threshold__inner">
      <p class="threshold__kicker">contexto internacional</p>
      <blockquote class="threshold__quote">
        Mais de <em>700 membros</em> em <em>28 países</em>, organizados em seis seções — alemã, brasileira, espanhola, italiana, japonesa e polonesa.
      </blockquote>
    </div>
  </section>

  <!-- SEÇÃO BRASILEIRA + FOTO -->
  <section class="section section--alt" id="secao-brasileira" aria-labelledby="sec-secao">
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
              <img :src="photoJpg" alt="Diretoria e conselhos da AISCGre Brasil reunidos em encontro institucional." loading="lazy" />
            </picture>
          </div>
          <figcaption class="photo__caption">
            Diretoria e Conselhos da AISCGre Brasil, inclusive seu Presidente Prof. Dr. Clayton Júnior Dias, junto ao Prof. Dr. Giovanni Conti, Consultor do Dicastério para o Culto Divino e a Disciplina dos Sacramentos, vice-presidente da AISCGre Internacional e presidente da Seção Italiana.
            <span class="photo__credit">Foto: <a href="https://www.instagram.com/beatrizclleal/" target="_blank" rel="noopener">@beatrizclleal</a></span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- COROS -->
  <section class="section" id="coros" aria-labelledby="sec-coros">
    <div class="section__inner">
      <p class="section__label" id="sec-coros">Coros associados</p>
      <div class="section__body">
        <h2>Duas categorias de vínculo.</h2>
        <p>
          A AISCGre Brasil acolhe coros dedicados ao canto gregoriano e coros de repertório mais amplo que respeitem os princípios da semiologia quando executam o repertório gregoriano.
        </p>

        <div class="pairs pairs--equal">
          <div class="pair">
            <h3 class="pair__title">Efetivos</h3>
            <p>
              Grupos com estudo e prática regulares segundo os princípios semiológicos reconhecidos pela AISCGre, com regente ou diretor(a) de formação comprovada na área.
            </p>
          </div>
          <div class="pair">
            <h3 class="pair__title">Afiliados</h3>
            <p>
              Grupos que promovem ou incluem o canto gregoriano em seu repertório litúrgico, em vínculo institucional e cultural com a associação.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ASSOCIE-SE -->
  <section class="section section--alt" id="associe-se" aria-labelledby="sec-associe">
    <div class="section__inner">
      <p class="section__label" id="sec-associe">Associe-se</p>
      <div class="section__body">
        <h2>Pessoas físicas, coros e instituições são bem-vindos.</h2>
        <p>
          Podem associar-se quem reconheça e apoie a missão da AISCGre Brasil e tenha interesse no estudo, prática, pesquisa ou promoção do canto gregoriano. Entusiastas e apoiadores podem ser admitidos como colaboradores.
        </p>

        <div class="pairs pairs--equal cta-pairs">
          <div class="pair">
            <h3 class="pair__title">Pessoa física</h3>
            <p>Estudantes, pesquisadores, regentes, cantores e apoiadores.</p>
            <p><a class="cta" :href="formIndividual" target="_blank" rel="noopener">Formulário individual</a></p>
          </div>
          <div class="pair">
            <h3 class="pair__title">Coros e instituições</h3>
            <p>Scholas, corais litúrgicos, centros de formação e instituições culturais.</p>
            <p><a class="cta" :href="formCoros" target="_blank" rel="noopener">Formulário para coros</a></p>
          </div>
        </div>
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
  font-feature-settings: "smcp" on, "c2sc" on;
  text-transform: lowercase;
  color: var(--ink-muted);
}
.photo__credit a {
  color: var(--rubric);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 180ms ease;
}
.photo__credit a:hover { border-bottom-color: var(--rubric); }
</style>
