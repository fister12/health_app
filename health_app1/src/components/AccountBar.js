import React, { useState } from 'react';
import { Button, Segment } from 'semantic-ui-react';

function AccountBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Segment>
      <div className={`profile-picture ${isOpen ? 'open' : ''}`} onClick={toggleBar}>
        {/* Your profile picture here */}
      </div>
      <div className="options">
        <div className="option">Account</div>
        <div className="option">Settings</div>
      </div>
    </Segment>
  );
}

export default AccountBar;
