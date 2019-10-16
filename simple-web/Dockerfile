# Base Image
FROM node:alpine

# Move our application in this folder
WORKDIR /usr/app

# Install some dependecies
# We only want to copy our package.json
# The only time npm install we run is if we make a change to the package.json
COPY ./package.json ./
# output path: ./ output path is refering to the /user/app folder
RUN npm install
COPY ./ ./
# input path: ./ is refering to simple-web dir
# output path: ./ output path is refering to the /user/app folder

# Cmd to run the program
CMD ["npm", "start"]