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
          <div>ZINWOOS</div>
          <div onMouseOver={onMouseOver}>Shop</div>
          <div>모르겠다</div>
          <div>SUPPORT</div>
        </div>
        <div className="nav-control">
          <div className="login-tab" onClick={modalLogin}>
            Login & SignUp
          </div>
          <Link to="#">
            <div className="ship-tab">주문배송</div>
          </Link>
          <Link to="/cart">
            <div>장바구니</div>
          </Link>
        </div>
      </div>

      <Dropdown
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        isHovering={isHovering}
      />
      {showLogin && <Login modalLogin={modalLogin} />}
    </div>
  );
};

export default Nav;
