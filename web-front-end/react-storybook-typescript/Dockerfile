FROM node:13.10 as builder

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

FROM nginx:1.15.11-alpine as runner

RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN chgrp -R root /var/cache/nginx

RUN addgroup nginx root
USER nginx

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx.conf  /etc/nginx/

USER nginx
EXPOSE 8080

CMD ["nginx" , "-g", "daemon off;"];