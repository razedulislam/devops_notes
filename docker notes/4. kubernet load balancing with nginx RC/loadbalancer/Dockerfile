#This command removes the default Nginx configuration file that comes with the base image. The default configuration 
#typically listens on port 80 and serves a simple welcome page. By removing it, you make room for your custom configuration.
#COPY nginx.conf /etc/nginx/conf.d/default:
#This command copies a custom nginx.conf file from your local machine into the container's Nginx configuration directory. 
#The copied file is placed at /etc/nginx/conf.d/default, effectively replacing the default configuration with your custom one.

FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default