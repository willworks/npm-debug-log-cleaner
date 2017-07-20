#! /usr/bin/env node

'use strict'

const exec = require('child_process').exec

const CREATE_CMD = 'touch npm-debug.log.test'
const CLEAN_CMD = 'npm-debug-log-cleaner'

exec(CREATE_CMD, () => { console.log('done...') });
setTimeout(() => {
  console.log('wait...')
  exec(CLEAN_CMD, () => { console.log('done...') });
}, 2000);