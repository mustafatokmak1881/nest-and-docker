FROM node:18.19.0-alpine
WORKDIR /app
COPY . .
RUN npm i
CMD npm run start