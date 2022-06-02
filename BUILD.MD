## How to run the project

#### Please note that you need a npm user with access to @nrk packages in order to run some of these scripts

Install [Docker](https://docs.docker.com/install/) first then run `npm install`.

`NPM_TOKEN=your_npm_token npm run build` will convert the symbols.

After running `npm run build` you can view the converted icons in the `dist/light-mode` folder, or view the generated documentation by opening `dist/index.html` directly in a browser (no local server necessary).

## Publishing

### Production

Make sure you are on master then update the `version` field in `package.json`. Verify that `NPM_TOKEN=your_npm_token npm run build` completes without any errors then run these commands:

```bash
git add package.json
git commit -m "Release 10.0.0"
git push
git tag -a 10.0.0 -m "Release 10.0.0"
git push --tags
npm publish
npm run deploy-docs
```

The `NPM_TOKEN=your_npm_token npm publish` command automatically runs the `build` script first which also builds the documentation. `npm run deploy-docs` will deploy the docs from `dist` to https://nrkno.github.io/yr-icons/

### Beta

Make sure you are on the correct branch then update the `version` field in `package.json`. Verify that `NPM_TOKEN=your_npm_token npm run build` completes without any errors then run these commands:

```bash
git add package.json
git commit -m "Release 10.0.0-beta.0"
git push
git tag -a 10.0.0-beta.0 -m "Release 10.0.0-beta.0"
git push --tags
npm publish --tag beta
```
