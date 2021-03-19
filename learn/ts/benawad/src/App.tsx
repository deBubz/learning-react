import React from 'react';
import TextField from './components/TextField';

/* 
  Working on props, hooks, render props
*/

/* react.FC ts functional component type */

const App: React.FC = () => {
  return (
  <div>
    <TextField handleChange={e => alert("hey")}/>
  </div>
  )
}

export default App;
