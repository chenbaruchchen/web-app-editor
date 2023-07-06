import TreeClass from "../../Class/TreeClass";
import { TreeContext } from "../../Context/TreeContext";
import { useContext, useEffect } from "react";
import Element from "../../Class/Element";
import addNodeToTree from "../../scripts/addNodeToTree";
export default function Tree() {
  const { tree, setTree } = useContext(TreeContext);
  useEffect(() => {
    const element = new Element();

    const treeTemp = new TreeClass(element);

    setTree(treeTemp);
  }, []);

  function addToRoot() {
    const element = new Element();
    // addNodeToTree(tree.root.key, element, { tree, setTree });
    tree.insert(1, 11, "AC");
    console.log(tree);
  }
  console.log(tree);
  return (
    <div className="w-1/5">
      <button onClick={addToRoot} className="px-2 py-2">
        add to root
      </button>
    </div>
  );
}
