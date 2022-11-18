import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";

const Navigation = () => {
  const [menuState, setMenuState] = useState(false);

  const closeMenu = () => {
    setMenuState(false);
  };

  return (
    <div className="navbar">
      <div className="empty-nav"></div>
      <NavLink className="logo" to="/">
        Logo
      </NavLink>
      <Menu width={310} right isOpen={menuState}>
        <span>menu</span>
        <NavLink to="/" onClick={() => closeMenu()}>
          Home
        </NavLink>
        <NavLink onClick={() => closeMenu()}>Sign in</NavLink>
        <NavLink className="sign-up" onClick={() => closeMenu()}>
          Start a project
        </NavLink>
      </Menu>
      <nav>
        <ul>
          <NavLink>Sign in</NavLink>
          <NavLink className="sign-up">Start a project</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
