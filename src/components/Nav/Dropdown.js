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
              <li>호로록</li>
              <li>후루룩</li>
              <li>휘리릭</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="main-cat-name">ZINWOOS GOODS</div>
          <div className="sub-cat">
            <ul>
              <li>제주도</li>
              <li>조하</li>
              <li>후루룩</li>
            </ul>
          </div>
        </li>
        <li>
          <div className="main-cat-name">ZINWOOS TIME</div>
          <div className="sub-cat">
            <ul>
              <li>시간은</li>
              <li>금이야</li>
              <li>후루룩</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
