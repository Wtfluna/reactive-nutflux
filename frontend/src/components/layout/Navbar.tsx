function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          {" "}
          <a href="./Welcome.tsx">
            <img src="./assets/NUTFLUX.png" alt="logo" />
          </a>
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <a href="./LogIn.tsx">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
