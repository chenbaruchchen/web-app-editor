/// if the node is container -
///then it have place in map
///else -its just a child

class MapTree {
  constructor(root) {
    this.value = { root } || {};
    this.addNode = (node) => {
      console.log("addNode", node);
      this.value[node.key] = node;
    };
  }
}

export default MapTree;
