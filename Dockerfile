FROM node:12

ARG ENDPOINT

ENV API_ENDPOINT=$ENDPOINT

WORKDIR /app

RUN npm install --global pm2

COPY ./package*.json ./

RUN npm i

COPY ./ ./

RUN npm run build

EXPOSE 3000 5000

CMD ["pm2-runtime", "apps.json"]
