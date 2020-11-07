FROM node:12.8

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Set environmental variables
ENV USER=docker

EXPOSE 8080
CMD node server.js --host='0.0.0.0' --port=8080
