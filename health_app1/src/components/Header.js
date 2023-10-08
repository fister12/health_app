import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Robotics Club</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/kits">Kits</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
