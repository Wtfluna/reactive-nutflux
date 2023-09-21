import { useState } from 'react';
import './navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">Logo</div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">My profile</a></li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
