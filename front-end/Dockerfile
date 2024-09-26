FROM nginx
WORKDIR /var/www/html
RUN apt update -y
COPY ./nginx.conf/default.conf /etc/nginx/conf.d
COPY ./code/* /var/www/html/
CMD [ "nginx", "-g", "daemon off;" ]
