FROM mhart/alpine-node:10

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
ENV PATH /usr/src/node_modules/.bin:$PATH

COPY . .

RUN npm install

EXPOSE 8000

CMD [ "npm", "run", "dev" ]