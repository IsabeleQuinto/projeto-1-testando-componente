import React, { useState } from 'react';

const Button = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn)
    }

    return (
        <button onClick={handleClick}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    )
}


export default Button