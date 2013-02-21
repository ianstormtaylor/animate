
build: components index.js css
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

css:
	sass --style expanded index.sass:index.css

test:
	open test/index.html

.PHONY: clean css test
