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
        <div className="navbar-logo"> <a href="./Welcome.tsx"><img src="./assets/NUTFLUX.png" alt="logo" /></a></div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="./LogIn.tsx">Login</a></li>
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
