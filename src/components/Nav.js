import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import GetName from "./GetName";
import "../styles/Nav.css";
import Todo from "./Todo";

const Nav = () => {
 const [name, setName] = useState("Your");
 return (
  <Router>
   <nav>
    <h1>{name}'s Todo App</h1>
    <div className="navLinks">
     <Link to="/" href="#asd">
      Configure Todo App
     </Link>
     <a href="#asd" className="cat">
      Source Code
     </a>
    </div>
   </nav>

   <Switch>
    <Route exact path="/">
     <GetName name={name} setName={setName} />
    </Route>
    <Route path="/Todo">
     <Todo name={name} setName={setName} />
    </Route>
   </Switch>
  </Router>
 );
};

export default Nav;
