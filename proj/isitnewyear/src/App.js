import React from 'react';
import Messages from './Messages'
import DataReader from './DataReader'
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Change 2020 to a variable */}
        <h1>Is it <em>2020</em> yet?</h1> 
        
        < Messages/>
        < DataReader/>
      </header>
    </div>
  );
}

export default App;
