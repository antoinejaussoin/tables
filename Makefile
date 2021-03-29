PACKAGE_VERSION?=local

single-build:
	docker build -f ./Dockerfile -t antoinejaussoin/tables:${PACKAGE_VERSION} ./
