import shortid from "shortid";
import TreeClass from "../../Class/Tree";
import { useEffect, useState, useContext } from "react";
import Element from "../../Class/Element";
import addNodeToTree from "../../scripts/addNodeToTree";
import { TreeContext } from "../../Context/TreeContext";
import List from "./ListNode";
export default function Tree(params) {
  const stateTree = useContext(TreeContext);

  useEffect(() => {
    const root = {
      element: new Element("div"),
      key: shortid.generate()
    };
    const treeRoot = new TreeClass(root);
    stateTree.setTree(treeRoot);
  }, []);

  function add() {
    // const node = new TreeClass({
    //   element: new Element("div"),
    //   key: shortid.generate()
    // });
    // let newTree = { ...stateTree.tree };

    // newTree.addChidToNodeByKey(node, newTree.value.key, newTree);
    // stateTree.setTree(newTree);
    addNodeToTree(stateTree);
    console.log(stateTree.tree);
  }
  return (
    <div className="w-1/5">
      <button
        onClick={() => {
          add();
        }}
      >
        s
      </button>

      <List tree={stateTree.tree} list={stateTree.tree.child} />
    </div>
  );
}
