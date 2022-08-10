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

ENV JQ_VERSION=1.6
RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
RUN cp /tmp/jq-linux64 /usr/bin/jq
RUN chmod +x /usr/bin/jq

RUN jq 'to_entries | map_values({ (.key) : ("$" + .key) }) | reduce .[] as $item ({}; . + $item)' /usr/src/_4systems/frontend/src/config/config.json > /usr/src/_4systems/frontend/src/config/config.tmp.json && mv /usr/src/_4systems/frontend/src/config/config.tmp.json /usr/src/_4systems/frontend/src/config/config.json

RUN npm run build --prod

RUN rm -rf /usr/src/_4systems/frontend/src
RUN rm -rf /usr/src/_4systems/frontend/node_modules

FROM nginx:latest
ENV JSFOLDER=/usr/share/nginx/html/*.json
COPY start-nginx.sh /usr/bin/start-nginx.sh
RUN chmod +x /usr/bin/start-nginx.sh
WORKDIR /usr/share/nginx/html

COPY --from=node /usr/src/_4systems/frontend/dist/frontend /usr/share/nginx/html

ENTRYPOINT [ "start-nginx.sh" ]

EXPOSE 80
