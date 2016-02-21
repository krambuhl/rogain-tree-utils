export default function hasChildren(tree) {
  return tree.children !== undefined && tree.children.length > 0;
}