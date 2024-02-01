FROM node:latest

#set the working directory 
WORKDIR /server/SCALABLE-SYSTEM 

#copy packge.json and package-lock.json to the work directory 
COPY package*.json ./

RUN npm install

COPY . .



#Build the react app 
RUN npm run build 


#The port that backend is running 
EXPOSE 3001

#CMD node Gateway/index.js


#How to run the project 
CMD ["npm" "start"]