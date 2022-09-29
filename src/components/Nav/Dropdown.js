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
          <div className="main-cat-name">ZINWOOS ITEMS</div>
          <div className="sub-cat">
            <ul>
              <li>CLOTHING & ACCESSORIES</li>
              <li>DIGITALS</li>
              <li>BOOKS</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="main-cat-name">ZINWOOS GOODS</div>
          <div className="sub-cat">
            <ul>
              <li>STICKERS</li>
              <li>PHOTO CARD</li>
              <li>PRINTED T-SHIRTS</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="main-cat-name border-none">ZINWOOS TIME</div>
          <div className="sub-cat third-sub-cat">
            <ul>
              <li>TIME</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
