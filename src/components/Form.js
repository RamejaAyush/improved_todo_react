import "../styles/Form.css";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
 const submitHandler = (e) => {
  e.preventDefault();
  setTodos([
   ...todos,
   { text: inputText, completed: false, id: Math.random() * 100 },
  ]);
  setInputText("");
 };
 const inputTextHandler = (e) => {
  setInputText(e.target.value);
 };
 return (
  <div className="formContainer">
   <form>
    <div className="input-sub">
     <input
      type="text"
      onChange={inputTextHandler}
      className="todo-input"
      placeholder="Add a Task"
      value={inputText}
     />
     <button className="todo-button" onClick={submitHandler} type="submit">
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
