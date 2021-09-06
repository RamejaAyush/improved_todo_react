import "../styles/MainApp.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Form from "./Form";
import TodoList from "./TodoList";

const App = () => {
 const [inputText, setInputText] = useState("");
 const [todos, setTodos] = useState([]);
 const [status, setStatus] = useState("all");
 const [filteredTodos, setFilterTodos] = useState([]);

 useEffect(() => {
  switch (status) {
   case "completed":
    setFilterTodos(todos.filter((todo) => todo.completed === true));
    break;
   case "uncomplted":
    setFilterTodos(todos.filter((todo) => todo.completed === false));
    break;
   default:
    setFilterTodos(todos);
    break;
  }
 }, [status, todos]);

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 0.75 }}
   className="todo"
   id="Todo"
  >
   <Form
    inputText={inputText}
    setInputText={setInputText}
    todos={todos}
    setTodos={setTodos}
    setStatus={setStatus}
   />
   <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
  </motion.div>
 );
};

export default App;
