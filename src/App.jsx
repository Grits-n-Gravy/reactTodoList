import React, { useState, useRef } from "react";
import "./app.css";
function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const taskref = useRef("");
  const [taskList, seTaskList] = useState([]);
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      task: taskList,
    };
    setList([...list, newTodo]);
    setInput("");
    console.log(newTodo);
  };

  return (
    <div>
      <h2>Current List : </h2>
      <input
        ref={taskref}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add list</button>
      <button onClick={() => seTaskList([...taskList, input])}>Add Todo</button>
      <div>
        {list.map(function (todo, index) {
          return (
            <div>
              <button key={todo.id}>{todo.todo}</button>
            </div>
          );
        })}
        <div>
          {taskList.map(function (task, index) {
            return (
              <div>
                <li>{task}</li>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
