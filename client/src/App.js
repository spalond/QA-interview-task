import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import ButtonInteraction from './components/ButtonInteraction';
import SwitchInteraction from './components/SwitchInteraction';
import SelectInteraction from './components/SelectInteraction';
import FormPage from "./components/FormPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/button-interaction" element={<ButtonInteraction />} />
                <Route path="/switch-interaction" element={<SwitchInteraction />} />
                <Route path="/select-interaction" element={<SelectInteraction />} />
                <Route path="/form" element={<FormPage />} />
                <Route exact path="/" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;
