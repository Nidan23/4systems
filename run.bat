docker stop _4systems__4systems-backend_1 _4systems__4systems-frontend_1

docker network rm _4systems_default

docker rm _4systems__4systems-backend_1 _4systems__4systems-frontend_1

docker image rm _4systems__4systems-backend _4systems__4systems-frontend

cd backend
./mvnw package

cd ../frontend
npm run build --prod

cd ..

docker-compose up -d