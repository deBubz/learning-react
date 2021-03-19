import React, { useState, useRef } from 'react'

interface Props {
    text?: String;
    handleChange: (event: React.ChangeEvent<HTMLInputElement> ) => void;
}


const TextField: React.FC<Props> = ({ handleChange }) => {
    const [count, setCount] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    


    return (
        <div>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}

export default TextField;