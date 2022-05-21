# Setup JFrog GitHub Action

This action generates a `.npmrc` file that lets you fetch artifacts in JFrog Artifactory from GitHub Actions.

## Inputs

## `registry-url`

The URL of the npm registry.

## Environment variable `NODE_AUTH_TOKEN`

The authentication credentials for the registry.

## Example usage

```yml
uses: actions/hello-world-javascript-action@v1.1
with:
  registry-url: https://artifactory.jfrog.io/artifactory/api/npm/npm
env:
  NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```