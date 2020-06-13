FROM node:12

ARG ENDPOINT
ENV API_ENDPOINT=$ENDPOINT

WORKDIR /app
COPY . /app/

RUN npm i --silent
RUN npm i -g pm2
RUN npm run build

EXPOSE 3000 5000

CMD ["pm2-runtime", "apps.json"]
