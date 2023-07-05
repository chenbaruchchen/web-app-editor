export default function addNodeToMap(node, child, mapContext) {
  console.log(mapContext);

  const newMap = { ...mapContext.map };
  node.addChild(node);
  mapContext.setMap(newMap);
}
