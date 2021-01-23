FROM mhart/alpine-node:10

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

ENV PATH /usr/src/client/node_modules/.bin:$PATH

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]