import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [subTask, setSubTask] = useState([]);
  const subTaskRef = useRef();
  const taskRef = useRef();
  const [task, setTask] = useState([]);
  let currentRef = [taskRef, subTaskRef];

  return (
    <div className="App">
      <input type="text" ref={currentRef[0]} />
      <button onClick={() => setTask([...task, taskRef.current.value])}>
        Add List
      </button>
      <button
        onClick={() => setSubTask([...subTask, subTaskRef.current.value])}
      >
        Add todo
      </button>
      <div>
        {task.map(function (taskRef, index) {
          return <button>{taskRef}</button>;
        })}
      </div>
      <div>
        {subTask.map(function (todoRef, index) {
          return <li>{todoRef}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
