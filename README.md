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

# Usage

- To launch the template in development mode :

`npm install`

`npm run dev`

# Build

- To build a production ready package :

`npm run build`

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

# Code documentation

Coming soon.

# Technologies

- [Typescript](https://www.typescriptlang.org/)
- [Eslint (styling)](https://eslint.org/)
- [Docker](https://www.docker.com/)
- [Github action (CI/CD)](https://github.com/features/actions)
