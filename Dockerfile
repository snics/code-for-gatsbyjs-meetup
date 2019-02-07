FROM nginx:1.14-alpine

COPY config.nginx /etc/nginx/nginx.conf
COPY /public /pub

EXPOSE 80
