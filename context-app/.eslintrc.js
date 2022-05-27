module.exports = {
  "env": {
      "browser": true,
      "amd": true,
      "node": true,
      "es6": true,
      "jest/globals": true
  },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        // "plugin:jsx-a11y/recommended" // uncomment to activate // Can use plugin:jsx-a11y/strict or "plugin:jsx-a11y/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,"experimentalObjectRestSpread": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "only-warn",
        "jest",
        // "jsx-a11y" // uncomment to activate
    ],
    "ignorePatterns": [
        "env.js",
    ],
    "rules": {
        //"jsx-a11y/rule-name": 2, // 508
        "react/prop-types": "off", // TODO turn this back on and try again after other linting in a subsequent ticket
        "no-mixed-spaces-and-tabs": 0, // disable rule,
        "no-constant-condition": 0, // while(true) triggers this, but is harmless if coded properly
        "no-useless-escape": 0,
        "no-extra-boolean-cast": 0,
        "no-useless-catch": 0,
        "no-async-promise-executor": 0, // TODO review this - only happens in tiles proxy.  Best practices discourage this, even when it "works" (https://stackoverflow.com/questions/43083696/cant-throw-error-from-within-an-async-promise-executor-function)
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
