import React, { Component } from "react";
import "./App.css";

import Person from "./person/Person";

class App extends Component {
  // all of this is only for components
  // data
  state = {
    persons: [
      { name: "max", age: 3 },
      { name: "cheese", age: 10 },
      { name: "sticks", age: 20 },
    ],
  };

  mapPersons = () =>
    this.state.persons.map((e, i) => (
      <Person name={e.name} age={e.age} change={this.nameChange} key={i} />
    ));

  // clicky
  click = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 3 },
        { name: "cheese", age: 10 },
      ],
    });
  };

  nameChange = (e) => {
    this.setState({
      persons: [
        { name: "max", age: 3 },
        { name: e.target.value, age: 10 },
        { name: "sticks", age: 20 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
    };

    return (
      <div className="App">
        <button style={style} onClick={() => this.click("yuck")}>
          click me
        </button>
        {this.mapPersons()}
        <Person name="click" age="321" click={this.click.bind(this, "steve")} />
      </div>
    );
  }
}

export default App;
