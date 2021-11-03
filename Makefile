PACKAGE_VERSION?=local
TAG=antoinejaussoin/tables:${PACKAGE_VERSION}
NAME=tables

build:
	docker build -f ./Dockerfile -t ${TAG} ./

run: build stop
	docker run -dit \
	--restart=always --name=${NAME} \
	-p 3001:80 \
	${TAG}

stop:
	-docker kill ${NAME}
	-docker update --restart=no ${NAME}
	-docker rm ${NAME}