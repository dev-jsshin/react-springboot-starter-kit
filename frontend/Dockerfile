FROM node:20.9.0-alpine

RUN mkdir /frontend
WORKDIR /frontend

COPY ["./package.json", "/frontend/"]

RUN npm install
RUN npm run build