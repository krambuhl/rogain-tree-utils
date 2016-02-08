# rogain-tree-utils

Utilities for manipulating Rogain trees.

## splitTree(trees, match)

Splits an array of trees at matching tree.

___trees___

Array of trees.

___match___

Object.

`match` is used to segment the input array between each matching tree.

```js
var branches = splitTree(tree.children, {
    type: 'component',
    name: 'Else'
});

var passing = branches[0];
var failing = branches[1];
```

__note__ will return an array of tree branches in the format `[ [ trees ], [ trees ] ]` even on a single tree result like, `[ [ tree ] ]`

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-tree-utils
```

## License

MIT