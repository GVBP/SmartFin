#Smartfin - Steps

- [NextJS](https://nextjs.org/) (v14.2.16)
- [NodeJS](https://nodejs.org/pt) (v20.17.0)
- [TypeScript](https://www.typescriptlang.org/) (v5)
- [ESLint](https://eslint.org/) (v8)
- [Tailwind CSS](https://tailwindcss.com/) (v3.4.1)
- [Prettier](https://prettier.io/) (Code formatter)
- [Shadcn](https://ui.shadcn.com/) (v2.1.3) - Component library

  - [React Hook Form](https://react-hook-form.com/) - Best library to create forms in react
  - [Zod](https://zod.dev/) - Library used to validate the form

- [App Router](https://nextjs.org/docs/app)
- [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

- [Eraser](https://www.eraser.io/) - Bank Modeling
- [Prisma](https://www.prisma.io/) (v5.21.1) - Database Queries (ORM - Object Relational Mapper) (Others - Drizzle)
- [Postgresql](https://www.postgresql.org/) (v16) - Relational Database
- [NeonDB](https://neon.tech/) - Cloud Database Service (Others - supabase, vercel)
- [Clerk](https://clerk.com/) (v5.7.5) - (Authentication and User Management) (Others - NextAuth.js)
- [Stripe](https://stripe.com/br) - (Receive payments online)
- [Docker](https://docs.docker.com/compose/)
- [OpenAI Platform](https://platform.openai.com/docs/overview)

- [Husky](https://www.npmjs.com/package/husky) (v9.1.6) - ([Git Hooks](https://git-scm.com/book/ms/v2/Customizing-Git-Git-Hooks))
- [lint-staged](https://www.npmjs.com/package/lint-staged/v/12.3.2) (v12.3.2)
- [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter) (v5.0.8) (Conventional Commits 1.0.0)

- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) - It provides an easy set of rules for creating an explicit commit history

```log
├── .husky
│   ├── _
│   ├── commit-msg
│   ├── pre-commit
├── .next (gitignore)
├── app
│   ├── _actions
│   │   ├── upsert-transaction
│   │   │   ├── index.ts
│   │   │   ├── schema.ts
│   ├── _components
│   │   ├── ui
│   │   │   ├── badge.tsx (shadcn)
│   │   │   ├── button.tsx (shadcn)
│   │   │   ├── calendar.tsx (shadcn)
│   │   │   ├── card.tsx (shadcn)
│   │   │   ├── chart.tsx (shadcn)
│   │   │   ├── data-table.tsx
│   │   │   ├── date-picker.tsx (shadcn)
│   │   │   ├── dialog.tsx (shadcn)
│   │   │   ├── form.tsx (shadcn)
│   │   │   ├── input.tsx (shadcn)
│   │   │   ├── label.tsx (shadcn)
│   │   │   ├── popover.tsx (shadcn)
│   │   │   ├── progress.tsx (shadcn)
│   │   │   ├── scroll-area.tsx (shadcn)
│   │   │   ├── select.tsx (shadcn)
│   │   │   ├── table.tsx (shadcn)
│   │   │   ├── tooltip.tsx (shadcn)
│   │   ├── add-transaction-button.tsx
│   │   ├── money-input.tsx
│   │   ├── navbar.tsx
│   │   ├── upsert-transaction-dialog.tsx
│   ├── _constants
│   │   ├── transactions.ts
│   ├── _data
│   │   ├── can-user-add-transaction
│   │   │   ├── index.ts
│   │   ├── get-current-month-transactions
│   │   │   ├── index.ts
│   │   ├── get-dashboard
│   │   │   ├── index.ts
│   │   │   ├── types.ts
│   ├── _lib
│   │   ├── utils.ts (shadcn)
│   │   ├── prisma.ts
│   ├── _utils
│   │   ├── currency.ts
│   ├── (home)
│   │   ├── _actions
│   │   │   ├── generate-ai-report
│   │   │   │   ├── index.ts
│   │   │   │   ├── schema.ts
│   │   ├── _components
│   │   │   ├── ai-report-button.tsx
│   │   │   ├── expenses-per-category.tsx
│   │   │   ├── last-transactions.tsx
│   │   │   ├── percentage-item.tsx
│   │   │   ├── summary-card.tsx
│   │   │   ├── summary-cards.tsx
│   │   │   ├── time-select.tsx
│   │   │   ├── transactions-pie-chart.tsx
│   │   ├── page.tsx (Home Page)
│   ├── api
│   │   ├── webhooks
│   │   │   ├── stripe
│   │   │   │   ├── route.ts
│   ├── login
│   │   ├── page.tsx
│   ├── subscription
│   │   ├── _actions
│   │   │   ├── create-stripe-checkout
│   │   │   │   ├── index.ts
│   │   ├── _components
│   │   │   ├── acquire-plan-button.tsx
│   │   ├── page.tsx
│   ├── transactions
│   │   ├── _columns
│   │   │   ├── index.tsx
│   │   ├── _components
│   │   │   ├── edit-transaction-button.tsx
│   │   │   ├── type-badge.tsx
│   │   ├── page.tsx
│   ├── fonts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx (Main Application Layout) {children}
├── docs
│   ├── Database
│   │   ├── App Representation: Financial Transactions Database.png
├── node_modules (gitignore)
├── prisma
│   ├── 20241107030807_init_db
│   │   ├── migration.sql
│   ├── migration_lock.toml
│   ├── schema.prisma (Define: Financial Transactions Database)
├── public
│   ├── bank-slip.svg
│   ├── bank-transfer.svg
│   ├── credit-card.svg
│   ├── debit-card.svg
│   ├── logo.png
│   ├── money.svg
│   ├── other.svg
│   ├── pix.svg
├── .env (gitignore)
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .lintstagedrc.json
├── .prettierrc.json
├── components.json (shadcn)
├── docker-compose.yml
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

## Prisma Client

```bash
$ npm install @prisma/client@5.21.1
```

## Prisma Studio (Optional)

Used for database maintenance and can be used to include new records:

```bash
$ npx prisma studio
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

### Add Components

1. Button:

```bash
$ npx shadcn@2.1.3 add button
```

2. Table:

```bash
$ npx shadcn@2.1.3 add table
```

```bash
$ npm install @tanstack/react-table@8.20.5
```

> Create file data-table.tsx

> Create file index.tsx

3. Badge:

```bash
$ npx shadcn@2.1.3 add badge
```

4. Dialog:

```bash
$ npx shadcn@2.1.3 add dialog
```

5. Form:

```bash
$ npx shadcn@2.1.3 add form
```

6. Input:

```bash
$ npx shadcn@2.1.3 add input
```

7. React Number Format:

```bash
$ npm install react-number-format@5.4.2
```

8. Select:

```bash
$ npx shadcn@2.1.3 add select
```

9. Popover and Calendar:

```bash
$ npx shadcn@2.1.3 add popover calendar
```

10. Card:

```bash
$ npx shadcn@2.1.3 add card
```

11. Chart:

```bash
$ npx shadcn@2.1.3 add chart
```

12. Progress:

```bash
$ npx shadcn@2.1.3 add progress
```

13. Tooltip:

```bash
$ npx shadcn@2.1.3 add tooltip
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

## Git Hooks Setup (Husky, lint-staged and git-commit-msg-linter)

1. Install

```bash
$ npm install -D husky@9.1.6
```

```bash
$ npm install -D lint-staged@12.3.2
```

```bash
$ npm i git-commit-msg-linter@5.0.8
```

2. Husky init

```bash
$ npx husky init
```

3. Work With Husky 5

```bash
$ npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1"
```

## Docker (Optional)

1. Create docker-compose.yml

2. Docker Up

```bash
$ docker-compose up -d
```

3. Migrate (Development) or (Production)

```bash
$ npx prisma migrate dev
```

```bash
$ npx prisma migrate deploy
```

## Stripe

create an account on the website: https://stripe.com/br

1. Set your environment variables (.env.local):

> create and copy product id from Stripe product catalog

> STRIPE_PREMIUM_PLAN_PRODUCT_ID

> STRIPE_PREMIUM_PLAN_PRICE_ID

> NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

> STRIPE_SECRET_KEY

2. Install Stripe:

```bash
$ npm install stripe@17.3.1
```

```bash
$ npm install @stripe/stripe-js@4.9.0
```

3. Web Hooks (Stripe - Event destinations):

3.1. [Download the Stripe CLI](https://stripe.com/docs/stripe-cli#install) and log in with your Stripe account:

```bash
$ stripe login
```

3.2. Route events to their destination:

```bash
$ stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

> STRIPE_WEBHOOK_SECRET

> NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL

## OpenAI

1. Create API keys:

> OPENAI_API_KEY

```bash
$ npm i openai@4.71.1
```

### OpenAI Formatting

```bash
$ npm i react-markdown@9.0.1
```

```bash
$ npm i -D @tailwindcss/typography@0.5.15
```
