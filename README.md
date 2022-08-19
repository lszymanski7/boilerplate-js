<!-- APPLICATION PREVIEW -->
<div align="center">

  ![JavaScript Boilerplate Header](./docs/application.png)

</div>

<!-- SHIELDS -->
<div align="center">

  ![Version](https://img.shields.io/badge/version-1.0.0-blue?label=Version&labelColor=424242)
  ![GitHub Repository Size](https://img.shields.io/github/repo-size/lszymanski7/boilerplate-js?label=Size&labelColor=424242)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?label=License&labelColor=424242)](https://github.com/lszymanski7/boilerplate-js/blob/main/LICENSE.md)
  ![GitHub Last Commit](https://img.shields.io/github/last-commit/lszymanski7/boilerplate-js?label=Last%20Commit&labelColor=424242)
  ![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lszymanski7/boilerplate-js?label=Pull%20Requests&labelColor=424242)
  ![GitHub Issues](https://img.shields.io/github/issues/lszymanski7/boilerplate-js?label=Issues&labelColor=424242)

</div>

<br/>

<!-- JAVASCRIPT BOILERPLATE -->
# JavaScript Boilerplate
Boilerplate for creating projects in the JavaScript programming language. It includes the basic configuration of tools such as Webpack, Babel, Jest, Express, ESLint and Prettier. Designed to speed up the process of building new projects. Don't waste your time configuring the tools commonly used in web development.

<!-- TABLE OF CONTENTS -->
## Table of Contents
1. [Features](#features)
2. [Technologies](#technologies)
3. [Development](#development)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Webpack](#webpack)
    - [ESLint](#eslint)
    - [Prettier](#prettier)
4. [Testing](#testing)
5. [Production](#production)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [Acknowledgements](#acknowledgements)
9. [License](#license)

<!-- FEATURES -->
## Features
- Webpack configuration split into three files to separate development and production environments. Provides support for `webpack-dev-server` and plugins such as: 
  - `html-webpack-plugin`,
  - `copy-webpack-plugin`,
  - `mini-css-extract-plugin`,
  - `css-minimizer-webpack-plugin`,
  - `terser-webpack-plugin`.
- Converting ECMAScript 2015+ code into a backwards compatible version of JavaScript. 
- Possibility to conduct unit tests and generate code coverage.
- A simple Express server that allows you to deploy your application to Heroku.
- Checking JavaScript code to find existing problems.
- Formatting all supported files.

<!-- TECHNOLOGIES -->
## Technologies
![JavaScript](https://img.shields.io/badge/JavaScript-424242?style=flat&logo=javascript&logoColor=F7DF1E)
![HTML](https://img.shields.io/badge/HTML-424242?style=flat&logo=html5&logoColor=E34F26)
![CSS](https://img.shields.io/badge/CSS-424242?style=flat&logo=css3&logoColor=1572B6)
[![SASS](https://img.shields.io/badge/SASS%20|%20v1.53.0-424242?style=flat&logo=SASS&logoColor=CC6699)](https://sass-lang.com)
[![Webpack](https://img.shields.io/badge/Webpack%20|%20v5.72.1-424242?style=flat&logo=webpack&logoColor=8DD6F9)](https://webpack.js.org)
[![Babel](https://img.shields.io/badge/Babel%20|%20v7.18.0-424242?style=flat&logo=babel&logoColor=F9DC3E)](https://babeljs.io)
[![Jest](https://img.shields.io/badge/Jest%20|%20v28.1.3-424242?style=flat&logo=jest&logoColor=C21325)](https://jestjs.io)
[![Node.js](https://img.shields.io/badge/Node.js%20|%20v18.6.0-424242?style=flat&logo=node.js&logoColor=339933)](https://nodejs.org/en)
[![Npm](https://img.shields.io/badge/Npm%20|%20v8.15.0-424242?style=flat&logo=npm&logoColor=CB3837)](https://npmjs.com)
[![Express](https://img.shields.io/badge/Express%20%7C%20v4.18.1-424242?style=flat&logo=express&logoColor=FFFFFF)](https://expressjs.com)
[![ESLint](https://img.shields.io/badge/ESLint%20%7C%20v8.19.0-424242?style=flat&logo=eslint&logoColor=4B32C3)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier%20%7C%20v2.7.1-424242?style=flat&logo=prettier&logoColor=F7B93E)](https://prettier.io)

All technologies and tools were used in the latest version at the time of creating this project.

<!-- DEVELOPMENT -->
## Development

<!-- PREREQUISITES -->
### Prerequisites
> **Note** Download [Node.js](https://nodejs.org/en/download) installer.

This project was created with the Node.js (v18.6.0) runtime environment and the NPM (v8.15.0) for package management. Use the Node.js installer to install both of them on your system.

<!-- INSTALLATION -->
### Installation
Follow all of the steps below to get a local copy of the project and install any dependencies required to run it.

1. Clone the repository.

```
$ git clone https://github.com/lszymanski7/boilerplate-js.git
```

2. Navigate to the project directory.

```
$ cd boilerplate-js
```

3. Install all dependencies.

```
$ npm install
```

<!-- WEBPACK -->
### Webpack

<!-- ESLINT -->
### ESLint
ESLint is a tool designed to find and fix problems in ECMAScript/JavaScript code. Thanks to its use, the code is more consistent and free from common bugs. It's also fully customizable. You can disable any rule that doesn't meet your project's requirements.

Run the command below to check JavaScript code and find any existing problems.

```
$ npm run eslint:check
```

Another command allows you to find issues and fix them. Keep in mind that not all problems are fixable using this option. You can also ignore specific files and directories from this process in the [.eslintignore](https://github.com/lszymanski7/boilerplate-js/blob/main/.eslintignore) file.

> **Warning** This overwrites your files!

```
$ npm run eslint:fix
```

<!-- PRETTIER -->
### Prettier
Prettier is an opinionated code formatter. This tool enforces a consistent code style and allows you to define the formatting rules according to your preferences. Its use will significantly save your time and energy. 

In this project, there are two commands at your disposal. The first one checks that all files are formatted.

```
$ npm run prettier:check
```

To format all files supported by Prettier in the current directory and its subdirectories, run the second command. If you want to ignore things that shouldn't be formatted, you can use a [.prettierignore](https://github.com/lszymanski7/boilerplate-js/blob/main/.prettierignore) file.

> **Warning** This overwrites your files!

```
$ npm run prettier:fix
```

<!-- TESTING -->
## Testing
This project uses Jest. It's a JavaScript testing framework which was designed to ensure the correctness of the code. Jest allows you to write tests that returns results quickly. Moreover, this tool can be extended to suit your project's requirements.

Use one of these two scripts to run your tests. The second option turns on the watch mode. After the testing process is complete, the relevant information will be displayed to the console.

```
$ npm run test
$ npm run test:watch
```

The command below is used to collect code coverage information from directories specified in the [jest.config.js](https://github.com/lszymanski7/boilerplate-js/blob/dev/config/jest.config.js) file. All output files will be available in the `./coverage` folder.

```
$ npm run test:coverage
```

<!-- PRODUCTION -->
## Production

<!-- DEPLOYMENT -->
## Deployment
> **Note** Download [Git](https://git-scm.com/downloads) and [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli) installers.

This project is adapted for deploying applications to Heroku using Git. First of all, you must have Git and Heroku CLI installed on your machine. Once both tools are configured, initialize a local Git repository and commit your code to it.

The next step is to create a new empty application on Heroku. You can do this with the `heroku create` command. It'll also set up a `heroku` remote for your local repository.

```
$ heroku create -a herokuapp-name
```

If you've already created a Heroku app, you can use the command below to add a remote to your local repository.

```
$ heroku git:remote -a herokuapp-name
```

After everything is set up, you can finally deploy your code to Heroku. Run the `git push` command to complete this process. Your code will be pushed from local repository’s `main` branch to `heroku` remote.

```
$ git push heroku main
```

<!-- CONTRIBUTING -->
## Contributing

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

<!-- LICENSE -->
## License
> You can check out the full license [here](https://github.com/lszymanski7/boilerplate-js/blob/main/LICENSE.md).

This project is licensed under the terms of the **MIT** license.

<br/>

<!-- LINKS -->
##
<div align="center">
  <p>Connect with me:</p>
  
  [![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-F58025?style=flat&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/18706083)
  [![GitLab](https://img.shields.io/badge/GitLab-424242?style=flat&logo=gitlab)](https://gitlab.com/lszymanski7)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/lszymanski7)
  [![Twitter](https://img.shields.io/twitter/follow/lszymanski7_?label=Twitter&style=social)](https://twitter.com/lszymanski7_)

</div>
