import shortid from "shortid";

export default class TreeNode {
  constructor(value) {
    this.value = value;
    this.child = [];
    this.key = shortid.generate();
    // map[value.key] = this;
    this.addChlidToNodeByKey = (child, key, tree) => {
      let node = this.getNodeByKey(tree, key);
      if (node) {
        node.child = node?.child.concat(child);
      } else {
      }
      return node;
    };
  }
  getNodeByKey(root, key) {
    console.log("hellow");
    let res = null;
    let arr = [];
    function rec(root) {
      if (root) {
        if (root.key === key) {
          res = root;
          console.log(res, key, "isTruee");
          return res;
        }
        arr.push(root.key);
        root.child.map((child) => rec(child));
      }
    }
    res = res || rec(root);
    console.log(res, arr);

    return res;
  }
}

export const map = {};
