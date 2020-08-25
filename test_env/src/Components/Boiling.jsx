import React from 'react';

const Boiling = props => {
    const { temp } = props;


    return(
        <>
            {(temp >= 100) ?
                <p>ONO RUYN</p>
                :
                <p>water no BOIL</p>
            }
        </>
    );
};

export default Boiling;