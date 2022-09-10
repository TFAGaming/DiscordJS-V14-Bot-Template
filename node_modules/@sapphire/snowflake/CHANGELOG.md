# Changelog

All notable changes to this project will be documented in this file.

# [@sapphire/snowflake@3.2.2](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@3.2.1...@sapphire/snowflake@3.2.2) - (2022-04-24)

## Bug Fixes

- Fix typo (#333) ([ae2f257](https://github.com/sapphiredev/utilities/commit/ae2f25766d5985735f2d9b257eebd27cdc8a7c52))

## Documentation

- Add @NotKaskus as a contributor ([00da8f1](https://github.com/sapphiredev/utilities/commit/00da8f199137b9277119823f322d1f2d168d928a))
- Add @imranbarbhuiya as a contributor ([fb674c2](https://github.com/sapphiredev/utilities/commit/fb674c2c5594d41e71662263553dcb4bac9e37f4))
- Add @axisiscool as a contributor ([ce1aa31](https://github.com/sapphiredev/utilities/commit/ce1aa316871a88d3663efbdf2a42d3d8dfe6a27f))
- Add @dhruv-kaushikk as a contributor ([ebbf43f](https://github.com/sapphiredev/utilities/commit/ebbf43f63617daba96e72c50a234bf8b64f6ddc4))
- Add @Commandtechno as a contributor ([f1d69fa](https://github.com/sapphiredev/utilities/commit/f1d69fabe1ee0abe4be08b19e63dbec03102f7ce))
- Fix typedoc causing OOM crashes ([63ba41c](https://github.com/sapphiredev/utilities/commit/63ba41c4b6678554b1c7043a22d3296db4f59360))

## [3.2.1](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@3.2.0...@sapphire/snowflake@3.2.1) (2022-04-01)

**Note:** Version bump only for package @sapphire/snowflake

# [3.2.0](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@3.1.0...@sapphire/snowflake@3.2.0) (2022-03-06)

### Bug Fixes

-   **snowflake:** fixed the examples for `DiscordSnowflake` and `TwitterSnowflake` ([#282](https://github.com/sapphiredev/utilities/issues/282)) ([2e5ed7f](https://github.com/sapphiredev/utilities/commit/2e5ed7fdadccf261967c45f73d0dc78e2497eed3))

### Features

-   allow module: NodeNext ([#306](https://github.com/sapphiredev/utilities/issues/306)) ([9dc6dd6](https://github.com/sapphiredev/utilities/commit/9dc6dd619efab879bb2b0b3c9e64304e10a67ed6))
-   **ts-config:** add multi-config structure ([#281](https://github.com/sapphiredev/utilities/issues/281)) ([b5191d7](https://github.com/sapphiredev/utilities/commit/b5191d7f2416dc5838590c4ff221454925553e37))

# [3.1.0](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@3.0.1...@sapphire/snowflake@3.1.0) (2022-01-28)

### Features

-   change build system to tsup ([#270](https://github.com/sapphiredev/utilities/issues/270)) ([365a53a](https://github.com/sapphiredev/utilities/commit/365a53a5517a01a0926cf28a83c96b63f32ed9f8))

## [3.0.1](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@3.0.0...@sapphire/snowflake@3.0.1) (2022-01-10)

**Note:** Version bump only for package @sapphire/snowflake

# [3.0.0](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@2.1.4...@sapphire/snowflake@3.0.0) (2021-12-08)

### Bug Fixes

-   **snowflake:** remove env-based defaults ([#232](https://github.com/sapphiredev/utilities/issues/232)) ([10408e4](https://github.com/sapphiredev/utilities/commit/10408e4d3677e91490d967c3d89bf9575946090b))

### Features

-   **Snowflake:** rework entire package ([#231](https://github.com/sapphiredev/utilities/issues/231)) ([1d02f1a](https://github.com/sapphiredev/utilities/commit/1d02f1a2f520efcbc194c3992af593d0e493873b))

### BREAKING CHANGES

-   **Snowflake:** Renamed `processID` to `processId`
-   **Snowflake:** Renamed `workerID` to `workerId`
-   **Snowflake:** `workerId` now defaults to 0n instead of 1n
-   **Snowflake:** `DiscordSnowflake` is not longer a class, but a constructed Snowflake
-   **Snowflake:** `TwitterSnowflake` is not longer a class, but a constructed Snowflake

## [2.1.4](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@2.1.3...@sapphire/snowflake@2.1.4) (2021-11-06)

**Note:** Version bump only for package @sapphire/snowflake

## [2.1.3](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@2.1.2...@sapphire/snowflake@2.1.3) (2021-10-26)

**Note:** Version bump only for package @sapphire/snowflake

## [2.1.2](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@2.1.1...@sapphire/snowflake@2.1.2) (2021-10-17)

### Bug Fixes

-   allow more node & npm versions in engines field ([5977d2a](https://github.com/sapphiredev/utilities/commit/5977d2a30a4b2cfdf84aff3f33af03ffde1bbec5))

## [2.1.1](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@2.1.0...@sapphire/snowflake@2.1.1) (2021-10-11)

**Note:** Version bump only for package @sapphire/snowflake

# [2.1.0](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@2.0.0...@sapphire/snowflake@2.1.0) (2021-10-04)

### Bug Fixes

-   **snowflake:** fixed snowflake generating duplicate IDs ([#166](https://github.com/sapphiredev/utilities/issues/166)) ([f0cf4ad](https://github.com/sapphiredev/utilities/commit/f0cf4ad6bc0b8b2447499ca36581d2b453e52715))

### Features

-   **snowflake:** set minimum NodeJS to v14 ([11a61c7](https://github.com/sapphiredev/utilities/commit/11a61c72bc29e683f9a4492815db3db094103bbc))

# [2.0.0](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.3.6...@sapphire/snowflake@2.0.0) (2021-07-17)

### Code Refactoring

-   **rateLimits:** rewrite all of it ([#130](https://github.com/sapphiredev/utilities/issues/130)) ([320778c](https://github.com/sapphiredev/utilities/commit/320778ca65cbf3591bd1ce0b1f2eb430693eef9a))

### BREAKING CHANGES

-   **rateLimits:** Removed `Bucket`

## [1.3.6](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.3.5...@sapphire/snowflake@1.3.6) (2021-07-11)

**Note:** Version bump only for package @sapphire/snowflake

## [1.3.5](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.3.4...@sapphire/snowflake@1.3.5) (2021-06-27)

**Note:** Version bump only for package @sapphire/snowflake

## [1.3.4](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.3.3...@sapphire/snowflake@1.3.4) (2021-06-19)

### Bug Fixes

-   **doc:** change `[@link](https://github.com/link)` to `[@linkplain](https://github.com/linkplain)` for support in VSCode IntelliSense ([703d460](https://github.com/sapphiredev/utilities/commit/703d4605b547a8787aff62d6f1054ea26dfd9d1c))
-   **docs:** update-tsdoc-for-vscode-may-2021 ([#126](https://github.com/sapphiredev/utilities/issues/126)) ([f8581bf](https://github.com/sapphiredev/utilities/commit/f8581bfe97a1b2f8aac3a3d3ed342d8ba92d730b))

## [1.3.3](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.3.2...@sapphire/snowflake@1.3.3) (2021-06-06)

### Bug Fixes

-   remove peer deps, update dev deps, update READMEs ([#124](https://github.com/sapphiredev/utilities/issues/124)) ([67256ed](https://github.com/sapphiredev/utilities/commit/67256ed43b915b02a8b5c68230ba82d6210c5032))
-   **snowflake:** fixed parsing for timestamps as Date objects ([c17a515](https://github.com/sapphiredev/utilities/commit/c17a515b02931cf778ca69913132e8d4558504a1))

## [1.3.2](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.3.1...@sapphire/snowflake@1.3.2) (2021-05-20)

### Bug Fixes

-   **snowflake:** mark package as side effect free ([6a9bafc](https://github.com/sapphiredev/utilities/commit/6a9bafc24caba4b0ebbdd6896ac245ae6d60dede))

## [1.3.1](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.3.0...@sapphire/snowflake@1.3.1) (2021-05-02)

### Bug Fixes

-   drop the `www.` from the SapphireJS URL ([494d89f](https://github.com/sapphiredev/utilities/commit/494d89ffa04f78c195b93d7905b3232884f7d7e2))
-   update all the SapphireJS URLs from `.com` to `.dev` ([f59b46d](https://github.com/sapphiredev/utilities/commit/f59b46d1a0ebd39cad17b17d71cd3b9da808d5fd))

# [1.3.0](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.2.8...@sapphire/snowflake@1.3.0) (2021-04-21)

### Features

-   add @sapphire/embed-jsx ([#100](https://github.com/sapphiredev/utilities/issues/100)) ([7277a23](https://github.com/sapphiredev/utilities/commit/7277a236015236ed8e81b7882875410facc4ce17))

## [1.2.8](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.2.7...@sapphire/snowflake@1.2.8) (2021-04-19)

### Bug Fixes

-   change all Sapphire URLs from "project"->"community" & use our domain where applicable 👨‍🌾🚜 ([#102](https://github.com/sapphiredev/utilities/issues/102)) ([835b408](https://github.com/sapphiredev/utilities/commit/835b408e8e57130c3787aca2e32613346ff23e4d))

## [1.2.7](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.2.6...@sapphire/snowflake@1.2.7) (2021-04-03)

**Note:** Version bump only for package @sapphire/snowflake

## [1.2.6](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.2.5...@sapphire/snowflake@1.2.6) (2021-03-16)

### Bug Fixes

-   remove terser from all packages ([#79](https://github.com/sapphiredev/utilities/issues/79)) ([1cfe4e7](https://github.com/sapphiredev/utilities/commit/1cfe4e7c804e62c142495686d2b83b81d0026c02))

## [1.2.5](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.2.4...@sapphire/snowflake@1.2.5) (2021-02-16)

**Note:** Version bump only for package @sapphire/snowflake

## [1.2.4](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.2.3...@sapphire/snowflake@1.2.4) (2021-01-16)

**Note:** Version bump only for package @sapphire/snowflake

## [1.2.3](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.2.2...@sapphire/snowflake@1.2.3) (2021-01-01)

**Note:** Version bump only for package @sapphire/snowflake

## [1.2.2](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.2.1...@sapphire/snowflake@1.2.2) (2020-12-26)

**Note:** Version bump only for package @sapphire/snowflake

## [1.2.1](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.2.0...@sapphire/snowflake@1.2.1) (2020-12-22)

**Note:** Version bump only for package @sapphire/snowflake

# [1.2.0](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.1.0...@sapphire/snowflake@1.2.0) (2020-11-15)

### Bug Fixes

-   **snowflake:** pass keep_classnames to terser ([76ea062](https://github.com/sapphiredev/utilities/commit/76ea062d07000b169d9781f1a199b85ad3db0ba6))
-   **snowflake:** pass keep_fnames to terser ([b52aa76](https://github.com/sapphiredev/utilities/commit/b52aa764d8b02535496e0ceea3204a37552ce3d1))

### Features

-   added time-utilities package ([#26](https://github.com/sapphiredev/utilities/issues/26)) ([f17a333](https://github.com/sapphiredev/utilities/commit/f17a3339667a452e8745fad7884272176e5d65e8))

# [1.1.0](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.0.1...@sapphire/snowflake@1.1.0) (2020-11-04)

### Bug Fixes

-   **ratelimits,snowflake,utilities:** fixed esm output target ([9fdab3f](https://github.com/sapphiredev/utilities/commit/9fdab3fca283c8c0b47cc32661c5cf8e0a5e583c))
-   **snowflake:** properly specify ESM and CommonJS exports ([e3278e6](https://github.com/sapphiredev/utilities/commit/e3278e6868a4f31d5b2a100710bcbce2b79bc218))

### Features

-   added ratelimits package ([#15](https://github.com/sapphiredev/utilities/issues/15)) ([e0ae18c](https://github.com/sapphiredev/utilities/commit/e0ae18c5e1d0ae4e68a982829f1cf251fddfc80d))

## [1.0.1](https://github.com/sapphiredev/utilities/compare/@sapphire/snowflake@1.0.0...@sapphire/snowflake@1.0.1) (2020-09-20)

**Note:** Version bump only for package @sapphire/snowflake

# 1.0.0 (2020-09-05)

### Features

-   implement snowflake ([5ba4e2d](https://github.com/sapphiredev/utilities/commit/5ba4e2d82557dd4ff60ffe891a7b46e46373bea2))
-   **decorators:** add decorators package ([#4](https://github.com/sapphiredev/utilities/issues/4)) ([677b3e5](https://github.com/sapphiredev/utilities/commit/677b3e59d5c6160cbe6fb410821cadd7c0f00e3c))
