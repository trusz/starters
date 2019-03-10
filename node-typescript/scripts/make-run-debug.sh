	
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

service=$1;

docker-compose run -p 9229:9229 --use-aliases $service-run-debug
docker-compose kill
docker-compose down