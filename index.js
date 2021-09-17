import process from 'node:process';
import path from 'node:path';
import childProcess from 'node:child_process';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getExistingLinuxCommand = () => {
	// See: https://askubuntu.com/questions/184728/how-do-i-lock-the-screen-from-a-terminal
	const commands = [{
		name: 'xdg-screensaver',
		argument: 'lock',
	}, {
		name: 'gnome-screensaver-command',
		argument: '--lock',
	}, {
		name: 'cinnamon-screensaver-command',
		argument: '--lock',
	}, {
		name: 'dm-tool',
		argument: 'lock',
	}];

	return commands.find(command => {
		try {
			const result = childProcess.execFileSync('which', [command.name], {encoding: 'utf8'});
			return result && result.length > 0;
		} catch {
			return false;
		}
	});
};

export default function lockSystem() {
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
			const existingCommand = getExistingLinuxCommand();

			if (existingCommand) {
				childProcess.execFileSync(existingCommand.name, [existingCommand.argument]);
			} else {
				throw new Error('No applicable command found. Please consider installing xdg-screensaver, gnome-screensaver, cinnamon-screensaver, or dm-tool, and try again.');
			}

			break;
		}

		default: {
			throw new Error(`Unsupported OS: ${process.platform}`);
		}
	}
}
