export default function treeUi(mapContext) {
  let tree = rec(mapContext.map);
  let list = [];
  function rec(tree) {
    if (tree) {
      list.push(tree.value);
    }
  }
}
