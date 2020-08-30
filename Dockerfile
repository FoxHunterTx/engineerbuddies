FROM node:latest

# create app work directory
WORKDIR /usr/scr/app

# install app dependencies
# wildcard is used so both package json files are copied
COPY package*.json ./

RUN npm install && npm cache clean --force

# add my source code app.js
COPY . .

# Expose port 3000 from my app to container
EXPOSE 3000

# start your app
CMD ["node","./app.js"]