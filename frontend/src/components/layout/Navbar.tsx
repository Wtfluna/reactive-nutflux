import { useEffect, useState } from "react";
import { authTokenKey, watchLocalStorage } from "../../localStorage";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(authTokenKey)
  );

  // Behavior

  useEffect(() => {
    watchLocalStorage(() => {
      const token = localStorage.getItem(authTokenKey);
      setToken(token);
    });
  }, [setToken]);

  const logout = () => {
    localStorage.clear();
    setToken(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownContent = (
    <div className={`navbar__dropdown ${isDropdownOpen ? "open" : ""}`}>
      <a href="">Change profile</a>
      <a href="">Settings</a>
      <a href="/" onClick={logout}>
        Logout
      </a>
    </div>
  );

  // Render
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          {token && (
            <a href="/home">
              <img src="./assets/NUTFLUX.png" alt="logo" />
            </a>
          )}
          {!token && (
            <a href="/">
              <img src="./assets/NUTFLUX.png" alt="logo" />
            </a>
          )}
        </div>

        <div className="navbar__links">
          <ul>
            {token && (
              <>
              <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/series">Series</a>
                </li>
                <li>
                  <a href="/movies">Movies</a>
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
