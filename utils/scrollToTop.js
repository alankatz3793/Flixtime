const scrollToTop = (isSmooth = false) => () => {
  try {
    // trying to use new API
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isSmooth ? 'smooth' : 'auto',
    });
  } catch (error) {
    // just a fallback for older browsers
    window.scrollTo(0, 0);
  }
};

export default scrollToTop;
