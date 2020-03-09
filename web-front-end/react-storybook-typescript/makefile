build:
	docker-compose build ui-lib

run:
	$(eval export docker_image := run)
	make _start

dev: 
	$(eval export docker_image := dev)
	make _start

# don't start this
_start:
	echo "args" $@
	docker-compose run --service-ports --use-aliases --rm ui-lib-${docker_image}
	docker-compose down

