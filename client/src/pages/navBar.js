import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">EthioTourism</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </div>
        <div className="nav-links">
            <Link to="/#">Login</Link>
        </div>
    </nav>
  );
}

export default Navbar;
