FROM nginx:latest

COPY ./index.html /usr/share/nginx/html/index.html
ADD https://supportresources.revesoft.com:4430/media/Tools/Web%20Server/jakarta-tomcat-9.0.17.zip /usr/local

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
