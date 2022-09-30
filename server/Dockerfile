FROM node:17-slim

RUN apt-get update && apt-get install -y chromium

WORKDIR /server

COPY  package.json /server

RUN npm i -f

COPY src/vps14938.publiccloud.com.br/ ../dist

CMD npm start

EXPOSE 3000

USER node
