import addNodeToTree from "../../scripts/addNodeToTree";
import { TreeContext } from "../../Context/TreeContext";
import { useContext } from "react";
export default function ListNode(props) {
  const stateTree = useContext(TreeContext);

  function addNodeToChild(child) {
    let c = { ...child };
    c.key = c.key + "_";
    let res = addNodeToTree(stateTree, child, child.key);
    console.log(res);
  }

  function getNodeByKey(root, key) {
    // if (root.child[0]) return root.child[0];
    let res = root;
    function rec(root) {
      // console.log(root, key);
      if (root === null) return null;
      if (root.key === key) {
        console.log(root.key, key, "why");
        res = root;
      } else {
        root.child.map((child) => rec(child));
      }
      return res;
    }
    console.log(rec(root), "res");
  }

  const rootChild = stateTree.tree.child?.map((child) => (
    <>
      {" "}
      <h1 onClick={() => addNodeToChild(child)}>{child.key}</h1>
      <h2 onClick={() => getNodeByKey(stateTree.tree, child.key)}> get node</h2>
    </>
  ));

  return (
    <div>
      {rootChild}
      list
    </div>
  );
}
