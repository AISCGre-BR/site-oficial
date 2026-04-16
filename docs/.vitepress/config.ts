import { defineConfig } from 'vitepress';

const nav = [
  { text: 'Início', link: '/' },
  {
    text: 'Sobre',
    items: [
      { text: 'AISCGre – Internacional', link: '/sobre/' },
      { text: 'Seção Brasileira', link: '/sobre/secao-brasileira' }
    ]
  },
  { text: 'Cursos', link: '/cursos/' },
  {
    text: 'Projetos & Eventos',
    items: [
      { text: 'Dies Gregoriani', link: '/eventos/dies-gregoriani' },
      { text: 'Gregorianus de Vespera', link: '/eventos/gregorianus-de-vespera' },
      { text: 'Congressos', link: '/eventos/congressos' }
    ]
  },
  { text: 'Documentos', link: '/documentos/' },
  { text: 'Biblioteca', link: '/biblioteca/' },
  { text: 'Notícias', link: '/noticias/' },
  { text: 'Contato', link: '/contato' }
];

export default defineConfig({
  title: 'AISCGre Brasil',
  description:
    'Seção Brasileira da AISCGre — estudo, ensino e prática do canto gregoriano sob orientação semiológica.',
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#f6f1e7' }],
    ['meta', { name: 'keywords', content: 'canto gregoriano, AISCGre, semiologia, neumas, schola' }],
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
    nav,
    sidebar: false,
    outline: false,
    logo: '/brand/icon.svg',
    siteTitle: 'AISCGre Brasil',
    footer: {
      message: 'Associação Internacional de Estudo do Canto Gregoriano — Seção Brasileira',
      copyright: '© ' + new Date().getFullYear() + ' AISCGre Brasil'
    }
  }
});
