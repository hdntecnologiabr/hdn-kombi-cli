# <%= fullName %>

# Introduction

This application is a React SPA.

If you would like to understand this approach a little bit more, you can take a look [here](https://www.royalcyber.com/blog/ecommerce/react-spa-for-increased-performance-and-customer-experience/)

More information about the architecture - (https://www.notion.so/lucascoalves/Architecture-f54a569da92a49eb8f5a9467b08f67a1)

## Getting Started

### 1. Setup

1. [Install nodejs](https://nodejs.org/en/) **Note:** version ^10.16
2. [Install yarn](https://yarnpkg.com/lang/en/)
3. Run this command on root folder to install our git hooks:  
   `make hooks`
4. Run this command on `src` to download all dependencies:  
   `yarn install`

### 2. Run and build the application

1. Run this command **on root** folder to build the app:  
   `make build`
2. Run this command on root folder to run on dev environment:  
   `make run-dev`
3. Run this command to run our mocks on dev environment:  
   `make dev-dependencies`

### 3. Automated tests

1. To run unit tests:  
   `yarn test`
2. To see the code coverage  
   `yarn coverage`
3. To run the component-test  
   `make component-tests-dev`
4. To run the component tests on CLI mode  
   `make component-tests`

### 4. SCM

1. We must use [Trunk-based Development](https://www.notion.so/lucascoalves/SCM-Process-3f504c989798407496ea6c9873f68f7e) on this repo
2. The commit messages should follow this pattern:  
   `[AZUREID-123][AZUREID-456] Message describing your changes`  
    The first information ([AZUREID-123]) is the story key on Azure and the second one ([AZUREID-456]) is the key of the sub-task on Azure.  
    If the commit message is not on the pattern above, the hooks will block the commit

### 5. Best practices

1. [Customer portal guide](https://www.notion.so/lucascoalves/React-code-standards-e9d47b604ce74e19927b6c8c4d32d8d5)
