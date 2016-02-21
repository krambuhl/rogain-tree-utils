var test = require('tape');
var splitTrees = require('../dist').splitTrees;

var treeList = [
  { type: 'text', data: 'hello-world' },
  { type: 'helper', name: 'NonEmpty' },
  { type: 'tag', tagName: 'p' },
  { type: 'tag', tagName: 'div' },
  { type: 'component', name: 'Box' }
]

test('splitTrees(tree)', function(t) {
  t.plan(3);
  
  var trees = splitTrees(treeList);

  t.equal(trees.length, treeList.length);
  t.equal(trees[0][0].type, treeList[0].type);
  t.equal(trees[1][0].type, treeList[1].type);
});

test('splitTrees(tree, { }) :: middle', function(t) {
  t.plan(3);

  var trees = splitTrees(treeList, { type: 'helper', name: 'NonEmpty' });

  t.equal(trees[0][0].type, treeList[0].type);
  t.equal(trees[1][0].type, treeList[2].type);
  t.equal(trees[1][1].type, treeList[3].type);
});

test('splitTrees(tree, { }) :: first', function(t) {
  t.plan(4);

  var trees = splitTrees(treeList, { type: 'text', data: 'hello-world' });

  t.equal(trees[0].length, treeList.length - 1);
  t.equal(trees[0][0].type, treeList[1].type);
  t.equal(trees[0][1].type, treeList[2].type);
  t.equal(trees[0][2].type, treeList[3].type);
});

test('splitTrees(tree, { }) :: last', function(t) {
  t.plan(4);

  var trees = splitTrees(treeList, { type: 'component', name: 'Box' });
  
  t.equal(trees[0].length, treeList.length - 1);
  t.equal(trees[0][0].type, treeList[0].type);
  t.equal(trees[0][1].type, treeList[1].type);
  t.equal(trees[0][2].type, treeList[2].type);
});