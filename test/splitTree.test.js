var test = require('tape');
var templates = require('./fixtures/templates.json');
var splitTree = require('../dist').splitTree;

var testTree = templates.Template.children;

test('splitTree(tree)', function(t) {
  t.plan(3);
  
  var trees = splitTree(testTree);

  t.equal(trees.length, testTree.length);
  t.equal(trees[0][0].type, testTree[0].type);
  t.equal(trees[1][0].type, testTree[1].type);
});

test('splitTree(tree, { }) :: middle', function(t) {
  t.plan(3);

  var trees = splitTree(testTree, { type: 'helper', name: 'NonEmpty' });

  t.equal(trees[0][0].type, testTree[0].type);
  t.equal(trees[1][0].type, testTree[2].type);
  t.equal(trees[1][1].type, testTree[3].type);
});

test('splitTree(tree, { }) :: first', function(t) {
  t.plan(4);

  var trees = splitTree(testTree, { type: 'tag', tagName: 'p' });

  t.equal(trees[0].length, testTree.length - 1);
  t.equal(trees[0][0].type, testTree[1].type);
  t.equal(trees[0][1].type, testTree[2].type);
  t.equal(trees[0][2].type, testTree[3].type);
});

test('splitTree(tree, { }) :: last', function(t) {
  t.plan(4);

  var trees = splitTree(testTree, { type: 'tag', tagName: 'div' });
  
  t.equal(trees[0].length, testTree.length - 1);
  t.equal(trees[0][0].type, testTree[0].type);
  t.equal(trees[0][1].type, testTree[1].type);
  t.equal(trees[0][2].type, testTree[2].type);
});