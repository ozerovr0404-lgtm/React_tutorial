module.export= {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugins:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parseOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: {version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warm',
      { allowConstantExport }
    ],
    "semi": ["error", "always", { "omitLastInOneLineBlock": false }],
    "comma-dangle": ["error, never"],
    quotes: ["error", "single"]
  }
};