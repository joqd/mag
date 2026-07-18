mag — Personal site built with Nuxt

A minimal personal blog and resume website showcasing projects, writing, and skills. Built with TypeScript, Nuxt, and TailwindCSS.

### Quick start

Install dependencies and run locally:

```bash
pnpm install
pnpm dev
```

### Build for production

First, set variables in `.env`.

Then:

```bash
docker compose up -d
```

Config nginx and set reverse proxy on `127.0.0.0:3030`. done!

License: MIT
