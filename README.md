# Start Here! - Homework Challenge - Getting Started

<a name=spreadsheet-app></a>
# Spreadsheet App

## Building an Interactive Spreadsheet

Today, the vast majority of businesses implement their commission plan models
in Microsoft Excel, Google Sheets, or some other spreadsheet software. In this
problem, you will implement a simplified browser-based spreadsheet that can be
used to implement an extremely simple financial model.

### Requirements

* For simplicity, the size of the spreadsheet is fixed to 10 rows and 10
  columns.
    - Columns are named after capital letters, starting with "A".
    - Rows are numbered and increasing, starting from "1".
* The state of the spreadsheet should be maintained in a backend service that
  is mutatable via API calls.
* The frontend should be interactive: saving data after a cell in the
  spreadsheet changes, and updating any affected cells with their newly
  computed values.
* The state of the spreadsheet should be persisted across server restarts.
* Cell values should support either an integer or a simple formula that
  references other cells and only needs to support addition.
    - For example, `-1` and `123` should be able to be stored in a cell.
    - `=A1+B1` should be able to be stored in a cell, and the display value
      should be the result of evaluating the sum of the value in `A1` and
      the value in `B1`.

### Out-of-scope

* Don't worry about handling multiple concurrent users viewing and editing the
  spreadsheet at the same time.

## Implemented Features

- Keyboard Navigation
- Detection of circular references
- Interactive updates: changing one value will automatically update all the other values depending on it
- Highlight of referenced cell during edit mode
- Add a cell reference by clicking it during edit mode.


## Table of Contents

1. [Spreadsheet App](#spreadsheet-app)
2. [Reference documentation for Cypress](#reference-documentation)
3. [Guides](#guides)
4. [Prerequisites](#prerequisites)
    1. [Dependencies](#dependencies)
    2. [Installation](#installation)
5. [End-to-End testing with Cypress](#e2e)
    1. [Options for executing tests](#e2e-options)
    2. [Additional commands](#e2e-additional)
6. [Integration testing with Cypress](#integration)
    1. [Options for executing tests](#integration-options)
    2. [Additional commands](#integration-additional)
7. [Tooling](#tooling)
8. [Troubleshooting](#troubleshooting)


<a name=reference-documentation></a>
## Reference Documentation
For further reference, please consider the following sections:

* [Official Cypress documentation](https://docs.cypress.io/)
* [Official Cypress - Cucumber preprocessor documentation](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#readme)
* [Official Cucumber Docs (Gerkin syntax)](https://cucumber.io/docs/gherkin/)
* [Official Cucumber Docs (Cucumber-Expressions)](https://cucumber.io/docs/cucumber/cucumber-expressions/)

<a name=prerequisites></a>
## Prerequisites

<a name=dependencies></a>
### Dependencies
> To run the tests

* [Node v16.14.x (LTS)](https://nodejs.org/en/blog/release/v16.14.0/) _(minimum is 12.20.x)_
* [Yarn](https://yarnpkg.com/getting-started/install) _(preferred is 1.22.x)_

> To start the application:

* [Python v3.8](https://www.python.org/downloads/) _(download 3.8 for better compatibility)_
* [pipenv](https://www.python.org/downloads/) _(`pip` is required to install `pipenv`)_

<a name=installation></a>
### Installation

> For Windows platform: Install NodeJS and Python 3.8 binaries, make sure that the tools have been added to PATH. Use pip to install pipenv. 

> Make sure that you have the necessary _NodeJS_ version installed.
> ```shell
> node -v
> ```
> Suggested latest compatible Node version is `v16.14.0 LTS (Gallium)`.

To install the application, use `yarn`:
```shell script
yarn install
```
> The above command installs the subproject `web` also!

#### Frontend

> To install and run the `api` application, from project root:
```shell script
cd api
pipenv install
pipenv shell
python init-db.py
flask run
```

#### Backend

> To install and run the `web` application, from project root:
```shell script
cd web
yarn install
yarn start
```

<a name=e2e></a>
## End-to-End testing with Cypress

In order to successfully execute E2E tests using Cypress, **please make sure that you have your applications running on localhost.**
e.g. localhost:3000 for the Spreadsheet Frontend and localhost:5000 for the Backend.

<a name=e2e-options></a>
### Options for executing tests

To execute headless, automated Cypress test runs, use:

```shell script
yarn run e2e
```

> HINT: Cypress defaults to https://localhost.3000/
>
> To pass different _{host}:{port}_ configuration just ovveride cypress `baseUrl`:
> ```shell script
> yarn run e2e -- --config baseUrl={anyHost}:{anyPort}
> ```

### Additional commands
Just to get familiar with Cypress Test Runner, execute:
```shell script
yarn cypress open
```
> You can now run tests from inside the Cypress test runner.
> You can also get the same result using `npm run cy:open`

<a name=tooling></a>
## BDD Syntax Editor support
For better development experience, **an editor with BDD support is recommended**.

Please see below what plugins are available for the suggested editors. These are helpful tools,
offering syntax-highlighting, code suggestions, IntelliSense, autocomplete, configuration and
formatting options. These plugins may allow you to jump to step implementations from Gherkin
sentences directly.

### Visual Studio Code
https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete

### IntelliJ
https://plugins.jetbrains.com/plugin/7418-cucumber-js
https://plugins.jetbrains.com/plugin/9164-gherkin

### Sublime Text
https://packagecontrol.io/packages/Cucumber

<a name=integration></a>
## Integration testing with Cypress

In order to successfully execute Integration tests using Cypress, **please make sure that you have your application running on localhost.**
e.g. localhost:3000 for the Spreadsheet Frontend.

<a name=integration-options></a>
### Options for executing tests

To execute headless, automated Cypress test runs, use:

```shell script
yarn run web:integration
```

> HINT: Cypress defaults to https://localhost.3000/
>
> To pass different _{host}:{port}_ configuration just ovveride cypress `baseUrl`:
> ```shell script
> yarn run integration -- --config baseUrl={anyHost}:{anyPort}
> ```

<a name=integration-additional></a>
### Additional commands
Just to get familiar with Cypress Test Runner, head into the `{projectRoot}/web/` directory, then execute:
```shell script
yarn cypress open
```
> You can now run tests from inside the Cypress test runner.
> You can also get the same result using `npm run cy:open`


<a name=troubleshooting></a>
## Troubleshooting
#### NPM Engine Err
- Make sure that the supported Node version has been installed. See here: [Installation](#installation)
