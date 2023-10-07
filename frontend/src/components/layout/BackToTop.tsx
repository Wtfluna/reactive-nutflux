function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <button onClick={scrollToTop}>Back to top</button>;
}

export default ScrollToTopButton;
