import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const todoRef = useRef();

  return (
    <div className="App">
      <input type="text" ref={todoRef} />
      <button onClick={() => setTodoList([...todoList, todoRef.current.value])}>
        Add todo
      </button>
      <div>
        {todoList.map(function (todoRef, index) {
          return <li>{todoRef}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
