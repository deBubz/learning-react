import React from 'react';
import Parser from 'rss-parser';

let parser = new Parser();
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

// parser.parseURL(CORS_PROXY + 'http://www.rfs.nsw.gov.au/feeds/majorIncidents.xml', (err, feed) => {
//     if (err) throw err;
//     console.log(feed.title);
//     storage = feed;
// })


            // let feed = await parser.parseURL(CORS_PROXY + 'http://www.rfs.nsw.gov.au/feeds/majorIncidents.xml', (err, feed) => {
class FireRss extends React.Component {
    constructor() {
        super();
        this.state = {
            yames: [
                "sekiro",
                "celeste",
                "factorio",
            ],
            fireItems: [],
        }
    }

    componentDidMount() {
        parser.parseURL(CORS_PROXY + 'http://www.rfs.nsw.gov.au/feeds/majorIncidents.xml', (err, feed) => {
            if (err) throw err;
            this.setState({fireItems: feed.items});
        })
    }

    render() {
        // what the fuck
        const items = this.state.yames.map(item => <li>{item.toString()}</li>);
        console.log("fucj me")
        console.log(this.state.fireItems);
        const reports = this.state.fireItems.map(item => 
        <li><a href={item.guid}>  <strong>{item.title}</strong> </a></li> )

        return (
            <div>
                <ul>
                    <label>Fire alert feed</label>
                    {reports}
                    {/* {this.parse()} */}
                </ul>
            </div>
        );
    }
}

export default FireRss; 