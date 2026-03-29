FROM node:20.19.2

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]