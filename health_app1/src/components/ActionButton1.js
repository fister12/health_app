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
          <p>
            Course 1: <a href="#">Link to Course 1</a>
          </p>
          <p>
            Course 2: <a href="#">Link to Course 2</a>
          </p>
          <p>
            Course 3: <a href="#">Link to Course 3</a>
          </p>
          <button onClick={closePane}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ActionButton1;

