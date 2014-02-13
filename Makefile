ENTRY_FILE="./index.js"
MODULE_NAME="semana"
DEPS := $(shell node_modules/.bin/browserify -p externalities --deps $(ENTRY_FILE) | node_modules/.bin/jsonpath '$$..id')

all: dist/semana.js
min: dist/semana.min.js

dist/%.min.js: dist/%.js
	node_modules/.bin/uglifyjs2 $< -o $@

dist/%.js: $(DEPS)
	mkdir -p $(@D)
	node_modules/.bin/browserify -p externalities -o $@ $(ENTRY_FILE)

.PHONY: test clean

test: all
	node test.js

clean:
	rm -rf dist