import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <Main input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
             />
    </div>
  );
}

export default App;
