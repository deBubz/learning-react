import React from 'react';
import { unmountComponentAtNode } from 'react-dom';


/** Read JSON then prints result
 * 
 */


class Messages extends React.Component {
    render() {
        return <div className='Messages'>
                <p className='Messages-p'> I think this is working</p>
                <p> Step 1 <b>Hello world</b> again</p>
            </div>
    }
}

export default Messages