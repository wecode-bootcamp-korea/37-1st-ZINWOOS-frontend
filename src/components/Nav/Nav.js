import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Login from '../Login/Login';
import Dropdown from './Dropdown';
import './Nav.scss';

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [selectTab, setSelectTab] = useState('');

  const [showLogin, setShowLogin] = useState(false);
  const onMouseOver = () => {
    setIsHovering(true);
  };
  const onMouseOut = () => {
    setIsHovering(false);
  };
  const modalLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="Nav">
      <div className="container">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="https://cdn.pixabay.com/photo/2022/03/01/09/35/iceland-poppy-7040946_960_720.jpg"
              alt="ZINWOOS"
            />
          </Link>
        </div>
        <div className="nav-menu">
          <div onMouseOver={() => {}}>지누스</div>
          <div onMouseOver={onMouseOver}>Shop</div>
          <div onMouseOver={() => {}}>모르겠다</div>
          <div>SUPPORT</div>
        </div>
        <div className="nav-control">
          <div onClick={modalLogin}>Login & SignUp</div>

          <div>주문배송</div>
          <div>장바구니</div>
        </div>
      </div>
      {/* {isHovering ? (
        <Dropdown onMouseOut={onMouseOut} onMouseOver={onMouseOver} />
      ) : null} */}
      <Dropdown
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        isHovering={isHovering}
      />
      {showLogin ? <Login modalLogin={modalLogin} /> : null}
    </div>
  );
};

export default Nav;
