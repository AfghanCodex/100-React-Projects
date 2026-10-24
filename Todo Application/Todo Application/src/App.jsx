import { useState } from "react";
import Results from "./Results";
import Forms from "./Forms";

function App() {
  const [todo, setTodo] = useState("");
  const [GetTodo, setGetToto] = useState([]);

  //   if (todo.length) return <h2>There is no todo !</h2>;
  function handleTodo(e) {
    e.preventDefault();

    setGetToto(() => [...GetTodo, todo]);

    // Empty input Tag After once it full
    setTodo("");
  }

  return (
    <div className="container">
      <h1>Todo Application </h1>

      <Forms handleTodo={handleTodo} todo={todo} setTodo={setTodo} />
      <Results GetTodo={GetTodo} setGetToto={setGetToto} />
    </div>
  );
}

export default App;
