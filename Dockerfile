FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "start"]
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html