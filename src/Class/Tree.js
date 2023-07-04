export default class TreeNode {
  constructor(value) {
    this.value = value;
    this.child = [];
    map[value.key] = this;
    this.addChidToNodeByKey = (child, key, tree) => {
      let node = this.getNodeByKey(tree, key);
      console.log(node, "node.child");
      node.child = node.child.concat(child);
      return node;
    };
  }
  getNodeByKey(root, key) {
    console.log(root, key, ",root, key");

    function rec(root) {
      if (root == null) return;
      if (root.value.key === key) return root;
      else {
        root.child.map((child) => rec(child));
      }
    }
    return rec(root);
  }
}

export const map = {};
