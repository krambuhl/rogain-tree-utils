var test = require('tape');
var find = require('../dist').find;

var tree = {
  type: 'node',
  children: [
    { type: 'text', data: 'hello-world' },
    { type: 'helper', name: 'NonEmpty' },
    { type: 'tag', tagName: 'p' },
    { type: 'tag', tagName: 'div' },
    { type: 'component', name: 'Box' }
  ]
}

test('find(tree, match) :: not found', function(t) {
  t.plan(1);
  
  var res = find(tree.children, { type: 'doodoo' });
  t.equal(res === undefined, true);
});

test('find(tree, match) :: found', function(t) {
  t.plan(3);
  
  var res = find(tree.children, { type: 'tag' });
  t.equal(res !== undefined, true);
  t.equal(res.type, 'tag')
  t.equal(res.tagName, 'p')
});