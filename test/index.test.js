import test from 'ava';
import completeAssign from '..';

test('completeAssign: plain object', t => {
  let target = {};
  completeAssign(target, {
    foo: 'bar'
  });
  t.is(target.foo, 'bar');
});

test('completeAssign: getter', t => {
  let target = {};
  completeAssign(target, {
    get foo() {
      return 'bar';
    }
  });
  t.is(target.foo, 'bar');
});

test('completeAssign: function', t => {
	let target = {};
	completeAssign(target, {
		foo() {
			return 'bar';
		}
	});
	t.is(target.foo(), 'bar');
});