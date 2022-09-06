# DAVINCI

web 图文编辑器

## Package Manager

`pnpm`

## Node Version

`>= 17.0.0`

## Init

```shell
nvm use 17.6.0

npm i -g pnpm commitizen

commitizen init cz-conventional-changelog --save --save-exact

pnpm i

npm run husky-prepare
```

## Run

```shell
npm run dev
```

## Git Specification

angular specification

```shell
git add .

git cz

git push
```

## Change Dependencies

```shell
pnpm i dependence_name

pnpm i -D dependence_name

pnpm uninstall dependence_name
```

## Build

```shell
npm run build
```

## Test

```shell
npm run test
```
