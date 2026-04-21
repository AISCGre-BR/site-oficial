import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'AISCGre Brasil',
  description:
    'Seção Brasileira da AISCGre — pesquisa, ensino e prática do canto gregoriano sob orientação semiológica.',
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#f6f1e7' }],
    ['meta', { name: 'keywords', content: 'canto gregoriano, AISCGre, semiologia, neumas, schola, Cardine' }],
    ['meta', { property: 'og:title', content: 'AISCGre Brasil — Seção Brasileira' }],
    ['meta', { property: 'og:description', content: 'Associação Internacional de Estudos de Canto Gregoriano — Seção Brasileira.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/brand/icon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..900;1,8..60,300..900&display=swap'
      }
    ]
  ],
  themeConfig: {
    siteTitle: 'AISCGre Brasil',
    logo: '/brand/icon.svg'
  }
});
