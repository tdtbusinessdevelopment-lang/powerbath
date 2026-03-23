import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import '../styles/landingpage.css';
import powerbathLogo from '../assets/images/powerbathlogo.png';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Products</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
      </div>
      <div className="header-center">
        <div className="logo-container">
          <img src={powerbathLogo} alt="Powerbath Logo" className="logo" />
        </div>
      </div>
      <div className="header-right">
        <button className="icon-button"><Search size={22} /></button>
        <button className="icon-button"><ShoppingCart size={22} /></button>
        <button className="login-button">LOGIN</button>
      </div>
    </header>
  );
}
