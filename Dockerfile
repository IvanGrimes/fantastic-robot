FROM node:alpine as build
ARG ENDPOINT
ENV API_ENDPOINT=$ENDPOINT
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=build /app ./
RUN npm install --global pm2
EXPOSE 3000 5000
USER node
CMD ["pm2-runtime", "apps.json"]
