'use strict';

const path = require('path');
const childProcess = require('child_process');

const getExistingLinuxCommand = () => {
	const commands = [{
		name: 'xdg-screensaver',
		arg: 'lock'
	}, {
		name: 'gnome-screensaver-command',
		arg: '--lock'
	}, {
		name: 'dm-tool',
		arg: 'lock'
	}];

	return commands.find(command => {
		try {
			const result = childProcess.execFileSync('which', [command.name], { encoding: 'utf8' });
			return result && result.length;
		} catch (err) {
			return false;
		}
	});
};

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
		case 'linux': {
			// See: https://askubuntu.com/questions/184728/how-do-i-lock-the-screen-from-a-terminal
			const existingCommand = getExistingLinuxCommand();

			if (existingCommand) {
				childProcess.execFileSync(existingCommand.name, [existingCommand.arg]);
			} else {
				throw new Error('No applicable command found. Please consider installing xdg-screensaver, gnome-screensaver or dm-tool and try again.');
			}

			break;
		}
		default: {
			throw new Error(`Unsupported OS '${process.platform}'`);
		}
	}
};
