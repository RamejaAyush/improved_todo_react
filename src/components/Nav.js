import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import GetName from "./GetName";
import "../styles/Nav.css";
import App from "./App";

const Nav = () => {
 const [name, setName] = useState("Your");
 return (
  <Router>
   <nav>
    <h1>{name}'s Todo App</h1>
    <div className="navLinks">
     <Link to="/">Configure Todo App</Link>
     <a href="#asd" className="cat">
      Source Code
     </a>
    </div>
   </nav>
   <AnimatePresence>
    <Switch>
     <Route exact path="/">
      <GetName name={name} setName={setName} />
     </Route>
     <Route path="/App">
      <App name={name} setName={setName} />
     </Route>
    </Switch>
   </AnimatePresence>
  </Router>
 );
};

export default Nav;
