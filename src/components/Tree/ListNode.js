import addNodeToTree from "../../scripts/addNodeToTree";
import { TreeContext } from "../../Context/TreeContext";
import { useContext } from "react";
export default function ListNode(props) {
  const stateTree = useContext(TreeContext);

  function addNodeToChild(child) {
    addNodeToTree(stateTree, child, child.value.key);
  }
  const rootChild = stateTree.tree.child?.map((child) => (
    <h1 onClick={() => addNodeToChild(child)}>{child.value.key}</h1>
  ));

  console.log(props);
  return (
    <div>
      {rootChild}
      list
    </div>
  );
}
