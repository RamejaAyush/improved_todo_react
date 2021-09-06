import "../styles/MainApp.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Form from "./Form";
import TodoList from "./TodoList";

const App = ({ name }) => {
 const [inputText, setInputText] = useState("");
 const [todos, setTodos] = useState([]);
 const [status, setStatus] = useState("all");
 const [filteredTodos, setFilterTodos] = useState([]);

 // useeffect
 useEffect(() => {
  filterHandler();
 }, [todos, status]);

 //  functions
 const filterHandler = () => {
  switch (status) {
   case "completed":
    setFilterTodos(todos.filter((todo) => todo.completed === true));
    break;
   case "uncompleted":
    setFilterTodos(todos.filter((todo) => todo.completed === false));
    break;
   default:
    setFilterTodos(todos);
    break;
  }
 };
 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 0.75 }}
   className="todo"
   id="Todo"
  >
   <div className="header-line">
    <h1>Have a productive Day {name} :)</h1>
   </div>
   <Form
    inputText={inputText}
    setInputText={setInputText}
    todos={todos}
    setTodos={setTodos}
    setStatus={setStatus}
   />
   <TodoList
    name={name}
    todos={todos}
    setTodos={setTodos}
    filteredTodos={filteredTodos}
   />
  </motion.div>
 );
};

export default App;
