import React from 'react'
import { Link } from "react-router-dom";
import './navbar.scss';

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-row">
        <div className="nav-logo">
          <Link className="links" to="#">
            SpringBloom
          </Link>
        </div>
        <div className="nav-controls">
          <Link className="links" to="signin">Sign In</Link>
          <Link className="signup" to="signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;