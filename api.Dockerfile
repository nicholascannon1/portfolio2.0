# API container
FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production --silent

COPY . /app

EXPOSE 8000
CMD ["npm", "start"]