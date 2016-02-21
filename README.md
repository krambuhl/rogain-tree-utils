# rogain-tree-utils

Utilities for manipulating and traversing Rogain trees.

## splitTree(treeList, match)

Splits an array of trees at matching tree.

___treeList___

Array of trees.

___match___

Object.

`match` is used to segment the input array between each matching tree.

```js
var branches = splitTree(tree.children, {
    type: 'helper',
    name: 'Else'
});

var passing = branches[0];
var failing = branches[1];
```

__note__ will return an array of tree branches in the format `[ [ trees ], [ trees ] ]` even on a single tree result like, `[ [ tree ] ]`


## find(treeList, match)

Finds the first tree matching the `match` object in `treeList`.

___treeList___

Array of trees.  Haystack of trees.

___match___

Object. Needle tree.

```js
var res = find(tree.children, { type: 'helper', name: 'Else' });
```


## findAll(treeList, match)

Finds all trees matching the `match` object in `treeList`.

___treeList___

Array of trees.  Haystack of trees.

___match___

Object. Needle tree.

```js
var res = findAll(tree.children, { type: 'tag', tagName: 'a' });
```


## hasChildren(tree)

Predicate, returns true when tree has children.

___tree___

Tree.

```js
if (hasChildren(tree)) {
    // do children stuff
}
```


## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-tree-utils
```

## License

MIT