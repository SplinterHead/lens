FROM node:21 AS builder

RUN mkdir -p /app

WORKDIR /app

COPY package* ./

RUN npm install

COPY src ./src
COPY public ./public
COPY babel.config.js ./
COPY jsconfig.json ./
COPY vue.config.js ./

RUN npm run build


FROM node

RUN mkdir -p /app && \
    npm install -g serve

COPY --from=builder /app/dist /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]