import React from 'react';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from ".components/navbar.component"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container"> 
        <br/>
        <Route path="/"> {ExerciseList} </Route>
        <Route path="/edit/:id"> {EditExercise} </Route>
        <Route path="/create"> {UpdateExercise} </Route>
        <Route path="/user"> {CreateUser} </Route>

      </div>
    </Router>
  );
}

export default App;
