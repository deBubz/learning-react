import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Validation from "./Validation";
import Chars from "./Chars";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const onChange = (e) => {
    setText(e.target.value);
    setCount(e.target.value.length);
  };

  const renderChars = () => {
    return text.split("").map((e, i) => <Chars odd={i % 2} c={e} key={i} />);
  };

  return (
    <div className="App">
      <input onChange={onChange} />
      <p>word count: {count}</p>
      <Validation count={count} />
      {renderChars()}
    </div>
  );
}

export default App;
