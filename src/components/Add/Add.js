import { useState } from "react";
import ChoseElement from "./ChoseElement";
import EditElement from "./EditElement";

export default function Add(params) {
  const [elementChosen, setElementChosen] = useState(null);
  return (
    <div className="w-1/5">
      {!elementChosen ? (
        <ChoseElement setElementChosen={setElementChosen} />
      ) : (
        <EditElement
          elementChosen={elementChosen}
          setElementChosen={setElementChosen}
        />
      )}
    </div>
  );
}
