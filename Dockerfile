FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY . /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]