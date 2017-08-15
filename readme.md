# lock-system

> Lock your system

Shows the login screen the next time you use your computer. Supports macOS and Windows.


## Install

```
$ npm install lock-system
```


## Usage

```js
const lockSystem = require('lock-system');

lockSystem();
```


## API

### lockSystem()

Locks the system.

Please note that this function will throw an `Error`:
 - if executing the lock command fails, or
 - if the os (see [`process.platform`](https://nodejs.org/api/process.html#process_process_platform)) is not supported (only `darwin` and `win32` are supported at the moment).


## Related

- [lock-cli](https://github.com/sindresorhus/lock-cli) - CLI for this module
- [alfred-lock](https://github.com/sindresorhus/alfred-lock) - Alfred workflow


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
