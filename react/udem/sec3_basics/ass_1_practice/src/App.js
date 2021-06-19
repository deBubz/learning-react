import "./App.css";
import UserInput from "./components/userInput/UserInput";
import UserOutput from "./components/userOutput/UserOutput";
import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const changeUsername = (e) => setUsername(e.target.value);

  return (
    <div className="App">
      <UserInput change={changeUsername} />
      <UserOutput p1={username} />
    </div>
  );
};

export default App;
