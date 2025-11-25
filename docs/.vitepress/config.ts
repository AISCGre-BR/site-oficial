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
    'Seção Brasileira da AISCGre dedicada ao ensino, pesquisa e prática do canto gregoriano em orientação semiológica.',
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#f5f1e8' }],
    ['meta', { name: 'keywords', content: 'gregoriano, AISCGre, canto, semiologia' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap'
      }
    ]
  ],
  themeConfig: {
    nav,
    sidebar: false,
    outline: false,
    logo: '/logo-aiscgre-brasil.png',
    footer: {
      message: 'Construído pela AISCGre Brasil com base em VitePress',
      copyright: '© ' + new Date().getFullYear() + ' AISCGre Brasil'
    },
    socialLinks: [{ icon: 'mail', link: 'mailto:aiscgre-brasil@example.org' }]
  }
});
