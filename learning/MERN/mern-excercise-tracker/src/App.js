import React from 'react';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExList from "./components/exercise-list.component";
import ExEdit from "./components/exercise-edit.component";
import ExCreate from "./components/exercise-create.component";
import UserCreate from "./components/user-create.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExList} />
        <Route path="/edit/:id" component={ExEdit}/>
        <Route path="/create" component={ExCreate} />
        <Route path="/user" component={UserCreate} />
      </div>
    </Router>
  );
}

export default App;
