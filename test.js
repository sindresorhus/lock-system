import test from 'ava';
import m from '.';

test(t => {
	t.notThrows(() => {
		m();
	});
});
