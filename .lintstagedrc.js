module.exports = {
  '**/*.{ts,tsx}': ['npm run type-check'],
  '**/*.{ts,tsx,js,jsx}': ['prettier --write', 'eslint --fix'],
  '**/*.{json}': ['prettier --write'],
}
