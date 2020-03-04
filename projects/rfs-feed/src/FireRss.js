import React from 'react';
import Parser from 'rss-parser';

let parser = new Parser();
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

class FireRss extends React.Component {
    constructor() {
        super();
        this.state = {
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
        const reports = this.state.fireItems.map( item => 
            <li><a href={item.guid}> <strong>{item.title}</strong></a></li>)

        return (
          <div>
              <ul>
                  <label>FireFeed</label>
                  {reports}
              </ul>
          </div>  
        );
    }
}

export default FireRss;