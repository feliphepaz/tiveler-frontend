# Tiveler (front-end)

Front-end do SaaS Tiveler, uma plataforma criada para ajudar professores a organizar suas aulas, planejar atividades e manter o controle do material pedagógico de forma simples e prática.

## ✨ Sobre o projeto

O Tiveler é uma solução pensada para otimizar a rotina de docentes, centralizando ferramentas de organização e visualização do conteúdo escolar. A interface foi desenvolvida em Nuxt 3 com Vue 3 e Sass, com foco em uma experiência clara, moderna e responsiva.

### Principais objetivos

- Organizar aulas e disciplinas em um único lugar
- Facilitar o planejamento pedagógico
- Melhorar a experiência de cadastro e navegação do usuário
- Exibir uma interface comercial amigável para a proposta de SaaS

## 🛠️ Stack

- Nuxt 3
- Vue 3
- TypeScript
- Sass

## 📁 Estrutura do projeto

```bash
.
├── app.vue
├── assets/
│   └── scss/
├── components/
│   ├── home/
│   ├── register/
│   ├── CTA.vue
│   ├── contact-bar.vue
│   ├── custom-link.vue
│   ├── dropdown.vue
│   ├── field.vue
│   ├── footer.vue
│   ├── header.vue
│   ├── list-item.vue
│   ├── option.vue
│   ├── text.vue
│   └── ...
├── composables/
├── pages/
│   ├── index.vue
│   └── cadastro.vue
├── public/
├── server/
├── .gitignore
├── .prettierrc.json
├── nuxt.config.ts
├── package.json
├── tsconfig.json
├── yarn.lock
├── README.md
└── ...
```

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- Yarn

### Instalação

```bash
yarn install
```

### Executando em desenvolvimento

```bash
yarn dev
```

A aplicação ficará disponível em:

```bash
http://localhost:3000
```

## 🏗️ Build para produção

```bash
yarn build
```

Para visualizar a versão de produção localmente:

```bash
yarn preview
```

## 📌 Observações

Este repositório representa o frontend do projeto Tiveler e está em desenvolvimento contínuo. O projeto está estruturado para evoluir junto com a API e as demais partes do SaaS.

## 🔗 Links úteis

- Site em produção: https://tiveler-frontend.vercel.app
- Repositório do back-end: https://github.com/feliphepaz/tiveler-backend
- Documentação do Nuxt: https://nuxt.com/docs/getting-started/introduction
