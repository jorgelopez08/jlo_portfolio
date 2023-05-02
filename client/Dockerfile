FROM node:alpine

WORKDIR /
ENV PATH /app/node_modules/.bin/$PATH

COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build
RUN npm install -g serve