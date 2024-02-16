<!-- FEATURES -->

# Features

This comprehensive document is a description of features that are crucial to the project's development environment. Explore detailed setups for essential tools and technologies, including Webpack, Babel, Jest, Express, ESLint, Stylelint, and Prettier. Gain insights into how these components contribute to a streamlined and efficient development workflow, ensuring consistency, performance, and code quality throughout the project.

<!-- TABLE OF CONTENTS -->

## Table of Contents

1. [Webpack](#webpack)
2. [Babel](#babel)
3. [Jest](#jest)
4. [ESLint](#eslint)

<!-- WEBPACK -->

## Webpack

[Webpack](https://webpack.js.org/) is a powerful open-source JavaScript module bundler widely used in modern web development. Its primary purpose is to manage and optimize the front-end codebase by bundling together various assets, such as JavaScript files, stylesheets, images, and more. Webpack treats all these assets as modules and builds a dependency graph, allowing it to efficiently package them for deployment. In this project, it has been configured to provide the features described below.

1. **Webpack Configuration Split:** The webpack configuration has been divided into three files ([webpack.common.js](https://github.com/lszymanski7/boilerplate-js/blob/main/config/webpack/webpack.common.js), [webpack.dev.js](https://github.com/lszymanski7/boilerplate-js/blob/main/config/webpack/webpack.dev.js) and [webpack.prod.js](https://github.com/lszymanski7/boilerplate-js/blob/main/config/webpack/webpack.prod.js)), adapted to both development and production environments. This modular approach enhances maintainability and ensures efficient handling of environment-specific optimizations. It was created using `webpack-merge` for easier management.

2. **Development Server Support:** The configuration includes robust support for the `webpack-dev-server`, offering a smooth development experience. Features like Hot Module Replacement (HMR) and source maps (`eval-source-map`) are leveraged to facilitate rapid iteration and effective debugging.

3. **Comprehensive Plugin Integration:**

   - `html-webpack-plugin`: Dynamically generates HTML files, including hashed script and link tags, making it easier to manage multiple entry points.
   - `copy-webpack-plugin`: Simplifies the copying of static assets like robots.txt to the build directory, ensuring seamless deployment.
   - `mini-css-extract-plugin`: Extracts CSS into separate files during production builds, enhancing performance and caching.
   - `terser-webpack-plugin`: Minifies and compresses JavaScript code, optimizing bundles for production.
   - `css-minimizer-webpack-plugin`: Minimizes and optimizes CSS files, contributing to smaller bundle sizes and improved loading times.

4. **Asset Caching and Cache-Busting:** Filenames are augmented with content hashes (`[contenthash:8]`), ensuring effective asset caching and automatic cache-busting on content changes. This approach enhances browser cache utilization, promoting optimal performance.

5. **Source Maps for Production:** Source maps (`source-map`) are configured for production builds, aiding in effective debugging by mapping minified code back to the original source.

6. **Structured Output Paths:** The output paths and filenames are meticulously configured to maintain a well-organized build structure. This includes distinct directories for JavaScript, CSS, fonts, images, and media assets.

7. **Optimized Production Build:** The production configuration is fine-tuned for optimal performance, employing TerserPlugin for JavaScript minification and CssMinimizerPlugin for CSS minification. This results in smaller bundle sizes and improved loading speeds in a production environment.

<!-- BABEL -->

## Babel

[Babel](https://babeljs.io/) is a JavaScript compiler that translates modern ECMAScript code into a version compatible with various browsers. It enables developers to use the latest language features, ensuring broad cross-browser support and facilitating the adoption of cutting-edge JavaScript capabilities. Below, you'll find descriptions of all the presets and plugins contained in the configuration file ([.babelrc.json](https://github.com/lszymanski7/boilerplate-js/blob/main/.babelrc.json)).

`@babel/preset-env`

- Automatically adjusts and transpiles JavaScript code to be compatible with the specified target environment.
- Ensures that the generated code follows the ECMAScript version supported by the target browsers or runtime.

`@babel/plugin-transform-class-properties`

- Transforms ECMAScript class properties syntax.
- Allows the use of class properties in a concise and expressive manner.

`@babel/plugin-transform-object-rest-spread`

- Transforms ECMAScript object rest/spread syntax.
- Enables the use of the spread operator (`...`) for objects, providing a convenient way to manipulate and merge object properties.

<!-- JEST -->

## Jest

<!-- ESLINT -->

## ESLint
