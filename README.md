<img src="https://www.futurebrand.com/build/images/futurebrand-logo-2017.svg" width="250" height="33" alt="FutureBrand" />

# FutureBrand Tools

## Commands

To run TSDX, use:

```bash
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build`.

To run tests, use `npm test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test`.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

## Publishing to NPM

We are using [np](https://github.com/sindresorhus/np) and to release a new npm package version, use:

```bash
npm run release
```
