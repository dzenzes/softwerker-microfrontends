FROM node:12-alpine
RUN mkdir -p /code
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install
COPY ./src /app/src
EXPOSE 3003
CMD [ "npm", "start" ]