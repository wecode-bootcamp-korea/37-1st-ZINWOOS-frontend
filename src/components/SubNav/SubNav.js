import React from 'react';
import { useState } from 'react';
import './SubNav.scss';
const SubNav = ({ main_category_name, sub_category_name }) => {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <nav className="SubNav">
      <span>Home /</span>
      <div
        onMouseEnter={() => setNavOpen(!navOpen)}
        onMouseLeave={() => setNavOpen(!navOpen)}
        className={!navOpen ? 'nav-link active' : 'nav-link'}
      >
        <button className="fixed-link">{main_category_name}</button>
        <form className="active-links">
          <button className="active-link">ZINWOOS Time</button>
          <button className="active-link">ZINWOOS Goods</button>
          <button className="active-link">ZINWOOS Item</button>
        </form>
      </div>
      <span>/ {sub_category_name}</span>
    </nav>
  );
};

export default SubNav;
