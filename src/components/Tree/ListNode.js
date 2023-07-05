import addNodeToTree from "../../scripts/addNodeToTree";
import { TreeContext } from "../../Context/TreeContext";
import { useContext } from "react";
export default function ListNode(props) {
  const stateTree = useContext(TreeContext);

  function addNodeToChild(child) {
    let res = addNodeToTree(stateTree, child, child.key);
  }

  function getNodeByKey(root, key) {}

  const rootChild = stateTree.tree.child?.map((child) => (
    <>
      {" "}
      <h1 onClick={() => addNodeToChild(child)}>{child.key}</h1>
      {/* <h2 onClick={() => getNodeByKey(stateTree.tree, child.key)}> get node</h2> */}
    </>
  ));

  return (
    <div>
      {rootChild}
      list
    </div>
  );
}
