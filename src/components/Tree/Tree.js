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
      element: new Element("div")
    };
    const treeRoot = new TreeClass(root);
    stateTree.setTree(treeRoot);
  }, []);

  function add() {
    addNodeToTree(stateTree);
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
      {"  "}de
      <button
        onClick={() => {
          // stateTree.tree.printTree();
          console.log(stateTree.tree);
        }}
      >
        print tree
      </button>
      <List tree={stateTree.tree} list={stateTree.tree.child} />
    </div>
  );
}
