import nextEslintPlugin from '@next/eslint-plugin-next';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  { ignores: ['build', 'dist', 'node_modules'] },
  ...compat.config({ extends: ['next'] }),
  {
    plugins: {
      '@next/next': nextEslintPlugin,
    },
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];
