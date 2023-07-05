import shortid from "shortid";

class MapNode {
  constructor(value) {
    this.key = shortid.generate();
    this.value = value;
    this.children = [];

    /// will update - base on element type
    this.isContainer = false;
    ////

    this.addChild = (node) => {
      this.children.push(node);
    };
  }
}

export default MapNode;
