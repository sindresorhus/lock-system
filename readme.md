# lock-system

> Lock your system

Shows the login screen the next time you use the computer.

Supports macOS, Linux, and Windows.

## Install

```sh
npm install lock-system
```

## Usage

```js
import lockSystem from 'lock-system';

lockSystem();
```

## API

### lockSystem()

Locks the system.

Throws an error if executing the lock command fails or if the OS is not supported.

## Related

- [lock-cli](https://github.com/sindresorhus/lock-cli) - CLI for this module
- [alfred-lock](https://github.com/sindresorhus/alfred-lock) - Alfred workflow
