FROM node:14.17

EXPOSE 80 8906

RUN yarn global add stubby 

ENTRYPOINT ["stubby", "-s", "80", "-a", "8906", "-t", "7449", "-w"]