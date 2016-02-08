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

  res = res.reduce((memo, tree) => {
    if (Array.isArray(tree)) { 
      if (tree.length > 0) memo.push(tree)
    } else if (tree) memo.push(tree);
    return memo;
  }, []);

  return res;
}