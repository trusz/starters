service=$1

docker tag $(docker images $service --format "{{.ID}}" | head -1) $service:latest