FROM node:7.7.2
MAINTAINER brianstaats

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /app
ADD . /app
RUN cp -a /tmp/node_modules /app

EXPOSE 8080

CMD npm run dev
