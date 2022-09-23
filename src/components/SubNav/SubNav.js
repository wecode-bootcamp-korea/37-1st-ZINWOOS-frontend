import React from 'react';
import { useState } from 'react';
import './SubNav.scss';
const SubNav = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [location, setLocation] = useState('ZINWOOS Time');

  const goToList = e => {
    e.preventDefault();
    setLocation(e.target.textContent);
  };

  return (
    <nav className="SubNav">
      <span>Home / </span>
      <div
        onMouseEnter={() => setNavOpen(!navOpen)}
        onMouseLeave={() => setNavOpen(!navOpen)}
        className={!navOpen ? 'nav-link active' : 'nav-link'}
      >
        <button className="fixed-link">{location}</button>
        <form onClick={goToList} className="active-links">
          <button className="active-link">ZINWOOS Time</button>
          <button className="active-link">ZINWOOS Goods</button>
          <button className="active-link">ZINWOOS Item</button>
        </form>
      </div>
    </nav>
  );
};

export default SubNav;
