"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (item, sectionId) => {
    setActiveItem(item);

    // Scroll to the section with the given ID
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-nav navbar-dark" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container">
        <a className="navbar-brand text-white" href="#">Mufaddal Codes</a>
        <button className="navbar-toggler text-white p-1" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}>
              <a className="nav-link text-white" href="#" onClick={(e) => { e.preventDefault(); handleItemClick('home', 'home'); }}>
                Home
              </a>
            </li>
            <li className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}>
              <a className="nav-link text-white" href="#" onClick={(e) => { e.preventDefault(); handleItemClick('about', 'about'); }}>
                About
              </a>
            </li>
            <li className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}>
              <a className="nav-link text-white" href="#" onClick={(e) => { e.preventDefault(); handleItemClick('contact', 'contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
