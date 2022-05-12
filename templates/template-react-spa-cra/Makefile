.PHONY: bootstrap

bootstrap:
	make hooks
	make install-dependencies

.PHONY: hooks
hooks:
	chmod +x ci/hooks/install-hooks.sh && sh ci/hooks/install-hooks.sh

.PHONY: install-dependencies
install-dependencies:
	yarn

.PHONY: run-dev
run-dev:
	yarn dev

dist/index.js:
	yarn build

.PHONY: build
build: dist/index.js

.PHONY: dev-dependencies
dev-dependencies:
	docker-compose -f dependencies/docker-compose.dev.yml up --force-recreate --build

.PHONY: component-tests
component-tests: dist/index.js
	docker-compose -f dependencies/docker-compose.test.yml up --force-recreate --build -d
	cd component-test && yarn component-test

.PHONY: component-tests-dev
component-tests-dev: dist/index.js
	docker-compose -f dependencies/docker-compose.test.yml up --force-recreate --build -d
	cd component-test && yarn component-test-dev

.PHONY: clean
clean:
	rm -rf dist
	rm -rf .cache
	rm -rf coverage
	rm -rf component-test/cypress
	rm -rf component-test/results
	docker rm -f $$(docker ps -a -q)