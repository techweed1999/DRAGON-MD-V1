
FROM node:lts-buster

RUN git clone https://github.com/DavidTechInc/DRAGON-V1.git /app
WORKDIR /app
RUN npm install && npm install -g pm2
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
