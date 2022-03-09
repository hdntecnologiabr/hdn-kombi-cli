FROM node:14.17 as build-stage

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

RUN yarn build

FROM nginx

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY /src/index.html /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
