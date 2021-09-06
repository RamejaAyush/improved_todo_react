import "../styles/TodoList.css";
import Todo from "./Todo";
import { useState, useEffect } from "react";

const TodoList = ({
 inputText,
 setInputText,
 todos,
 setTodos,
 filteredTodos,
 searchTerm,
}) => {
 const [comp, setComp] = useState({});
 const [unComp, setUnComp] = useState({});

 const compOrUnComp = () => {
  setComp(todos.filter((todo) => todo.completed === true));
  setUnComp(todos.filter((todo) => todo.completed === false));
 };

 useEffect(() => {
  compOrUnComp();
 }, [todos]);

 return (
  <>
   <div className="todo-container">
    <div className="todo-list">
     {filteredTodos
      .filter((todo) => {
       if (searchTerm === "") {
        return todo;
       } else if (todo.text.toLowerCase().includes(searchTerm.toLowerCase())) {
        return todo;
       }
      })
      .map((todo) => {
       return (
        <Todo
         todo={todo}
         todos={todos}
         setTodos={setTodos}
         text={todo.text}
         key={todo.id}
         inputText={inputText}
         setInputText={setInputText}
        />
       );
      })}
    </div>
    <div className="result">
     <h1>
      {todos.length} Total, {comp.length} Completed, {unComp.length} Uncompleted
      Tasks
     </h1>
    </div>
   </div>
  </>
 );
};

export default TodoList;
