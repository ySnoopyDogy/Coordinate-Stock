FROM node:latest

RUN mkdir -p /usr/home/coordinatestock
WORKDIR /usr/home/coordinatestock

COPY . /usr/home/coordinatestock/
RUN npm install && npm run build

CMD ["npm", "start"]

