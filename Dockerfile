# pull the official base image
FROM node:alpine

RUN npm install -g nodemon
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies

COPY . .
# COPY package.json ./
# COPY package-lock.json ./

RUN npm install

EXPOSE 3000
# RUN npm run start
# add app
# start app
CMD ["npm", "run", "start"]