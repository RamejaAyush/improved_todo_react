import "../styles/Form.css";

const Form = () => {
 return (
  <div className="formContainer">
   <form>
    <div className="input-sub">
     <input type="text" className="todo-input" placeholder="Add a Task" />
     <button className="todo-button" type="submit">
      Add
     </button>
    </div>
    <div className="select">
     <select name="todos" className="filter-todo">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
     </select>
    </div>
   </form>
  </div>
 );
};

export default Form;
