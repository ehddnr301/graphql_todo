FROM node:12.18.2

WORKDIR /usr/app
COPY package*.json yarn.lock ./

RUN yarn install
COPY . .
RUN yarn run build

WORKDIR /usr/app

EXPOSE 4000

CMD ["yarn", "start"]