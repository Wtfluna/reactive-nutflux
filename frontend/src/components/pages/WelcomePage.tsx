export default function WelcomePage() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <a href="/">
              <img src="./assets/NUTFLUX.png" alt="logo" />
            </a>
          </div>
          <div className="navbar__links">
            <ul>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="welcome__banner">
        <div className="intro">
          <h1 className="intro__h">Unlimited movies, TV shows and much more.</h1>
          <p className="intro__p">
            Ready to watch? Enter your email to create an account.
          </p>
          <div className="intro__form">
            <input type="email" placeholder="Email address" name="email" />
            <button role="button" type="submit">
              <a href="/register">Sign Up</a>
            </button>
          </div>
        </div>

        <div className="screens">
          <div>
            <h1 className="screens__h">Watch everywhere</h1>
            <p className="screens__p">
              Stream your favorite movies and TV shows <br /> on your phone,
              tablet, laptop, and TV.
            </p>
          </div>
          <div>
            <img
              className="screens__img"
              src="./assets/screens.png"
              alt="phone, pc and tablet screens"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
