import test from 'ava';
import lockSystem from './index.js';

test('main', t => {
	t.notThrows(() => {
		lockSystem();
	});
});
