FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
Run npm audit fix
COPY . .
EXPOSE 3001
CMD ["npm","start"]
