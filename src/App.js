import "./App.css";
import Main from "./components/main/main";
import useApi from "./customHooks/useApi";
import { Routes, Route } from "react-router";
import Comments from "./pages/comments/comments";
import Todos from "./pages/todos/todos";

function Application() {
  const todos = useApi("https://jsonplaceholder.typicode.com/todos", null);
  console.log(todos);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main count={10} name={"Root Page"} />} />
        <Route path="/home" element={<Main count={5} name={"Home Page"} />} />
        <Route path="/todos" element={<Todos/>} />
        <Route path="/comments" element={<Comments />} />
        <Route path="*" element={<Main count={10} name={"Gayan"} />} />
      </Routes>

      {/* {
      todos?.data?.map((todo) => (
        <div>
          <span key={todo.id}>{todo.title}</span><br/>
        </div>
      ))} */}
    </div>
  );
}

export default Application;
