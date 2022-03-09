FROM node:14.17

WORKDIR /mocks

COPY auth-endpoints.yaml /mocks/auth-endpoints.yaml
COPY responses /mocks/responses

EXPOSE 80 8906

RUN yarn global add stubby 

ENTRYPOINT ["stubby", "-d", "auth-endpoints.yaml", "-s", "80", "-a", "8906", "-t", "7449", "-w"]