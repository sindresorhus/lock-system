'use strict';
const path = require('path');
const childProcess = require('child_process');

// Binary: https://github.com/sindresorhus/macos-lock
const BIN = path.join(__dirname, 'lock');

module.exports = () => {
	childProcess.execFileSync(BIN);
};
