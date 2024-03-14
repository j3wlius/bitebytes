import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SearchBox from "./Components/SearchBox";
import BackToTop from "./Components/BackToTop";

function App() {
  const [isScroll, setIscroll] = useState(false);

  function windowScroll() {
    setIscroll(window.scrollY >= 150);
  }

  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    return () => window.removeEventListener("scroll", windowScroll);
  }, []);

  return (
    <>
      <Header />
      <SearchBox />
      <Main />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
