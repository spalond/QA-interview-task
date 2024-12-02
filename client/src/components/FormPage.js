import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './FormPage.css';

const FormPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [savedData, setSavedData] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Initialize navigate

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Validate email
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message) {
            newErrors.message = 'Message is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setSavedData([...savedData, formData]);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
    };

    // Handle back button click
    const handleBack = () => {
        navigate('/home'); // Navigate back to the home page
    };

    return (
        <div className="form-page">
            <h1>Submit Your Information</h1>

            {/* Back Button */}
            <button onClick={handleBack} className="back-button">Back to Home</button>

            <form onSubmit={handleFormSubmit} className="form">
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="input-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button type="submit">Save Information</button>
            </form>

            <div className="saved-data">
                <h2>Saved Data</h2>
                {savedData.length > 0 ? (
                    savedData.map((data, index) => (
                        <div key={index} className="saved-item">
                            <p><strong>Name:</strong> {data.name}</p>
                            <p><strong>Email:</strong> {data.email}</p>
                            <p><strong>Message:</strong> {data.message}</p>
                        </div>
                    ))
                ) : (
                    <p>No data saved yet.</p>
                )}
            </div>
        </div>
    );
};

export default FormPage;
