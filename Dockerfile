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
EXPOSE 5000
USER node
CMD ["npm", "run", "start"]
