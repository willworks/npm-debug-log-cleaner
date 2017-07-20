# npm-debug-log-cleaner
npm-debug.log cleaner use in pre-commit


### install
```
npm i -D npm-debug-log-cleaner
```


### use lint-staged

```
"lint-staged": {
  "*.js": eslint
}
```

### config precommit script in package.json
```
"precommit": "npm-debug-log-cleaner && lint-staged"
```