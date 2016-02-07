import contains from 'object-contains';

export default function splitTree(trees, match) {
  var res = [];
  var matchUndefined = match === undefined;
  
  if (!matchUndefined) res.push([]);

  trees.forEach(tree => {
    if (match === undefined) {
      res.push(tree);
    } else if (contains(tree, match)) {
      res.push([]);
    } else {
      res[res.length - 1].push(tree);
    }
  });

  res = res.map(tree => {
    return matchUndefined || tree.length > 1 ? tree : tree[0];
  }).reduce((memo, tree) => {
    if (tree) memo.push(tree);
    return memo;
  }, []);


  return res.length === 1 ? res[0] : res;
}