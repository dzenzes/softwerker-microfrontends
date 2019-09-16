FROM node:12-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install
COPY ./src /app/src
EXPOSE 3002
CMD [ "npm", "start" ]