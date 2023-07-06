///add to tree by add to the right node

export default function addNodeToTree(parentNodeKey, value, ContextTree) {
  let newTree = { ...ContextTree.tree };
  console.log(ContextTree.tree, newTree);
  newTree.insert(parentNodeKey, value);
  ContextTree.setTree(newTree);
}
