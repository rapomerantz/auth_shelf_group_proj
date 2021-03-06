import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/view">
            View Items
          </Link>
        </li>
        <li>
          <Link to="/add">
            Add an Item
          </Link>
        </li>
        <li>
          <Link to="/total">
            Total Items
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
