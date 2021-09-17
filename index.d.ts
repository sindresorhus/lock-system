/**
Lock your system. Shows the login screen the next time you use the computer.

Throws an error if executing the lock command fails or if the OS is not supported.

@example
```
import lockSystem from 'lock-system';

lockSystem();
```
*/
export default function lockSystem(): void;
