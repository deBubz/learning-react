import React from 'react';
import FireRss from './FireRss';
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p> Component working</p>

                    <div>
                        <p>Here be the RSS Feed</p>
                        < FireRss/>
                    </div>

                </header>
            </div>
        );
    }
}

export default App;