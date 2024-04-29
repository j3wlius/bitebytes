import React, { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import SearchBox from './Components/SearchBox';
import { FaArrowUp } from 'react-icons/fa6';

function App() {
  const [isScroll, setIscroll] = useState(false);

  function windowScroll() {
    setIscroll(window.scrollY >= 150);
  }

  useEffect(() => {
    window.addEventListener('scroll', windowScroll);
    return () => window.removeEventListener('scroll', windowScroll);
  }, []);

  return (
    <>
      <Header />
      <SearchBox />
      <Main />
      <Footer />
      <a
        href="#top"
        className={`back-top-btn ${isScroll ? 'active' : ''}`}
        aria-label="Back to top"
      >
        <FaArrowUp className="icon" />
      </a>
    </>
  );
}

export default App;
