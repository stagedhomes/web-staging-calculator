FROM nginx:1.9

## Copy contents.
# COPY ". /usr/share/nginx/html"

## NGINX configurations
COPY "./assets/docker_configs/nginx.conf" "/etc/nginx/nginx.conf"

## Install tools.
RUN apt-get update && apt-get install -y \
    nano

ENV TERM xterm

## Docker configurations.
EXPOSE 80 443
