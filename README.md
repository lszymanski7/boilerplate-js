<!-- APPLICATION SNAPSHOT -->

<div align="center">

![Application](./docs/images/application.png)

</div>

<!-- APPLICATION SHIELDS -->

<div align="center">

![Version](https://img.shields.io/badge/1.0.0-blue?label=Version&labelColor=555555)
![GitHub Repository Size](https://img.shields.io/github/repo-size/lszymanski7/boilerplate-js?label=Size&labelColor=555555)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?label=License&labelColor=555555)](https://github.com/lszymanski7/boilerplate-js/blob/main/LICENSE.md)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/lszymanski7/boilerplate-js/main?label=Last%20Commit&labelColor=555555)](https://github.com/lszymanski7/boilerplate-js/commits/main)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lszymanski7/boilerplate-js?label=Pull%20Requests&labelColor=555555)](https://github.com/lszymanski7/boilerplate-js/pulls)
[![GitHub Issues](https://img.shields.io/github/issues/lszymanski7/boilerplate-js?label=Issues&labelColor=555555)](https://github.com/lszymanski7/boilerplate-js/issues)
[![CI/CD Status](https://img.shields.io/github/actions/workflow/status/lszymanski7/boilerplate-js/ci-cd.yml?label=CI%2FCD&labelColor=555555&logo=github)](https://github.com/lszymanski7/boilerplate-js/actions/workflows/ci-cd.yml)
[![Codecov](https://img.shields.io/codecov/c/github/lszymanski7/boilerplate-js?label=Codecov&labelColor=555555&logo=codecov)](https://app.codecov.io/gh/lszymanski7/boilerplate-js)

</div>

<br/>

<!-- APPLICATION DESCRIPTION -->

# JavaScript Boilerplate

Speed up the process of building new projects in the JavaScript programming language with this boilerplate! To streamline web development, it comes fully equipped with essential configurations for tools commonly used in everyday work, including Webpack, Babel, Jest, Express, ESLint, Stylelint and Prettier. Don't waste your time on configurations! Instead, dive straight into bringing your creative ideas to life!

🚀 **Live demo:** [https://lszymanski7-boilerplate-js.netlify.app](https://lszymanski7-boilerplate-js.netlify.app)

<!-- TABLE OF CONTENTS -->

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Development](#development)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Webpack](#webpack)
   - [ESLint](#eslint)
   - [Stylelint](#stylelint)
   - [Prettier](#prettier)
4. [Testing](#testing)
5. [Production](#production)
6. [Deployment](#deployment)
   - [Netlify](#netlify)
   - [Heroku](#heroku)
7. [Contributing](#contributing)
8. [Acknowledgements](#acknowledgements)
9. [License](#license)

<!-- FEATURES -->

## Features

In progress...

<!-- TECHNOLOGIES -->

## Technologies

The project utilizes technologies and tools that are crucial for web development. All dependencies listed in the [package.json](https://github.com/lszymanski7/boilerplate-js/blob/main/package.json) file are regularly monitored and updated with Dependabot. This practice ensures not only the security of the project but also enhances its stability, while maintaining compliance with the latest technology standards.

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-gray?style=flat&logo=javascript&logoColor=F7DF1E)
![HTML](https://img.shields.io/badge/HTML-gray?style=flat&logo=html5&logoColor=E34F26)
![CSS](https://img.shields.io/badge/CSS-gray?style=flat&logo=css3&logoColor=1572B6)
[![Sass](https://img.shields.io/github/package-json/dependency-version/lszymanski7/boilerplate-js/dev/sass?style=flat&label=Sass&logo=sass&logoColor=CC6699)](https://sass-lang.com)
[![Webpack](https://img.shields.io/github/package-json/dependency-version/lszymanski7/boilerplate-js/dev/webpack?style=flat&label=Webpack&logo=webpack&logoColor=8DD6F9)](https://webpack.js.org)
[![Babel](https://img.shields.io/github/package-json/dependency-version/lszymanski7/boilerplate-js/dev/@babel/core?style=flat&label=Babel&logo=babel&logoColor=F9DC3E)](https://babeljs.io)
[![Jest](https://img.shields.io/github/package-json/dependency-version/lszymanski7/boilerplate-js/dev/jest?style=flat&label=Jest&logo=jest&logoColor=C21325)](https://jestjs.io)
[![ESLint](https://img.shields.io/github/package-json/dependency-version/lszymanski7/boilerplate-js/dev/eslint?style=flat&label=ESLint&logo=eslint&logoColor=4B32C3)](https://eslint.org)
[![Stylelint](https://img.shields.io/github/package-json/dependency-version/lszymanski7/boilerplate-js/dev/stylelint?style=flat&label=Stylelint&logo=stylelint&logoColor=FFFFFF)](https://stylelint.io)
[![Prettier](https://img.shields.io/github/package-json/dependency-version/lszymanski7/boilerplate-js/dev/prettier?style=flat&label=Prettier&logo=prettier&logoColor=F7B93E)](https://prettier.io)
[![Node.js](https://img.shields.io/badge/Node.js-^20.11.1-blue?style=flat&logo=node.js&logoColor=339933)](https://nodejs.org)
[![Express](https://img.shields.io/github/package-json/dependency-version/lszymanski7/boilerplate-js/express?style=flat&label=Express&logo=express&logoColor=FFFFFF)](https://expressjs.com)
[![Npm](https://img.shields.io/badge/Npm-^10.2.4-blue?style=flat&logo=npm&logoColor=CB3837)](https://npmjs.com)

</div>

<!-- DEVELOPMENT -->

## Development

<!-- PREREQUISITES -->

### Prerequisites

> **Note** Download the [Node.js](https://nodejs.org/en/download) installer (which includes NPM).

This project was created using the Node.js (v20.11.1) runtime environment and the NPM (v10.2.4) package manager. You can download and install them using the official installer available on the [Node.js](https://nodejs.org/en/download) website. Make sure to follow the installation instructions for your specific operating system.

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

The development environment mainly focuses on strong source mapping and using localhost server with live reload or hot module replacement. This makes it easier to find errors and you don't have to manually run the command to compile your code whenever it changes.

In this environment, the webpack configuration uses `eval-source-map` as devtool. It provides fast rebuild and correctly mapped line numbers, which is very helpful in the development process.

If you want to run `webpack-dev-server` with Hot Module Replacement (HMR), use the command below. The application will be launched at the following url: [http://localhost:8080](http://localhost:8080)

```
$ npm run dev-server
```

<!-- ESLINT -->

### ESLint

ESLint is a tool designed to find and fix problems in ECMAScript/JavaScript code. Thanks to its use, the code is more consistent and free from common bugs. It's also fully customizable. You can disable any rule that doesn't meet your project's requirements.

Run the command below to check the JavaScript code and find any existing problems.

```
$ npm run eslint:check
```

Another command allows you to find issues and fix them. Keep in mind that not all problems are fixable using this option. You can also ignore specific files and directories from this process in the [.eslintignore](https://github.com/lszymanski7/boilerplate-js/blob/main/.eslintignore) file.

> **Warning** This overwrites your files!

```
$ npm run eslint:fix
```

<!-- STYLELINT -->

### Stylelint

In progress...

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

This project uses Jest. It's a JavaScript testing framework designed to ensure the correctness of the code. Jest allows you to write tests that returns results quickly. Moreover, this tool can be extended to suit your project's requirements.

Use one of these two scripts to run your tests. The second option turns on the watch mode. After the testing process is complete, the relevant information will be displayed to the console.

```
$ npm run test
$ npm run test:watch
```

The command below is used to collect code coverage information from directories specified in the [jest.config.js](https://github.com/lszymanski7/boilerplate-js/blob/main/config/jest/jest.config.js) file. All output files will be available in the `./coverage` folder.

```
$ npm run test:coverage
```

<!-- PRODUCTION -->

## Production

In a production environment, the build process mainly focuses on minified bundles, lighter weight source maps and optimized assets. This is all to improve load time.

For the reasons above, the webpack configuration uses `source-map` as devtool in this environment. It creates high-quality source maps. Besides, the following three plugins were also used:

- `mini-css-extract-plugin` - extracts CSS into separate files,
- `css-minimizer-webpack-plugin` - optimizes and minifies CSS,
- `terser-webpack-plugin` - optimizes and minifies JavaScript.

Use the command below to run webpack and create a production build.

```
$ npm run build
```

The next command starts the server built with Node.js and Express. All static files generated by webpack will be served from the `./build` folder. The application will be launched at the following url: [http://localhost:3000](http://localhost:3000)

```
$ npm run start
```

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

Any contributions are greatly appreciated. Use the [issue tracker](https://github.com/lszymanski7/boilerplate-js/issues) if you want to report bugs, request a new feature or improve documentation. Please check for existing issues before you report them yourself.

You can contribute by following these steps:

1. Fork this repository on GitHub.
2. Clone the forked repository to your machine: `$ git clone https://github.com/username/boilerplate-js.git`
3. Create a new branch: `$ git switch -c <branch-name>`
4. Make necessary changes and commit them.
5. Push changes to GitHub: `$ git push origin -u <branch-name>`
6. Submit a new Pull Request on GitHub.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- For more info about 7-1 Sass Architecture, please refer to [Sass Guidelines](https://sass-guidelin.es/#architecture) by Kitty Giraudel.

<!-- LICENSE -->

## License

This project is licensed under the terms of the [MIT License](https://github.com/lszymanski7/boilerplate-js/blob/main/LICENSE.md).

<br/>

<!-- LINKS -->

##

<div align="center">
  <p>If you have any questions or suggestions, please send me an <a href="mailto:lszymanski.info@gmail.com?subject=GitHub - Your subject here...">e-mail</a>. <br/> You can also find me on the following websites:</p>
  
  [![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-F58025?style=flat&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/18706083)
  [![GitLab](https://img.shields.io/badge/GitLab-555555?style=flat&logo=gitlab)](https://gitlab.com/lszymanski7)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/lszymanski7)
</div>
