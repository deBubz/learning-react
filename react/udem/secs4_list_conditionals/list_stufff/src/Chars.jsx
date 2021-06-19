import React from 'react'

const Chars = (props) => {
    const style = {
        display: "inline",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        margin: "1px solid black" ,
        backgroundColor: (props.odd) ? "pink" : "teal",
    }

    return (
        <div style={style}>
            {props.c}
        </div>
    )
}

export default Chars
