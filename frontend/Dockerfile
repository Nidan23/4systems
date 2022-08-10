RUN mkdir -p /usr/src/_4systems/frontend
WORKDIR /usr/src/_4systems/frontend

COPY dist /usr/src/_4systems/frontend

FROM nginx:latest
COPY --from=node /usr/src/wwg/_4systems/frontend/dist/frontend /usr/share/nginx/html

EXPOSE 80
