import "../styles/Todo.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Form from "./Form";
// import TodoTask from "./Todo";

const App = ({ name }) => {
 const [inputName, setInputName] = useState("Task");
 const [todos, setTodos] = useState([]);
 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 0.75 }}
   className="todo"
   id="Todo"
  >
   <header>
    <h1>Have a Productive Day {name}! :)</h1>
   </header>
   <Form
    inputName={inputName}
    setInputName={setInputName}
    todos={todos}
    setTodos={setTodos}
   />
  </motion.div>
 );
};

export default App;
