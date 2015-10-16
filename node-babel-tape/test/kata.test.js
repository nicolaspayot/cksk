import test from 'tape';
import Kata from '../src/kata';

test('Kata greetings', function(t) {
  const kata = new Kata();
  t.equal(kata.greetings, 'Hello, World!', 'should return "Hello, World!"');
  t.end();
});
