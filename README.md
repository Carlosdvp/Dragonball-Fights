# Dragonball_Fight

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

***********************************************************************

# VueJS Application

## Project Using Vue, Vuex, Node and a simple DB

## Description

A simple game where a player selects a fighter, and the computer's fighter is selected ramdomly from a roster of adversaries.

### Technologies

- VueJS
- Node
- Vuex
- Typescript

********************************************************************

## Implementation

### Part I

1. Set up a simple Json server and DB, follow this structure
  - ./
    - data/
      - fighters.json
        - create one entry for testing
      - server.js
        - bare bones json server

2. Create the components
  - FighterBattleCard
  - FightersList
  - WinnerDisplay

3. Link components to DB
  - first get the name to populate

4. Add main Styles for the App

5. Implement the Vuex Store

6. Complete the Fighter Card