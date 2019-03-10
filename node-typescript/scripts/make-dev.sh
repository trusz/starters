
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

service=$1;

docker-compose run --use-aliases $service-dev
docker-compose kill
docker-compose down