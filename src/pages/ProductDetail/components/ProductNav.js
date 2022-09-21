import React from 'react';
import { useState } from 'react';
import './ProductNav.scss';
const ProductNav = () => {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <nav className="ProductNav">
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

export default ProductNav;
