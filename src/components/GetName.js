import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/App.css";

const GetName = ({ name, setName }) => {
 const nameHandler = (e) => {
  setName(e.target.value);
  if (e.target.value.length > 15) {
   setName((e.target.value = "Legend"));
  }
 };

 const preventDefault = (e) => {
  e.preventDefault();
 };

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 1 }}
   className="name"
  >
   <div className="name-container">
    <div className="logo">
     <span>{name}'s</span>
     <p>Todo App</p>
    </div>
    <form onChange={preventDefault}>
     <h1>Hi There, Enter your Name!</h1>
     <input type="text" autoFocus onChange={nameHandler} placeholder={name} />
     <Link to="/App" href="#Todo" className="continue" maxLength="12">
      Continue
     </Link>
    </form>
   </div>
  </motion.div>
 );
};

export default GetName;
