#Smartfin - Steps

- [NextJS](https://nextjs.org/) (v14.2.16)
- [NodeJS](https://nodejs.org/pt) (v20.17.0)
- [TypeScript](https://www.typescriptlang.org/) (v5)
- [ESLint](https://eslint.org/) (v8)
- [Tailwind CSS](https://tailwindcss.com/) (v3.4.1)
- [Prettier](https://prettier.io/) (Code formatter)
- [Shadcn](https://ui.shadcn.com/) (v2.1.3) - Component library

- [App Router](https://nextjs.org/docs/app)
- [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

- [Eraser](https://www.eraser.io/) - Bank Modeling
- [Prisma](https://www.prisma.io/) (v5.21.1) - Database Queries (ORM - Object Relational Mapper) (Others - Drizzle)
- [Postgresql](https://www.postgresql.org/) (v16) - Relational Database
- [NeonDB](https://neon.tech/) - Cloud Database Service (Others - supabase, vercel)
- [Clerk](https://clerk.com/) (v5.7.5) - (Authentication and User Management) (Others - NextAuth.js)

- [Husky](https://www.npmjs.com/package/husky) (v9.1.6) - ([Git Hooks](https://git-scm.com/book/ms/v2/Customizing-Git-Git-Hooks))
- [lint-staged](https://www.npmjs.com/package/lint-staged/v/12.3.2) (v12.3.2)

- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) - It provides an easy set of rules for creating an explicit commit history

```log
├── .husky
│   ├── _
│   ├── pre-commit
├── .next (gitignore)
├── app
│   ├── _components
│   │   ├── ui
│   │   │   ├── button.tsx
│   ├── _lib
│   │   ├── utils.ts (shadcn)
│   ├── fonts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx (Main Application Layout) {children}
│   ├── page.tsx (Home Page)
├── docs
│   ├── Database
│   │   ├── App Representation: Financial Transactions Database.png
├── node_modules (gitignore)
├── prisma
│   ├── 20241107030807_init_db
│   │   ├── migration.sql
│   ├── migration_lock.toml
│   ├── schema.prisma (Define: Financial Transactions Database)
├── .env (gitignore)
├── .eslintrc.json
├── .gitignore
├── .lintstagedrc.json
├── .prettierrc.json
├── components.json (shadcn)
├── middleware.ts (clerk)
├── next-env.d.ts (gitignore)
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
```

## VSCode

Extensions:

- Tailwind CSS IntelliSense
- Prettier - Code formatter (settings > default formatter > select prettier | settings > format on save > check box - true)
- ESLint
- Simple React Snippets

## Getting Started

[Create Project](https://nextjs.org/docs/app/getting-started/installation):

```bash
$ npx create-next-app@14.2.16
```

```bash
project named? smartfin
TypeScript? Yes
ESLint? Yes
Tailwind CSS? Yes
src/ directory? No
App Router? Yes
import alias (@/*)? No
```

Installing dependencies:

- react
- react-dom
- next

Installing devDependencies:

- typescript
- @types/node
- @types/react
- @types/react-dom
- postcss
- tailwindcss
- eslint
- eslint-config-next

First, run the development server:

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Entity Relationship (Eraser.IO)

Visualize data models

```bash
transactions [icon: dollar-sign, color: green] {
  id string pk
  name string
  type string fk
  amount float
  category string fk
  date Date
  userId string
  createdAt datetime
  updatedAt datetime
  paymentMethod string fk
}

transaction_types [icon: tag, color: blue] {
  id string pk
  name string
}

transaction_categories [icon: list, color: yellow] {
  id string pk
  name string
}

transaction_payment_methods [icon: wallet, color: purple] {
  id string pk
  name string
}

transactions.type > transaction_types
transactions.category > transaction_categories
transactions.paymentMethod > transaction_payment_methods
```

## Prisma

As a first step, add the Prisma CLI as a development dependency to it:

```bash
$ npm install prisma@5.21.1
```

Next, set up your Prisma ORM project by creating your Prisma Schema file with the following command:

```bash
$ npx prisma init
```

> DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

> DATABASE_URL: Connection string (NeonDB)

## Migration

```bash
$ npx prisma migrate dev --name init_db
```

## Plugin Prettier

```bash
$ npm install -D prettier prettier-plugin-tailwindcss
```

```bash .prettierrc.json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Shadcn

```bash
$ npx shadcn@2.1.3 init
```

```bash
(y)
style? Default
base color? Neutra
CSS variables? yes
```

### Add Button Component

```bash
$ npx shadcn@2.1.3 add button
```

## Clerk

create an account on the website: https://clerk.com/

1. Install @clerk/nextjs:

```bash
$ npm install @clerk/nextjs@5.7.5
```

2. Set your environment variables (.env.local):

> NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

> CLERK_SECRET_KEY

3. Update middleware.ts

4. Add ClerkProvider to your app

### Clerk Themes

1. Install @clerk/themes:

```bash
$ npm install @clerk/themes@2.1.37
```

## Husky and lint-staged

Install (Dev):

```bash
$ npm install -D husky@9.1.6
```

```bash
$ npm install -D lint-staged@12.3.2
```

1. Husky init

```bash
$ npx husky init
```
