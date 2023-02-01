import './App.css';
import Header from './components/HeaderComponent/Header';
import Home from './components/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  return (
      <div className="App">
        <AnimatePresence>
          <Header />
          <Routes location={location} key={location.pathname}>
            <Route path ="/" element={<Home />} />
            <Route path ="/blog" element={<Aboutme />} />
            <Route path ="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
  );
}

export default App;
