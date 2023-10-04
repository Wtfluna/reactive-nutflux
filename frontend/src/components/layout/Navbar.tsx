import { useEffect, useState } from "react";
import { authTokenKey, watchLocalStorage } from "../../localStorage";

function Navbar() {
  // State to track whether the dropdown is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(authTokenKey)
  );

  // Behavior

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // JSX for the dropdown content
  const dropdownContent = (
    <div className={`navbar__dropdown ${isDropdownOpen ? "open" : ""}`}>
      <a href="">Change profile</a>
      <a href="">Settings</a>
      <a href="">Logout</a>
    </div>
  );

  // Login/logout
  useEffect(() => {
    watchLocalStorage(() => {
      const token = localStorage.getItem(authTokenKey);
      setToken(token);
    });
  }, [setToken]);

  // Function to log out and clear local storage
  const logout = () => {
    localStorage.removeItem(authTokenKey);
    setToken(null);
  };

  // Render
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          {" "}
          <a href="/home">
            <img src="./assets/NUTFLUX.png" alt="logo" />
          </a>
        </div>

        <div className="navbar__links">
          <ul>
            {token && (
              <>
                <li>
                  <a href="">Search</a>
                </li>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="">My list</a>
                </li>
                <li>
                  <a href="/series">Series</a>
                </li>
                <li>
                  <a href="/movies">Movies</a>
                </li>
                <li>
                  <a href="#">Discover by genre</a>
                </li>
              </>
            )}
            {token && (
              <>
                <li>
                  <a href="#" onClick={toggleDropdown}>
                    Profile
                  </a>
                  {dropdownContent}
                </li>
                <li>
                  <a href="/" onClick={logout}>
                    Logout
                  </a>
                </li>
              </>
            )}
            {!token && (
              <li>
                <a href="/login">Login</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
