import Element from "../../Class/Element";
import MapNode from "../../Class/MapNode";
import Map from "../../Class/Map";
import addNodeToMap from "../../scripts/addNodeToMap";
import addChildToNode from "../../scripts/addChildToNode";

import { MapContext } from "../../Context/MapContext";
import { useContext, useEffect } from "react";

import TreeUi from "./treeUi";
export default function TreeMap() {
  const mapContext = useContext(MapContext);
  useEffect(() => {
    mapContext.setMap(createMap());
  }, []);

  let containers = [];
  for (let node in mapContext.map.value) {
    containers.push(mapContext.map.value[node]);
    console.log(node);
  }
  console.log(mapContext.map);
  return (
    <div className="w-1/5">
      TreeMap
      <button className="p-2" onClick={() => console.log(mapContext.map)}>
        print map
      </button>
      <button
        className="p-2"
        onClick={() => addNodeToMap(createNode(), mapContext)}
      >
        addNodeToMap
      </button>
      {containers.map((node) => (
        <button onClick={() => addChildToNode(node, createNode(), mapContext)}>
          {node.key}- node.addChild
        </button>
      ))}
      <TreeUi map={mapContext.map} />
    </div>
  );
}

function createMap() {
  const element = new Element("div");
  const mapNode = new MapNode(element);

  const map = new Map(mapNode);

  return map;
}

function createNode() {
  const element = new Element("div");
  const mapNode = new MapNode(element);
  return mapNode;
}
