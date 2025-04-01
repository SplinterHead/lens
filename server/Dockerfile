FROM node:21

RUN mkdir -p /db

WORKDIR /db

COPY package* ./

RUN npm install --omit=dev

COPY src ./src

CMD ["npm", "run", "db"]