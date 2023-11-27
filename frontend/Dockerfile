FROM node:20.9.0-alpine

RUN mkdir /frontend
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
COPY package.json .

RUN npm install --no-cache
#RUN apk add --no-cache git

CMD ["npm", "run", "start"]