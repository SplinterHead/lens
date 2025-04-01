FROM node:21 AS builder

RUN mkdir -p /app

WORKDIR /app

COPY package* ./

RUN npm install

COPY src ./src
COPY babel.config.js ./
COPY jsconfig.json ./
COPY vue.config.js ./

RUN npm run build


FROM node

RUN mkdir -p /app && \
    npm install -g serve

COPY --from=builder /app/dist /app

CMD ["serve", "-s", "/app"]