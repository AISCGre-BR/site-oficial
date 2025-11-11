# Site Oficial AISCGre Brasil

Site oficial da Seção Brasileira da AISCGre (Associação Internacional de Estudos de Canto Gregoriano), construído com [VitePress](https://vitepress.dev/).

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

Para iniciar o servidor de desenvolvimento local:

```bash
npm run docs:dev
```

O site estará disponível em `http://localhost:5173` (ou outra porta se 5173 estiver ocupada).

O servidor de desenvolvimento possui hot-reload, então as alterações nos arquivos Markdown serão refletidas automaticamente no navegador.

## 🧪 Teste / Preview

Para visualizar a versão de produção localmente (após o build):

```bash
npm run docs:build
npm run docs:preview
```

Isso irá:
1. Gerar os arquivos estáticos do site
2. Iniciar um servidor local para visualizar a versão de produção

## 🏗️ Build

Para gerar os arquivos estáticos do site para produção:

```bash
npm run docs:build
```

Os arquivos gerados estarão na pasta `.vitepress/dist` (ou na pasta configurada no VitePress).

## 📦 Deploy

### Deploy no GitHub Pages

1. Configure o VitePress para usar a base correta no arquivo de configuração (se necessário)

2. Adicione um script de deploy no `package.json`:
```json
{
  "scripts": {
    "docs:deploy": "npm run docs:build && gh-pages -d .vitepress/dist"
  }
}
```

3. Instale o `gh-pages` como dependência de desenvolvimento:
```bash
npm install --save-dev gh-pages
```

4. Execute o deploy:
```bash
npm run docs:deploy
```

### Deploy no Netlify

1. Conecte seu repositório ao Netlify
2. Configure as seguintes opções:
   - **Build command**: `npm run docs:build`
   - **Publish directory**: `.vitepress/dist`

### Deploy no Vercel

1. Conecte seu repositório ao Vercel
2. Configure:
   - **Build command**: `npm run docs:build`
   - **Output directory**: `.vitepress/dist`

### Deploy Manual

1. Execute o build:
```bash
npm run docs:build
```

2. Faça upload do conteúdo da pasta `.vitepress/dist` para seu servidor web

## 📁 Estrutura do Projeto

```
site-oficial-aiscgre-br/
├── .vitepress/          # Configurações do VitePress (se existir)
├── index.md             # Página inicial
├── api-examples.md      # Exemplos de API
├── markdown-examples.md # Exemplos de Markdown
├── package.json         # Dependências e scripts
└── README.md           # Este arquivo
```

## 📝 Scripts Disponíveis

- `npm run docs:dev` - Inicia o servidor de desenvolvimento
- `npm run docs:build` - Gera os arquivos estáticos para produção
- `npm run docs:preview` - Visualiza a versão de produção localmente

## 🔧 Configuração

O VitePress pode ser configurado através de um arquivo `.vitepress/config.js` ou `.vitepress/config.ts`. Consulte a [documentação oficial do VitePress](https://vitepress.dev/reference/site-config) para mais detalhes.

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

