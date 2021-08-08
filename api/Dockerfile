FROM node:alpine

WORKDIR /

ENV PATH /node_modules/.bin:$PATH

COPY package.json ./

RUN yarn install

COPY . ./

EXPOSE 5000

CMD ["yarn", "start"]