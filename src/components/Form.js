import "../styles/Form.css";

const Form = ({
 inputText,
 setInputText,
 todos,
 setTodos,
 setStatus,
 setSearchTerm,
 searchTerm,
}) => {
 // functions
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

 const statusHandler = (e) => {
  setStatus(e.target.value);
 };

 const searchHandler = (e) => {
  setSearchTerm(e.target.value);
  console.log(searchTerm);
 };

 return (
  <div className="formContainer">
   <div className="search-cont">
    <input
     type="text"
     placeholder="Search Your Task..."
     onChange={searchHandler}
     className="search"
    />
   </div>
   <form>
    <div className="input-sub">
     <input
      type="text"
      onChange={inputTextHandler}
      className="todo-input"
      placeholder="Add a Task"
      value={inputText}
     />
     <button
      className="todo-button"
      onClick={submitHandler}
      disabled={!inputText}
      type="submit"
     >
      Add
     </button>
    </div>
    <div className="select">
     <select onChange={statusHandler} name="todos" className="filter-todo">
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
