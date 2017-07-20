#! /usr/bin/env node

'use strict'

const exec = require('child_process').exec
const CLEAN_CMD = 'rm ./npm-debug*'

exec(CLEAN_CMD, () => { console.log('done...') });