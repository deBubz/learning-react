import React from 'react';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />

        <br/>
        <span>Learn </span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </header>
    </div>
  );
}

export default App;
