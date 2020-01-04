import React from 'react';
import testJson from './Data';

// TODO
// Fetch API

class DataReader extends React.Component {  
    constructor() {
        super();
        this.state = {
            timeData: [],
            ipData: [],
        }
    }

    // fetch API, API call after the component DataReader is mount?
    componentDidMount() {
        // the fuck is this mess
        fetch('https://worldtimeapi.org/api/ip')
        .then(res => res.json())
        .then((data) => {
            // bind json data to components state
            this.setState({timeData: data});
            console.log("TimeData:" , this.state.timeData);
        })
        
        fetch('https://jsonip.com/')
        .then(res => res.json())
        .then((data) => {
            this.setState({ipData: data});
            console.log("IPData:" , this.state.ipData);
        })
    }

    render() {
        var timezone = this.state.timeData.timezone;
        var date = new Date(this.state.timeData.utc_datetime);

        return (
            <div className='DataReader'>
                <p>Based your public ip: {this.state.ipData.ip}</p>
                <p>The current date at {timezone} is {date.getFullYear()}</p>

                
            </div>
        )
    }
}

export default DataReader;


