import contains from 'object-contains';
export default function findAll(treeList, match) {
  return treeList.filter(child => contains(child, match));
}