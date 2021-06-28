# Blog App

Welcome to my Blog App, where you can see the latest post or read all of them, and also write comments.

Demo at: [blog-app-liard.vercel.app](blog-app-liard.vercel.app)

App created using [Next.js 11](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [styled-components](https://styled-components.com/) and for testing [Jest](https://jestjs.io/). Thank you for using my app.

For this project to run, since the deploy version is only connected to a localhost DB you need to run the API via json-server [https://github.com/LetsGetChecked/developer-challenge-api](https://github.com/LetsGetChecked/developer-challenge-api).

**Note:** To run this project be sure to have a Node version installed that is 12.x or higher

## Table of Contents

- [Installation](#installation)
- [Future Work](#future-work)
- [Contributing](#contributing)
- [License](#license)
- [Folder Structure](#folder-structure)
- [Environment variables](#environment-variables)
- [Available Scripts](#available-scripts)
  - [npm run install:npm](#npm-run-installnpm)
  - [npm run dev](#npm-run-dev)
  - [npm run build](#npm-run-build)
  - [npm run start](#npm-run-start)
  - [npm run find:unused](#npm-run-findunused)
  - [npm run lint](#npm-run-lint)
  - [npm run format](#npm-run-format)
  - [npm run test](#npm-run-test)
  - [npm run test:watch](#npm-run-testwatch)
  - [npm run test:coverage](#npm-run-testcoverage)

## Installation

To use this app, first clone from GitHub via 'git clone https://github.com/katiaipduarte/blog-app.git' at your terminal, `cd` to the new directory, then run `npm run install:npm`. Before running this project, you will need to create a `.env.local` file, with the same env as the ones in the `.env.example`. At last, run `npm run dev` to launch your http server.

## Future Work

[ ] Add a deployed DB<br>
[ ] Add more unit tests and e2e ones<br>
[ ] Add page transition loader<br>
[ ] Add authentication<br>
[ ] Add possibility to write posts<br>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/katiaipduarte/blog-app. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License

The code is available as open source under the terms of the MIT License.

## Folder Structure

```
blog-app/
    .jest/
    components/
        common/
        templates/
        ui/
    constants/
    interfaces/
    lib/
        context/
        hooks/
        seo/
    pages/
    public/
    styles/
    utils/
```

For the project to build, **these files must exist with exact filenames**:

- `.jest` contains a single file for the setup of the plugins/npm packages used in the unit tests.
- `components` is the folder that houses all the components used. It's divided for now into 5 modules.
  - `common`: components that are used all the time when we render a page.
  - `templates`: pages templates.
  - `ui`: small components ui components with or without logic.
- `constants` is the folder with all the enums or const objects used in the components.
- `interfaces` is the folder with all the interfaces/type files used in the components.
- `lib` is the folder for some hooks, SEO and context provider.
- `pages` is the folder that contains the files with the initial logic used for each route.
- `public` the folder only contains the favicon images.
- `style` is the folder with reset, themes and any other style rules shared by all components.
- `utils` is the folder with helper functions.

## Environment variables

NEXT_PUBLIC_APP_URL=

NEXT_PUBLIC_API_ENDPOINT=

## Available Scripts

### `npm run install:npm`

Clear installation of all node modules.

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run start`

Runs the app in the production mode.<br />
Open [http://localhost](http://localhost) to view it in the browser.

### `npm run find:unused`

[next-unused](https://github.com/pacocoursey/next-unused) is used to find all the unused files in the project.

### `npm run lint`

Automatic linting, with rules to work with TypeScript and React. The `node_modules` and `e2e` folders are not included.

This is runned each time you do a commit and a push it to your branch.

For more information see the [ESLint documentation](https://eslint.org/).

### `npm run format`

Command to format the code according to the rules that can be found in `.prettierrc`. The `node_modules` and `e2e` folders is not included.

This will be automatically run each time you do a commit.

For more information see the [Prettier documentation](https://prettier.io/).

### `npm run test`

Runs all the tests founded.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:watch`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

Launches the test runner in the interactive watch mode and shows a report with the code coverage for each component.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
