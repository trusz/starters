DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

service=$1;

docker-compose run --name $service --use-aliases $service-run
docker-compose down
