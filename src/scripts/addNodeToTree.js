import shortid from "shortid";
import TreeClass from "../Class/Tree";
import Element from "../Class/Element";

///add to tree by add to the right node

export default function addNodeToTree(
  stateTree,
  node,
  key = stateTree.tree.key
) {
  node =
    node ||
    new TreeClass({
      element: new Element("div")
    });

  let newTree = { ...stateTree.tree };

  newTree.addChlidToNodeByKey(node, key || newTree.value.key, newTree);
  stateTree.setTree(newTree);
}
