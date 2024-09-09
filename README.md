This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Links

- [radix-ui/icons](https://www.radix-ui.com/icons)
- [vercel.com](https://vercel.com/account)
- [shadcn/ui](https://ui.shadcn.com/)
- [resend](https://resend.com)
- [next-auth](https://authjs.dev/getting-started/installation?framework=next.js)

## Run project

1. Install dependencies: `yarn`
2. Run the development server: `yarn dev`

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## docker compose
### One command
`docker compose down --rmi all && docker compose pull && docker compose up -d`
### Separate commands
1. `docker system prune -a` - clean up
2. `docker compose down --rmi all` - stop all containers
3. `docker compose pull` - pull all images
4. `docker compose up --build -d` - up containers

`psql -h localhost -p 5433 -d auth -U sa -W`
`psql -h <REMOTE HOST> -p <REMOTE PORT> -U <DB_USER> <DB_NAME>`
`SELECT * FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';`