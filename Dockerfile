# 1. Pulls the image from node:alpine
# 2. Working directory is /app
# 3. Copy the contents of package.json to the root folder.
# 4. Run npm install to install packages
# 5. Expose port 3000 for incoming traffic
# 6. Execute the front-end wit the CMD command

# Author: Sabin Constantin Lungu
FROM node:alpine AS builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start-client"]
