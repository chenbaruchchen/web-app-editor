import React from "react";

function WraperForRecursiveComponent(map) {
  const root = map.map.value?.root;
  // map = map.map.value;
  return (
    <div>
      <h1 className="py-10 text-xl bg-clack">
        the father of all is{root?.key}
      </h1>
      {root?.children.map((MapNode) => (
        <RecursiveComponent map={map} MapNode={MapNode} />
      ))}
      {/* {root?.children.map((MapNode) => (
        <RecursiveComponent MapNode={MapNode} map={map.map.value} />
      ))} */}
      {/* {root.children.map(child)=><RecursiveComponent MapNode={child} />} */}
    </div>
  );
}
function Container(MapNode, map) {
  return (
    <div>
      father of{" "}
      {MapNode.children.map((mapNode) => (
        <RecursiveComponent map={map} MapNode={mapNode} />
      ))}
    </div>
  );
}
const RecursiveComponent = ({ MapNode, map }) => {
  if (MapNode.children)
    return (
      <div>
        father of
        {/* {MapNode.children.map((MapNode)=><RecursiveComponent MapNode={MapNode} map={map}/>)} */}
      </div>
    );
  // console.log(map?.map.value,MapNode.key);
  // if (map?.map.value[MapNode.key]) {
  //   console.log(8);
  // }

  // return <Container map={map} MapNode={MapNode} />;
  return <div>child no container </div>;
};

export default WraperForRecursiveComponent;
