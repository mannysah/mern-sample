FROM node:13

WORKDIR /usr/src/app
ENV http_proxy=http://cloud-cluster122197-swg.ibosscloud.com:8009 https_proxy=http://cloud-cluster122197-swg.ibosscloud.com:8009 HTTP_PROXY=http://cloud-cluster122197-swg.ibosscloud.com:8009 HTTPS_PROXY=http://cloud-cluster122197-swg.ibosscloud.com:8009

COPY package*.json ./

RUN npm config set registry="http://registry.npmjs.org/"
RUN npm cache clean --force
RUN npm install

COPY . .

#Needed below for macbook for mongodb host to be local
#ENV MONGO_HOST "host.docker.internal"

EXPOSE 4000

CMD ["npm", "start"]

# -e MONGODBURI=localhost
