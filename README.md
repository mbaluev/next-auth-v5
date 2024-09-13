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
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### docker compose
1. `docker system prune -a` - clean up
2. `docker compose down --rmi all` - stop all containers
3. `docker compose pull` - pull all images
4. `docker compose up --build -d` - up containers
5. `docker exec -it <container_id> sh` - run docker shell 

### psql
1. `psql -h <REMOTE HOST> -p <REMOTE PORT> -U <DB_USER> <DB_NAME>` - connect to db example
2. `psql -h localhost -p 5433 -d auth -U sa -W` - connect to db
3. `SELECT * FROM pg_catalog.pg_tables WHERE schemaname = 'public';` - select table names

### prisma
1. `npx prisma studio` - open prisma studio
2. `npx prisma generate --schema=./prisma/schema.prisma` - generate client
3. `npx prisma migrate dev --name init` - create the first migration
4. `npx prisma migrate deploy --schema=./prisma/schema.prisma` - deploy migrations

### shadcn/ui
1. `npx shadcn-ui@latest add dialog` - add dialog to library

### aws ubuntu
1. `sudo su -` - switch to root user
2. - `apt-get update -y`
   - `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -`
   - `apt install -y nodejs` ?
   - `apt install npm -y` ?
   - `apt install nginx -y`
3. docker
```
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release

sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io

sudo groupadd docker
sudo usermod -aG docker $USER

docker -v
sudo docker run hello-world
```