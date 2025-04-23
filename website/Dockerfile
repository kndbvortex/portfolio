FROM node:latest

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run dev

FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html