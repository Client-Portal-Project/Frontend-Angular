# Declare base environment that the app needs
FROM node:16.13 as build

# Setting the working directory
WORKDIR /usr/local/app

# Copy our angular app and paste it on the working directory
COPY ./ /usr/local/app

# Resotring and Building the Angular app
RUN npm install
RUN npm run build

# Serving the app with nginx server
FROM nginx:latest

COPY --from=build /usr/local/app/dist/project-x /usr/share/nginx/html

EXPOSE 80