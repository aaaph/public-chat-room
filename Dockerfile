
FROM node:12-alpine

RUN mkdir -p /home/source/chat/app/node_modules && chown -R node:node /home/source/chat

WORKDIR /home/source/chat

COPY package*.json ./

USER node

RUN npm install --ignore-scripts

COPY --chown=node:node . .

RUN npm run postinstall

EXPOSE 3000

CMD [ "npm", "run", "start" ]