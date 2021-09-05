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

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 0.75 }}
   className="name"
  >
   <div className="form-container">
    <div className="logo">
     <span>{name}'s</span>
     <p>Todo App</p>
    </div>
    <form>
     <h1>Hi There, Enter your Name!</h1>
     <input type="text" autoFocus onChange={nameHandler} placeholder={name} />
     <Link
      to="/Todo"
      href="#Todo"
      type="submit"
      className="continue"
      maxLength="12"
     >
      Continue
     </Link>
    </form>
   </div>
  </motion.div>
 );
};

export default GetName;
