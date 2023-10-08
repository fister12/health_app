import React, { useState } from 'react';
import './ActionButton1.css';

function ActionButton1() {
  const [isOpen, setIsOpen] = useState(false);

  const openPane = () => {
    setIsOpen(true);
  };

  const closePane = () => {
    setIsOpen(false);
  };

  return (
    <div className="action-button">
      <button onClick={openPane}>Select Kit/Course</button>
      {isOpen && (
        <div className="selection-pane">
          {/* Add kit and course selection options here */}
          <button onClick={closePane}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ActionButton1;
