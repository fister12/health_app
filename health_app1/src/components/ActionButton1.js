import React, { useState } from 'react';
import { Button, Segment } from 'semantic-ui-react';

function ActionButton1() {
  const [isOpen, setIsOpen] = useState(false);

  const openPane = () => {
    setIsOpen(true);
  };

  const closePane = () => {
    setIsOpen(false);
  };

  return (
    <Segment>
      <Button primary onClick={openPane}>Select Kit/Course</Button>
      {isOpen && (
        <Segment>
          <p>Course 1: <a href="#">Link to Course 1</a></p>
          <Button onClick={closePane}>Close</Button>
        </Segment>
      )}
    </Segment>
  );
}

export default ActionButton1;
