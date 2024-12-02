import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/home');
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <p><strong>MetaIT s.r.o.</strong></p>
            <p>Address: Lidická 31, 602 00 Brno, Czech Republic</p>
            <p>Email: info@metait.cz</p>
            <p>Phone: +420 533 534 950</p>
            <button onClick={goBack}>Back to Home</button>
        </div>
    );
};

export default ContactUs;
