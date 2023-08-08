FROM node:18

WORKDIR /


COPY package.json .
RUN sudo npm install
COPY . ./
RUN sudo npm run build
RUN sudo npm install -g serve
CMD [ "serve",  "-s", "build" ]