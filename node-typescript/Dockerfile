FROM node:11.11-alpine

WORKDIR /tmp
COPY package.json .
COPY yarn.lock .

RUN yarn install

WORKDIR /app
RUN cp -R /tmp/* .

COPY . .

RUN yarn compile
RUN yarn lint

EXPOSE 3000


CMD [ "sh" ,"-c", "cd /app; npm run start"]