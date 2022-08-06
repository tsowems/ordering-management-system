# PNPM with TurboRepo repository


# Prerequisite

This repo uses [`pnpm`](https://pnpm.io/) as mono-repo management and also package management. If you wanna start developing, please install `pnpm` by

```shell
npm install -g pnpm
```

for detail usage, please visit https://pnpm.io/

# Getting started

To start a new packages, run

```shell
pnpm init -w ./packages/<new-package-name>
```

To install dependency in your package, run

```shell
pnpm add <dependency-name>
```

To install all dependencies for all packages

```shell
pnpm recursive install
```
