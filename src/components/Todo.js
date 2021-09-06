import "../styles/Todo.css";

const TodoTask = ({ text, todo, todos, setTodos }) => {
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
 return (
  <div className="todo">
   <div className="todo-task">
    <p className={`${todo.completed ? "completed" : ""}`}>{text}</p>
    <button className="complete-btn" onClick={completeHandler}>
     <i className="fas fa-check"></i>
    </button>
    <button className="trash-btn" onClick={deleteHandler}>
     <i className="fas fa-trash"></i>
    </button>
   </div>
  </div>
 );
};

export default TodoTask;
