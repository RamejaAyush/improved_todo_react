import "../styles/Todo.css";
import { useState } from "react";

const TodoTask = ({ inputText, setInputText, text, todo, todos, setTodos }) => {
 const completeHandler = () => {
  setTodos(
   todos.map((item) => {
    if (item.id === todo.id) {
     return {
      ...item,
      completed: !item.completed,
     };
    }
    return item;
   })
  );
 };

 const deleteHandler = () => {
  setTodos(todos.filter((item) => item.id !== todo.id));
 };

 const [clicked, setClicked] = useState(false);
 let [editedText, setEditedText] = useState("");

 const enableInput = () => {
  if (clicked) {
   setClicked(false);
  } else {
   setClicked(true);
  }
 };

 const editHandler = (e) => {
  setEditedText(e.target.value);
  text = editedText;
 };

 return (
  <>
   <div className="todo">
    <div className="todo-task">
     <p className={`${todo.completed ? "completed" : ""}`}>
      {clicked ? editedText : text}
     </p>
     <button className="edit-btn" onClick={enableInput}>
      <i class="fas fa-edit"></i>
     </button>
     <button className="complete-btn" onClick={completeHandler}>
      <i className="fas fa-check"></i>
     </button>
     <button className="trash-btn" onClick={deleteHandler}>
      <i className="fas fa-trash"></i>
     </button>
    </div>
   </div>
   {clicked ? (
    <div className="edit-todo">
     <input
      type="text"
      autoFocus
      onChange={editHandler}
      placeholder="Enter new value or go back to previous"
     />
    </div>
   ) : (
    ""
   )}
  </>
 );
};

export default TodoTask;
