import React, { useState } from "react"


const Conditional = props => {
    const [ show, setShow ] = useState(false);
    const [ changeCss, setChangeCss ] = useState(false);

    const handleShow = () => {setShow(!show)}
    const handleChangeCss = () => setChangeCss(!changeCss); 

    const something = () => {
        if(show) return <div>
            <button onClick={handleChangeCss}>Butt</button>
            <p style={changeCss? {color: "red"} : {color: "blue"}}> 
                what color is this 
            </p>
        </div>

        return <></>
    }
    return(
        <>
            <h1>the hell is this</h1>
            <button onClick={handleShow}>Butt</button>
            
            {something()}
 
        </>
    )
}


export default Conditional