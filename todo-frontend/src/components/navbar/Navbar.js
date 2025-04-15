import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Navlogo from '../../assets/nav-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/auth">
          <img
            src={Navlogo}
            alt="To Do List"
            className="nav-icon"
          />
          Todo App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

