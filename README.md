# DAVINCI

web 图文编辑器

## 包管理工具

`pnpm`

## Node Version

`>= 17.0.0`, 推荐 `17.6.0`

## 起步

```shell
nvm use 17.6.0

npm i -g pnpm commitizen

commitizen init cz-conventional-changelog --save --save-exact

pnpm i

npm run husky-prepare
```

## 本地运行

```shell
npm run dev
```

## 权限

路由配置中的 `permissions: string[]`

举例：没有该字段视为不需要权限，空数组`[]`视为仅需登录，`['normal_manager']`需要普通管理员身份

## Git 操作规范

angular specification

```shell
git add .

# 交互式编写commit
git cz

git push
```

## 增删依赖

```shell
pnpm i dependence_name

# 开发环境依赖
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
