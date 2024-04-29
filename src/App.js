import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import SearchBox from './Components/SearchBox';
import { FaArrowUp } from 'react-icons/fa6';

function App() {
  return (
    <>
      <Header />
      <SearchBox />
      <Main />
      <Footer />
      <a href="#top" className="back-top-btn" aria-label="Back to top">
        <FaArrowUp className="icon" />
      </a>
    </>
  );
}

export default App;
