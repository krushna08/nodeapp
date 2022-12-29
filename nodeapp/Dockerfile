FROM node:7
WORRKDIR /app
COPY package.jsom /app
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 8082