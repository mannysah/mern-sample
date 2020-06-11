FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

#Needed below for macbook for mongodb host to be local
#ENV MONGO_HOST "host.docker.internal"

EXPOSE 4000

CMD ["npm", "start"]

# -e MONGODBURI=localhost
