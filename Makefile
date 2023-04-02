install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-games-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .

