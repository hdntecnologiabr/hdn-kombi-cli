FROM node:17-alpine as build-stage

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY ./ /app/
RUN yarn build

FROM nginx:1.21-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/.docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
