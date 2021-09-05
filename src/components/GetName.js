import { useState } from "react";
import "../styles/App.css";

const GetName = () => {
 const [name, setName] = useState("Yours");

 const nameHandler = (e) => {
  setName(e.target.value);
  if (e.target.value.length > 15) {
   setName((e.target.value = "Legend"));
  }
 };

 return (
  <div className="name">
   <div className="form-container">
    <div className="logo">
     <span>{name}'s</span>
     <p>Todo App</p>
    </div>
    <form>
     <h1>Hi There, Enter your Name!</h1>
     <input type="text" onChange={nameHandler} placeholder={name} />
     <button type="submit" className="continue" maxLength="12">
      Continue
     </button>
    </form>
   </div>
  </div>
 );
};

export default GetName;
