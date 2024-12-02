import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']); // List of items
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const [draggedItemIndex, setDraggedItemIndex] = useState(null); // Track dragged item index
  const navigate = useNavigate(); // Use navigate to redirect after logout

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Handle drag start event to track the dragged item
  const handleDragStart = (e, index) => {
    setDraggedItemIndex(index);
  };

  // Handle drop event to reorder items
  const handleDrop = (e, dropIndex) => {
    e.preventDefault();

    if (draggedItemIndex !== null && draggedItemIndex !== dropIndex) {
      // Remove the item from its original position
      const updatedItems = [...items];
      const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);

      // Insert the dragged item at the new position
      updatedItems.splice(dropIndex, 0, draggedItem);

      // Update the items state
      setItems(updatedItems);
    }
  };

  // Handle dynamic item addition
  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  // Handle delete all items
  const deleteAllItems = () => {
    setItems([]); // Clear all items
  };

  // Modal toggle
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
      <div className="homepage">
        <h1>Welcome, Admin!</h1>

        <div className="content">
          <h2>Here is your dashboard</h2>

          <Link to="/form">
            <button>Go to Form Page</button>
          </Link>
          <Link to="/button-interaction">
            <button>Go to Button Interaction</button>
          </Link>
          <Link to="/switch-interaction">
            <button>Go to CheckBox Interaction</button>
          </Link>
          <Link to="/select-interaction">
            <button>Go to Select Interaction</button>
          </Link>
          {/* Open Modal Button */}
          <button onClick={openModal}>Open Modal</button>

          {/* Add New Item and Delete All Items Button */}
          <div className="button-container">
            <button onClick={addItem}>Add New Item</button>
            <button onClick={deleteAllItems} className="delete-all-button">Delete All Items</button>
          </div>

          {/* Dynamic List */}
          <div className="drag-and-drop">
            <h3>Drag and Drop Items</h3>
            <div className="drag-items">
              {items.map((item, index) => (
                  <div
                      key={index}
                      draggable
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                      onDragOver={(e) => e.preventDefault()}
                      className="drag-item"
                  >
                    {item}
                  </div>
              ))}
            </div>
          </div>

          <Link to="/contact">
            <button>Go to Contact Us</button>
          </Link>

          {/* Logout Button */}
          <button onClick={handleLogout}>Logout</button>
        </div>

        {/* Modal */}
        {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <h2>This is a modal popup!</h2>
                <button onClick={closeModal}>Close Modal</button>
              </div>
            </div>
        )}
      </div>
  );
};

export default HomePage;
