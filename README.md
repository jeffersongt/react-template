<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Table of contents

- [Template](#template)
- [Usage](#usage)
- [Technologies](#technologies)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Template

This is a frontend react typescript template ready to use.
It includes CI with github actions, a dockerfile and docker-compose implementation fully functional
to add directly to your own compose file.

New features coming soon : Linter/Prettier/Husky/Jest ...

# Usage

To launch the template locally :

`npm install`
`npm run start`

If it fails :

remove this part in the line "start" from package.json : `export NODE_OPTIONS=--openssl-legacy-provider ; `

To launch the template in a docker container :

`docker-compose up --build`

# Technologies

- [Typescript](https://www.typescriptlang.org/)
- [Jest (testing)](https://jestjs.io/)
- [Eslint (styling)](https://eslint.org/)
- [Prettier (formatting)](https://prettier.io/)
- [Husky (pre-commit hooks)](https://typicode.github.io/husky/#/)
- [Github action (CI/CD)](https://github.com/features/actions)
