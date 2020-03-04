import React from 'react';
import FireRss from './FireRss'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> This is working? </p>
          <div>
            <p>Heres your FireData</p>
            <FireRss />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
