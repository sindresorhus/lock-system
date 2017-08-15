'use strict';
const path = require('path');
const childProcess = require('child_process');

module.exports = () => {
	switch (process.platform) {
		case 'darwin': {
			// Binary: https://github.com/sindresorhus/macos-lock
			childProcess.execFileSync(path.join(__dirname, 'lock'));
			break;
		}
		case 'win32': {
			// See: https://superuser.com/questions/21179/command-line-cmd-command-to-lock-a-windows-machine
			childProcess.execFileSync('rundll32.exe', ['user32.dll,LockWorkStation']);
			break;
		}
		default: {
			throw new Error(`Unsupported OS '${process.platform}'`);
		}
	}
};
