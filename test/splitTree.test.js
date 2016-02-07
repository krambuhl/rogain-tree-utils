var test = require('tape');
var templates = require('./fixtures/templates.json');
var splitTree = require('../dist').splitTree;

var testTree = templates.Template.children;

test('splitTree(tree)', function(t) {
  t.plan(1);
  var trees = splitTree(testTree);
  t.equal(trees.length, testTree.length);
});

test('splitTree(tree, { type }) :: middle', function(t) {
  t.plan(3);

  var trees = splitTree(testTree, { type: 'helper', name: 'NonEmpty' });

  t.equal(trees.length, testTree.length - 1);
  t.equal(trees[0].type, testTree[0].type);
  t.equal(trees[1].type, testTree[2].type);
});

test('splitTree(tree, { type, name }) :: first', function(t) {
  t.plan(2);

  var trees = splitTree(testTree, { type: 'tag', tagName: 'p' });

  t.equal(trees.length, testTree.length - 1);
  t.equal(trees[0].type, testTree[1].type);
});

test('splitTree(tree, { type, name }) :: last', function(t) {
  t.plan(2);

  var trees = splitTree(testTree, { type: 'helper', name: 'Empty' });

  t.equal(trees.length, testTree.length - 1);
  t.equal(trees[0].type, testTree[0].type);
});