# Tree Utilities

Utilities for manipulating Rogain trees.

## splitTree(trees, match)

Splits an array of trees at matching element.

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

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-parser
```

## License

MIT