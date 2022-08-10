FROM node:16.16.0 as node

RUN mkdir -p /usr/src/_4systems/frontend
WORKDIR /usr/src/_4systems/frontend

COPY src /usr/src/_4systems/frontend/src
COPY package.json /usr/src/_4systems/frontend
COPY package-lock.json /usr/src/_4systems/frontend
COPY tsconfig.json /usr/src/_4systems/frontend
COPY tsconfig.app.json /usr/src/_4systems/frontend
COPY tsconfig.spec.json /usr/src/_4systems/frontend
COPY angular.json /usr/src/_4systems/frontend
COPY karma.conf.js /usr/src/_4systems/frontend
COPY .browserslistrc /usr/src/_4systems/frontend

RUN npm install
RUN npm run build --prod

RUN rm -rf /usr/src/_4systems/frontend/src
RUN rm -rf /usr/src/_4systems/frontend/node_modules

FROM nginx:latest
COPY --from=node /usr/src/_4systems/frontend/dist/frontend /usr/share/nginx/html

EXPOSE 80
