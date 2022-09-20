import React from 'react';
import './Dropdown.scss';

const Dropdown = ({ onMouseOut, onMouseOver, isHovering }) => {
  return (
    <div
      className={isHovering ? 'Dropdown' : 'Dropdown hide'}
      onMouseOut={onMouseOut}
    >
      <ul className="main-cat" onMouseOver={onMouseOver}>
        <li>
          <div className="main-cat-name">ZINWOOS Items</div>
          <div className="sub-cat">
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="main-cat-name">ZINWOOS Goods</div>
          <div className="sub-cat">
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="main-cat-name">ZINWOOS time</div>
          <div className="sub-cat">
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
