import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateCheatsheet from "./components/create-Cheatsheet.component";
import EditCheatsheet from "./components/edit-Cheatsheet.component";
import ShowCheatsheet from "./components/show-Cheatsheet.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Cheatsheet App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Cheatsheets</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Cheatsheet</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={ShowCheatsheet} />
          <Route path="/edit/:id" component={EditCheatsheet} />
          <Route path="/create" component={CreateCheatsheet} />
        </div>
      </Router>
      
    );
  }
}

export default App;
