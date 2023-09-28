export default function WelcomePage() {
  return (
    <div className="welcome__banner">
      <div className="intro">
        <h1 className="intro__h">Unlimited movies, TV shows and much more.</h1>
        <p className="intro__p">
          Ready to watch? Enter your email to create an account.
        </p>
        <div className="intro__form">
          <input type="email" placeholder="Email address" name="email" />
          <button role="button" type="submit">
            <a href="./SignUp.tsx">Sign Up</a>
            {/* TODO: changer a href par linkto */}
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
  );
}
