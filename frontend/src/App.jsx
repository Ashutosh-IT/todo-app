import React, {useState} from "react"
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import { Typography } from "@mui/material";

const App = () => {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <h1>TODO APP</h1>
      <AddTodo setTodos={setTodos}/>
      <br />
      <ShowTodo setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
