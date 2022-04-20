FROM node:17

WORKDIR /usr/app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./

RUN yarn install --no-optional

COPY . ./

EXPOSE $CLIENT_PORT
CMD ["yarn", "run", "container"]