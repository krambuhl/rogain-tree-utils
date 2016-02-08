import contains from 'object-contains';

export default function splitTree(trees, match) { 
  if (match === undefined) {
    return trees.map(tree => [tree]);
  }

  return trees.reduce((memo, tree) => {
    if (contains(tree, match)) {
      if (memo[0].length > 0) memo.push([]);
    } else {
      memo[memo.length - 1].push(tree);
    }

    return memo;
  }, [[]]);
}