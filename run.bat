docker stop 4systems-backend-1 4systems-frontend-1 4systems-postgres-1

docker network rm 4systems_default

docker rm 4systems-backend-1 4systems-frontend-1 4systems-postgres-1

docker image rm 4systems_backend 4systems_frontend postgres

docker-compose up -d