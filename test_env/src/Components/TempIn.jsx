import React from 'react'

const scalesName = {
    c: 'celc',
    f: 'farhebs'
};

function TempIn(props) {
    // deconstruct props
    const { scale, temp, onTempChange } = props;

    // keep this here??
    function handleChange(e) {
        onTempChange(e.target.value);
    };

    return (
        <div>
            <fieldset>
                <legend>Enter temp in {scalesName[scale]} </legend>
                <input value={temp} onChange={handleChange} />

                {/* no output yet */}

            </fieldset>
        </div>
    );

};

export default TempIn;

