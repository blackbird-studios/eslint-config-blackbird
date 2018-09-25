# eslint-config-blackbird

This package provides Blackbird Studios' default .eslintrc as an extensible shared config.

The linter rules in this config are a slightly modified version of the [`airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [`prettier`](https://github.com/prettier/eslint-config-prettier) configs.

## Installation

### Yarn

To install via yarn, if you do not have the peer dependencies installed, install them first:
```sh
yarn add eslint eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react --dev
```

Then install the config:
```sh
yarn add https://github.com/blackbird-studios/eslint-config-blackbird#v1.0.0 --dev

```

### NPM

To install via npm (version **5+**):
```sh
npx install-peerdeps --dev https://github.com/blackbird-studios/eslint-config-blackbird#v1.0.0
```

## Usage

Add ` "extends": "blackbird"` to your `.eslintrc` file.

Example config:

```
{
  "parser": "babel-eslint",
  "extends": ["blackbird"],
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
}
```

## Contributing

Please submit suggested changes as a PR for review by the Blackbird team.
