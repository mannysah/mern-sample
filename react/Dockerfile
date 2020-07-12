FROM node:13

ENV http_proxy=http://cloud-cluster122197-swg.ibosscloud.com:8009 https_proxy=http://cloud-cluster122197-swg.ibosscloud.com:8009 HTTP_PROXY=http://cloud-cluster122197-swg.ibosscloud.com:8009 HTTPS_PROXY=http://cloud-cluster122197-swg.ibosscloud.com:8009

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm config set registry="http://registry.npmjs.org/"

RUN ls -l 
RUN npm install 
#RUN npm install react-scripts@3.4.1 -g --silent

COPY . .
    
EXPOSE 3000

CMD ["node", "server.js"]