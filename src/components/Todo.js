import "../styles/TodoTask.css";

const TodoTask = () => {
 return (
  <div className="todo">
   <p>hola</p>
   <button className="complete-btn">
    <i className="fas fa-check"></i>
   </button>
   <button className="trash-btn">
    <i className="fas fa-trash"></i>
   </button>
  </div>
 );
};

export default TodoTask;
