# 1. copy makefile
# 2. replace `__name__` with the service name
# 3. remove this comment block from the new makefile 
build:
	docker-compose build __name__

run:
	$(eval export docker_image := run)
	make _start

dev: 
	$(eval export docker_image := dev)
	make _start

# don't start this
_start:
	echo "args" $@
	docker-compose run --service-ports --use-aliases --rm __name__-${docker_image}
	docker-compose down

