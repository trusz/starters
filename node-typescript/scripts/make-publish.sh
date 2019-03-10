
service=$1;

docker-compose push $service
docker push $service:latest