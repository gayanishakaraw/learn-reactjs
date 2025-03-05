import './App.css';
import Main from './components/main/main';
import useApi from './customHooks/useApi';

function Application() {
  const todos = useApi("https://jsonplaceholder.typicode.com/todos", null);
  console.log(todos);

  return (
    <div className="App">
      <Main count={10} name={"Gayan"}/>
      {
      todos?.data?.map((todo) => (
        <div>
          <span key={todo.id}>{todo.title}</span><br/>
        </div>
      ))}
    </div>
  );
}

export default Application;
