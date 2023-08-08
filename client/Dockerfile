FROM node:18

WORKDIR /


COPY package.json .
RUN npm install --verbose
COPY . ./
RUN npm run build
RUN npm install -g serve
CMD [ "serve",  "-s", "build" ]