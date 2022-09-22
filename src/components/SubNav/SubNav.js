import React from 'react';
import { useState } from 'react';
import './SubNav.scss';
const SubNav = () => {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <nav className="SubNav">
      <span>Home / </span>
      <div
        onMouseEnter={() => setNavOpen(!navOpen)}
        onMouseLeave={() => setNavOpen(!navOpen)}
        className={!navOpen ? 'nav-link active' : 'nav-link'}
      >
        <button>ZINWOOS Time</button>
        <div>
          <button>ZINWOOS Goods</button>
          <button>ZINWOOS Item</button>
        </div>
      </div>
      <span> / Tea Time</span>
    </nav>
  );
};

export default SubNav;
