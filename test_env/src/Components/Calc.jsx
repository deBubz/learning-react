import React from 'react'
import Boiling from './Boiling'
import TempIn from './TempIn'

const toCelc = f => (f-32) * 5/9;
const toF = c => (c * 9/5) + 32;

const tryConv = (temp, convert) => {
    const input = parseFloat(temp);

    if(Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) /1000;
    return rounded.toString();
}

// dont quite understand this wholely but its sick
function Calc(props) {
    // local state
    const [ state, setState ] = React.useState({
        temp: '',
        scale: 'c',
    });

    // changing state
    const handleCelChange = (temp) => {
        setState({temp, scale:'c'})
    }

    const handleFahrChange = (temp) => {
        setState({temp, scale:'f'})
    }

    // thing
    const scale = state.scale;
    const temp = state.temp;
    const celc = scale === 'f' ?
        tryConv(temp, toCelc)
        :
        temp;
    const fahr = scale === 'c' ?
        tryConv(temp, toF)
        :
        temp;
    
    // render
    return (
        <div>
            <TempIn scale="c" 
                temp={celc}
                onTempChange={handleCelChange}/>

            <TempIn scale="f" 
                temp={fahr}
                onTempChange={handleFahrChange}/>

            <Boiling temp={parseFloat(celc)} />
        </div>
    );

};

export default Calc;