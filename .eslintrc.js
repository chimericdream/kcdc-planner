module.exports = {
    'extends': [
        '@chimericdream/eslint-config',
        '@chimericdream/eslint-config-react',
        '@chimericdream/eslint-config-jest',
        '@chimericdream/eslint-config-jsx-a11y',
    ],
    'plugins': [
        'babel',
        'emotion',
        'jest',
        'jsx-a11y',
        'react',
        'react-hooks',
    ],
    'rules': {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'emotion/no-vanilla': 'error',
    },
};
