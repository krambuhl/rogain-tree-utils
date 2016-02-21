import contains from 'object-contains';
export default function find(treeList, match) {
  return treeList.find(child => contains(child, match));
}