const splitter = require('./index.js');
// console.log(splitter('<div>bla bla</div>', '<span class="letter">$</span>'));
console.log(splitter('<div>bla bla</div>', '$', '<span class="word">$</span>'));

test('splits string into letters', () => {
  expect(splitter('<div>bla</div>', '<span class="letter">$</span>'))
  .toBe('<div><span class="letter">b</span><span class="letter">l</span><span class="letter">a</span></div>');
});

test('splits string into letters with spaces', () => {
  expect(splitter('<div>bla bla</div>', '<span class="letter">$</span>'))
  .toBe('<div><span class="letter">b</span><span class="letter">l</span><span class="letter">a</span><span class="letter"> </span><span class="letter">b</span><span class="letter">l</span><span class="letter">a</span></div>');
});

test('wraps words too', () => {
  expect(splitter('<div>bla bla</div>', '<span class="letter">$</span>', '<span class="word">$</span>'))
  .toBe('<div><span class="word"><span class="letter">b</span><span class="letter">l</span><span class="letter">a</span></span><span class="word"><span class="letter">b</span><span class="letter">l</span><span class="letter">a</span></span></div>');
});

test('wraps words inside tags too', () => {
  expect(splitter('<div>bla <i>bla bla</i></div>', '<span class="letter">$</span>', '<span class="word">$</span>'))
  .toBe('<div><span class="word"><span class="letter">b</span><span class="letter">l</span><span class="letter">a</span></span><i><span class="word"><span class="letter">b</span><span class="letter">l</span><span class="letter">a</span></span><span class="word"><span class="letter">b</span><span class="letter">l</span><span class="letter">a</span></span></i></div>');
});

test('split only words', () => {
  expect(splitter('<div>bla bla</div>', '$', '<span class="word">$</span>'))
  .toBe('<div><span class="word">bla</span><span class="word">bla</span></div>');
});