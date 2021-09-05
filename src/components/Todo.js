import "../styles/Todo.css";

const Todo = ({ name }) => {
 return (
  <div className="todo" id="Todo">
   <header>
    <h1>Have a Good Day {name}! :)</h1>
   </header>
  </div>
 );
};

export default Todo;
