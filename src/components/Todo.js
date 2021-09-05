import "../styles/Todo.css";
import { motion } from "framer-motion";
import Form from "./Form";

const Todo = ({ name }) => {
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
   <Form />
  </motion.div>
 );
};

export default Todo;
