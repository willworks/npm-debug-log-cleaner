#! /usr/bin/env node

'use strict'

const fs = require("fs")
const os = require("os")
const exec = require('child_process').exec
const CLEAN_CMD = 'rm ./npm-debug*'

fs.open('.gitignore', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('.gitignore already exists');
      return;
    }
    throw err;
  }
  fs.appendFile('.gitignore', 'npm-debug*' + os.EOL, (err) => {
    if (err) throw err;
    console.log('.gitignore has been saved!');
  });
});

exec(CLEAN_CMD, () => { console.log('clean done!') });