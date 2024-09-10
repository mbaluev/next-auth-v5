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

### docker compose
1. `docker system prune -a` - clean up
2. `docker compose down --rmi all` - stop all containers
3. `docker compose pull` - pull all images
4. `docker compose up --build -d` - up containers

### psql
1. `psql -h <REMOTE HOST> -p <REMOTE PORT> -U <DB_USER> <DB_NAME>` - connect to db example
2. `psql -h localhost -p 5433 -d auth -U sa -W` - connect to db
3. `SELECT * FROM pg_catalog.pg_tables WHERE schemaname = 'public';` - select table names

### prisma
1. `prisma generate --schema=./prisma/schema.prisma` - generate client
2. `prisma migrate dev --name init` - create the first migration
3. `prisma migrate deploy --schema=./prisma/schema.prisma` - deploy migrations