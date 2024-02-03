import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/home" className="navbar-brand">
          <FaHome />
          Home
        </Link>

        <Link to="/registration" className="navbar-brand">
          <FaUserPlus />
          User Registration Form
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
