import ScrollToTopButton from "./BackToTop";

function Footer() {
  // Render
  return (
    <div className="footer">
      <p className="footer__title">
        Made by Adeline & Clara <br /> During our training @ BeCode
      </p>
      <p className="footer_paragraph">
        {/* <a href="https://www.facebook.com/profile.php?id=100091743767098">
          <img src="./assets/facebook.png" alt="facebook_logo" />
        </a>
        <a href="https://twitter.com/netflix">
          <img src="./assets/twitter.png" alt="twitter_logo" />
        </a> */}
        <ScrollToTopButton />
      </p>
    </div>
  );
}

export default Footer;
