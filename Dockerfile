FROM nginx

# RUN rm -rf /usr/share/nginx/html/*

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY . /usr/share/nginx/html
# COPY /etc/letsencrypt/live/kndbvortex.cloud/fullchain.pem /etc/nginx/ssl/fullchain.pem
# COPY /etc/letsencrypt/live/kndbvortex.cloud/privkey.pem /etc/nginx/ssl/privkey.pem

RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]