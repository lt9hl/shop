FROM node:17-alpine
WORKDIR /www
COPY package.json .
RUN npm install
RUN npm install mysql2
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]