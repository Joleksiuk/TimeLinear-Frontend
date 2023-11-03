FROM node:18.17-alpine3.18
COPY package.json package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build 