var test = require('tape');
var findAll = require('../dist').findAll;

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

test('findAll(tree, match) :: not found', function(t) {
  t.plan(1);
  
  var res = findAll(tree.children, { type: 'doodoo' });
  
  t.equal(res.length, 0);
});

test('findAll(tree, match) :: found one', function(t) {
  t.plan(4);
  
  var res = findAll(tree.children, { type: 'helper' });
  
  t.equal(res !== undefined, true);
  t.equal(res.length, 1);
  t.equal(res[0].type, 'helper')
  t.equal(res[0].name, 'NonEmpty')
});

test('findAll(tree, match) :: found many', function(t) {
  t.plan(6);
  
  var res = findAll(tree.children, { type: 'tag' });
  
  t.equal(res !== undefined, true);
  t.equal(res.length, 2);
  t.equal(res[0].type, 'tag');
  t.equal(res[0].tagName, 'p');
  t.equal(res[1].type, 'tag');
  t.equal(res[1].tagName, 'div');
});