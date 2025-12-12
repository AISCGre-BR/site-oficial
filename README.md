# Site Oficial AISCGre Brasil

Site oficial da Seção Brasileira da AISCGre (Associação Internacional de Estudos de Canto Gregoriano), construído com [VitePress](https://vitepress.dev/). O conteúdo principal agora está organizado dentro da pasta `docs`, com a configuração em `docs/.vitepress/` e suporte a identidade visual inspirada em manuscritos gregorianos.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)  
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🚀 Instalação

1. Clone o repositório (se ainda não tiver feito):
```bash
git clone <url-do-repositório>
cd site-oficial-aiscgre-br
```

2. Instale as dependências:
```bash
npm install
```

## 💻 Desenvolvimento

Para iniciar o servidor de desenvolvimento local com o conteúdo da pasta `docs`:

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173` (ou outra porta se 5173 estiver ocupada) e utiliza hot-reload para refletir alterações nos arquivos Markdown.

## 🧪 Teste / Preview

Para visualizar a versão de produção localmente (após o build):

```bash
npm run build
npm run preview
```

Isso irá:
1. Gerar os arquivos estáticos do site em `docs/.vitepress/dist`
2. Iniciar um servidor local para visualizar a versão de produção

## 🏗️ Build

Para gerar os arquivos estáticos do site para produção:

```bash
npm run build
```

Os arquivos gerados estarão na pasta `docs/.vitepress/dist`.

## 📁 Estrutura do Projeto

```
site-oficial-aiscgre-br/
├── docs/                # Conteúdo do site (páginas e estrutura em markdown)
│   ├── .vitepress/      # Configurações de tema, navegação e assets públicos
│   ├── index.md         # Página inicial personalizada
│   ├── sobre/           # Página institucional
│   ├── cursos/          # Cursos e módulos
│   ├── eventos/         # Eventos e encontros
│   ├── publicacoes/     # Publicações acadêmicas
│   ├── equipe/           # Coordenação e conselho
│   ├── contato/          # Informações de contato
│   └── lorem-ipsum.md   # Texto auxiliar para placeholder
├── package.json         # Dependências e scripts (aponta para docs)
├── package-lock.json    # Lockfile de dependências
├── README.md            # Este arquivo
└── instrucoes.md        # Briefing original para referência
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento (aponta para `docs`)  
- `npm run build` - Gera os arquivos estáticos para produção  
- `npm run preview` - Visualiza a versão de produção localmente  

## 🔧 Configuração

Edite `docs/.vitepress/config.ts` para ajustar nav, sidebar e identidade visual. Os estilos globais ficam em `docs/.vitepress/theme/styles/index.css` e o logo está em `docs/.vitepress/public/logo.svg`.

## 📚 Recursos

- [Documentação do VitePress](https://vitepress.dev/)  
- [Guia de Configuração](https://vitepress.dev/reference/site-config)  
- [Tema Padrão](https://vitepress.dev/reference/default-theme-config)

## 🤝 Contribuindo

1. Faça um fork do projeto  
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)  
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)  
4. Push para a branch (`git push origin feature/MinhaFeature`)  
5. Abra um Pull Request

## 📄 Licença

[Adicione informações sobre a licença aqui]
