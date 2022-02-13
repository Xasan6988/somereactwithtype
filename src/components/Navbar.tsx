import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="navbar navbar-dark navbar-expand--lg bg-primary p-2">
    <div className="navbar-brand">Note App</div>
    <ul className="navbar-nav me-auto d-flex flex-row">
        <li className="nav-item active p-2">
          <NavLink to="/" className="nav-link">Главная</NavLink>
          </li>
        <li className="nav-item active p-2">
          <NavLink to="about" className="nav-link">Информация</NavLink>
          </li>
    </ul>
  </nav>
);

export default Navbar;
