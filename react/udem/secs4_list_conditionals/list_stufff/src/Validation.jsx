import React from 'react'

const Validation = (props) => {
    let valid = null

    if(props.count < 5) {
        valid = "too short"
    } else if( props.count > 10) {
        valid = "too strong"
    }

    return (
        <h3>{valid}</h3>
    )
}

export default Validation
