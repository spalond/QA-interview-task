import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonInteraction.css';

const ButtonInteraction = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/home');
    };

    const [color, setColor] = useState('blue');
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setColor(color === 'blue' ? 'green' : 'blue');
        setMessage('Button has been pressed');
    };

    return (
        <div>
            <h2>Button Interaction</h2>
            <button
                style={{ backgroundColor: color }}
                onClick={handleClick}
            >
                Press Me
            </button>
            {message && <p>{message}</p>}
            <button onClick={goBack}>Back to Home</button>
        </div>
    );
};

export default ButtonInteraction;
