module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },

    extends: ['eslint:recommended', 'plugin:prettier/recommened'],
    parserOption: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'no-console': 'off'
    }
}