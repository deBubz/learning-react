import React from 'react';
import Parser from 'rss-parser';

let parser = new Parser();
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';


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

    parse() {
        (async () => {
            let feed = await parser.parseURL(CORS_PROXY + 'http://www.rfs.nsw.gov.au/feeds/majorIncidents.xml', (err, feed) => {
                if (err) throw err;
                console.log(feed.title);
                console.log(feed.items[0].title)
                
                // feed.items.forEach( thing => {
                //     console.log(thing.item.title);
                //     console.log(thing.description);

                // return <li>{thing.title}</li>
                // });
            }) ;
            // console.log(feed.title);
            return <em>Loading</em>
        })();

    return <em>This worked??</em>
    }

    // componentDidMount() {
    //     fetch('')
    // }

    render() {
        const items = this.state.yames.map(item => <p>{item.toString()}</p>)

        return (
            <div>
                <ul>
                    <label>Its working??</label>
                    {/* {items} */}
                    {this.parse()}
                </ul>
            </div>
        );
    }
}

export default FireRss; 