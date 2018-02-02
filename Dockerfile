FROM node:8-alpine

COPY . /starter
COPY package.json /starter/package.json

WORKDIR /starter

RUN npm install -g nodemon && \
  npm install

CMD ["npm", "run", "startdev"]

EXPOSE 8888
