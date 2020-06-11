FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN ls -l 
RUN npm install 
#RUN npm install react-scripts@3.4.1 -g --silent

COPY . .
    
EXPOSE 3000

CMD ["node", "server.js"]