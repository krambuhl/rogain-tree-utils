var test = require('tape');
var hasChildren = require('../dist').hasChildren;

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

var etree = {
  type: 'node',
  children: []
}

var ntree = {
  type: 'node'
}

test('hasChildren(tree) :: no children attr', function(t) {
  t.plan(1);
  t.equal(hasChildren(ntree), false);
});

test('hasChildren(tree) :: empty children attr', function(t) {
  t.plan(1);
  t.equal(hasChildren(etree), false);
});

test('hasChildren(tree) :: has children', function(t) {
  t.plan(1);
  t.equal(hasChildren(tree), true);
});