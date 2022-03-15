FROM nginx

COPY ./dist /usr/share/nginx/html/mf/<%= normalizedMfeName %>/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
