import { defineConfig } from 'vitepress';

const nav = [
  { text: 'Início', link: '/' },
  // {
  //   text: 'Sobre',
  //   items: [
  //     { text: 'AISCGre – Internacional', link: '/sobre/' },
  //     { text: 'Seção Brasileira', link: '/sobre/secao-brasileira' }
  //   ]
  // },
  // { text: 'Cursos', link: '/cursos/' },
  // {
  //   text: 'Projetos & Eventos',
  //   items: [
  //     { text: 'Dies Gregoriani', link: '/eventos/dies-gregoriani' },
  //     { text: 'Gregorianus de Vespera', link: '/eventos/gregorianus-de-vespera' },
  //     { text: 'Congressos', link: '/eventos/congressos' }
  //   ]
  // },
  { text: 'Sobre a AISCGre', link: '/1-AISCGre-Internacional/' },
  { text: 'Corpo Diretivo', link: '/2-AISCGre-Brasil/' },
  { text: 'Canto Gregoriano', link: '/3-Canto-Gregoriano/' },
  { text: 'Notícias e Agenda', link: '/4-Noticias-Agenda' },
  { text: 'Publicações', link: '/5-Publicacoes/' },
  { text: 'Contato', link: '/6-Contato/' },
  
];

export default defineConfig({
  title: 'AISCGre Brasil',
  description:
    'Seção Brasileira da AISCGre dedicada ao ensino, pesquisa e prática do canto gregoriano em orientação semiológica.',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '192x192', href: '/favicon-192x192.png' }],
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
    outline: false,
    logo: {
      light: '/nav-logo-light.png',
      dark: '/nav-logo-dark.png'
    },
    footer: {
      message: 'Construído pela AISCGre Brasil com base em VitePress',
      copyright: '© ' + new Date().getFullYear() + ' AISCGre Brasil'
    },
    socialLinks: [{ icon: 'mail', link: 'mailto:aiscgre-brasil@example.org' }]
  }
});
