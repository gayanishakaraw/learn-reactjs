import { useSelector } from "react-redux";

function Todos() {
  const counterFromStore = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Todos</h1>
      <h1>Here is the store counter { counterFromStore }</h1>
    </div>
  );
}

export default Todos;
