FROM openjdk:17-jdk-alpine
RUN mkdir -p /usr/src/_4systems/backend
WORKDIR /usr/src/_4systems/backend
COPY . /usr/src/_4systems/backend

RUN ./mvnw package
RUN rm -rf /usr/src/_4systems/backend/src

ENTRYPOINT ["java","-jar","target/backend-0.0.1-SNAPSHOT.jar"]