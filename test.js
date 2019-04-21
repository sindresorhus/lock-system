import test from 'ava';
import lockSystem from '.';

test('main', t => {
	t.notThrows(() => {
		lockSystem();
	});
});
