<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of contents

- [React-typescript-template](#react-typescript-template)
- [Usage](#usage)
- [Build](#build)
- [Docker](#docker)
- [Linter](#linter)
- [Continuous integration](#continuous-integration)
- [Code documentation](#code-documentation)
- [Technologies](#technologies)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# React-typescript-template

This is a frontend react typescript template ready to use.

It contains lot of tools already set as describe below.

And don't hesitate to check the already installed packages in `package.json`.

# Usage

- To launch the template in development mode :

`npm install`

`npm run dev`

# Build

- To build a production ready package :

`npm run build`

- Once built you can view locally a preview of your production build :

`npm run serve`

# Vite

This template uses [Vite](https://vitejs.dev/) instead of create-react-app as it is providing a faster and leaner development experience, Typescript speed is increased by 20 times compared to webpack or others, and it provides a build command pre-configured to output highly optimized static assets for production.

# Docker

A dockerfile and docker-compose implementation is provided.

- To launch the template in a docker container :

`docker-compose up --build`

# Linter

A Linter is also included [Eslint](https://eslint.org/).

- To use it :

`npm run lint`

- To automatically fix all the warnings :

`npm run lint:format`

You can also add your own rules in the file `.eslintrc.js` in the `rules` part.

# Continuous integration

This template provides Github Actions CI.

It handles :

- Docker build

- Linter

- Readme table of contents update.

Dependabot is also used in this template to automatically merge with the most recent dependencies.
To enable mergify bot to apply on your repository please follow the instructions here on [Mergify](https://docs.mergify.com/getting-started/).

# Code documentation

Go to `src` folder.

- `components` folder is for any generic component that is reusable in your code

- `helper` contains :

    - `types.ts` file for your interfaces
    
    - `api.ts` for all your api calls, it already contains a CRUD for the user management, go check :)

- `routes` is for all your routes :
    
    - you'll find at the root the entrypoint `index.tsx` where you define your paths

    - still at the root `App.css` for your style ( there are already lot of your needs go check ;) )

    - in the `home` folder you already have a homepage with a navbar and signup, signin buttons with the forms sent to the api

Now, simply add your routes in the `routes` folder, apply your styles in `App.css`, create your paths in `index.tsx`

Enjoy :)

# Technologies

- [Typescript](https://www.typescriptlang.org/)
- [Eslint (styling)](https://eslint.org/)
- [Docker](https://www.docker.com/)
- [Vite](https://vitejs.dev/)
- [Github action (CI/CD)](https://github.com/features/actions)
- [Mergify](https://docs.mergify.com/getting-started/)
