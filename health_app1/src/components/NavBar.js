import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/kits">Kits</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;
