FROM node:alpine

WORKDIR /usr/app

RUN npm install --global pm2

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

EXPOSE 3000 5000

USER node

# Launch app with PM2
CMD [ "pm2-runtime", "apps.json" ]
