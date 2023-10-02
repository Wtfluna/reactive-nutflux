
function Navbar() {
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
          <li><a href="">Search</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="">My list</a></li>
            <li><a href="/series">Series</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="">Discover by genre</a></li>
            <li><a href="">Profile</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;