module.exports = {
    "env": {
        "node": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "jest"
    ],
    "rules": {
        "no-mixed-spaces-and-tabs": 0, // disable rule,
        "no-useless-escape": 0,
        "no-extra-boolean-cast": 0,
        "no-useless-catch": 0 
    }
}
