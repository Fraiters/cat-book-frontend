FROM node:20.10.0

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4200

CMD node_modules/.bin/ng serve
