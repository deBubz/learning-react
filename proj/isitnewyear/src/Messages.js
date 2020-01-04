import React from 'react';
import DataReader from './DataReader';
import data from './Data';
import { unmountComponentAtNode } from 'react-dom';


/** Read JSON then prints result
 * 
 */


class Messages extends React.Component {
    render() {
        return <div className='Messages'>
                <p className='Messages-p'> I think this is working</p>
                <p> Step one Hello world again</p>
            </div>
    }
}

export default Messages