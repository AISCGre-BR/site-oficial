import { defineConfig } from 'vitepress';

const nav = [
  { text: 'Início', link: '/' },
  { text: 'Sobre', link: '/sobre/' },
  {
    text: 'Cursos',
    items: [
      { text: 'Visão geral', link: '/cursos/' },
      { text: 'Semiologia', link: '/cursos/semiologia' },
      { text: 'Paleografia', link: '/cursos/paleografia' },
      { text: 'Modalidade', link: '/cursos/modalidade' },
      { text: 'Liturgia', link: '/cursos/liturgia' }
    ]
  },
  { text: 'Eventos', link: '/eventos/' },
  {
    text: 'Publicações',
    items: [
      { text: 'Visão geral', link: '/publicacoes/' },
      { text: 'Artigos', link: '/publicacoes/artigos' },
      { text: 'Cadernos e séries', link: '/publicacoes/cadernos' },
      { text: 'Trabalhos acadêmicos', link: '/publicacoes/graduacoes' }
    ]
  },
  { text: 'Equipe', link: '/equipe/' },
  { text: 'Blog', link: '/blog/' },
  { text: 'Contato', link: '/contato/' }
];

export default defineConfig({
  title: 'AISCGre Brasil',
  description:
    'Seção Brasileira da AISCGre dedicada ao ensino, pesquisa e prática do canto gregoriano em orientação semiológica.',
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#f5e9d3' }],
    ['meta', { name: 'keywords', content: 'gregoriano, AISCGre, canto, semiologia' }]
  ],
  themeConfig: {
    nav,
    sidebar: false,
    outline: false,
  logo: '/logo.svg',
  footer: {
    message: 'Construído pela AISCGre Brasil com base em VitePress',
    copyright: '© ' + new Date().getFullYear() + ' AISCGre Brasil'
  },
  socialLinks: [{ icon: 'mail', link: 'mailto:aiscgre-brasil@example.org' }]
  }
});
