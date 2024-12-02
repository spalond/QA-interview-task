import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectInteractions.css';

const SelectInteraction = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/home');
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            <h2>Select Interaction</h2>
            <select onChange={handleSelect} value={selectedOption}>
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            {selectedOption && <p>You selected: {selectedOption}</p>}
            <button onClick={goBack}>Back to Home</button>
        </div>
    );
};

export default SelectInteraction;
