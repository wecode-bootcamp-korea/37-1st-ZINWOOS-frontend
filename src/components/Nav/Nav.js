import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Login from '../Login/Login';
import Dropdown from './Dropdown';
import './Nav.scss';

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const getLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

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
              src="https://github.com/ChoiRamsey/zinwoos/blob/main/LOGO_ZINWOOS.png?raw=true"
              alt="ZINWOOS"
            />
          </Link>
        </div>
        <div className="nav-menu">
          <div>BRAND</div>
          <Link to="/product_list/all/0">
            <div onMouseOver={onMouseOver}>SHOP</div>
          </Link>
          <div>GALLERY</div>
          <div>SUPPORT</div>
        </div>
        <div className="nav-control">
          {localStorage.getItem('token') ? (
            <div className="nav-right-tab" onClick={getLogout}>
              Log out
            </div>
          ) : (
            <div className="nav-right-tab" onClick={modalLogin}>
              Login & SignUp
            </div>
          )}
          <Link to="#">
            <div className="nav-right-tab">관심상품</div>
          </Link>
          <Link to="#">
            <div className="nav-right-tab">주문배송</div>
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

      {showLogin && (
        <Login setShowLogin={setShowLogin} modalLogin={modalLogin} />
      )}
    </div>
  );
};

export default Nav;
