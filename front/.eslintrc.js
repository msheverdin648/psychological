module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended'
		
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [2, 4],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'off'
        ],
        'semi': [
            'off'
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn'
        ],
        'react/prop-types': 'warn'
    }
}
