export SHELL := "/bin/bash"
export PATH  := $(shell npm bin):$(PATH)

ENTRY_FILE="./index.ls"
MODULE_NAME="semana"
BROWSERIFY_OPTS = -t liveify --standalone $(MODULE_NAME)

DEPS := $(shell PATH=$(PATH) browserify $(BROWSERIFY_OPTS) --list $(ENTRY_FILE))

all: dist/semana.js
min: dist/semana.min.js

dist/%.min.js: dist/%.js
	uglifyjs2 $< -o $@

dist/%.js: $(DEPS)
	mkdir -p $(@D)
	browserify $(BROWSERIFY_OPTS) $(ENTRY_FILE) | derequire > $@

.PHONY: test clean

test: all
	node test.js

clean:
	rm -rf dist
