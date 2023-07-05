export default function addNodeToMap(node, mapContext) {
  const newMap = { ...mapContext.map };
  console.log(node, mapContext);
  newMap.addNode(node);
  mapContext.setMap(newMap);
}
