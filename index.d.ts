/**
Lock your system. Shows the login screen the next time you use the computer.

Throws an `Error` if executing the lock command fails or if the OS is not supported.

@example
```
import lockSystem = require('lock-system');

lockSystem();
```
*/
declare function lockSystem(): void;

export = lockSystem;
