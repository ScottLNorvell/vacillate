#!/usr/bin/env node

const vacillate = require('./dist/vacillate.umd');

const [,, ...ideas] = process.argv;

const result = vacillate(...ideas);

console.log('\nI choose:', result);
