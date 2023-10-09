import React, { useState } from 'react';
import './AccountBar.css';

function AccountBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`account-bar ${isOpen ? 'open' : ''}`}>
      <div className="profile-picture" onClick={toggleBar}>
        {/* Your profile picture here */}
      </div>
      <div className="options">
        {/* Add links and icons for account options */}
        <div className="option">Account</div>
        <div className="option">Settings</div>
        {/* Add more options as needed */}
      </div>
    </div>
  );
}

export default AccountBar;
