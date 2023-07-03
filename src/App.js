import Add from "./components/Add/Add";
import Display from "./components/Display/Display";
export default function App(params) {
  return (
    <div className="flex ">
      <Tree />
      <Display />

      <Add />
    </div>
  );
}

function Tree(params) {
  return <div className="w-1/5">Tree</div>;
}
