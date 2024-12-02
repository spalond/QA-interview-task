import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SwitchInteraction.css';

const SwitchInteraction = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/home');
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <h2>Switch Interaction</h2>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                Toggle me
            </label>
            {isChecked && <p>The switch is ON!</p>}
            {!isChecked && <p>The switch is OFF!</p>}
            <button onClick={goBack}>Back to Home</button>
        </div>
    );
};

export default SwitchInteraction;
