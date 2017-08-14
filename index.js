'use strict';
const path = require('path');
const childProcess = require('child_process');

const os = process.platform;

// Binary: https://github.com/sindresorhus/macos-lock
const DARWIN_BIN = path.join(__dirname, 'lock');

// See: https://superuser.com/questions/21179/command-line-cmd-command-to-lock-a-windows-machine
const WIN32_CMD = 'rundll32.exe user32.dll,LockWorkStation';

module.exports = () => {
	switch (os) {
		case 'darwin': return childProcess.execFileSync(DARWIN_BIN);
		case 'win32': return childProcess.execSync(WIN32_CMD);
		default: throw new Error(`Unsupported os: ${os}`);
	}
};
