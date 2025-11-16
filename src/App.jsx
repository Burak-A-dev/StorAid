import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Subscribe from './components/sections/Subscribe';
import Footer from './components/sections/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Subscribe/>
      <Footer />
    </Router>
  );
}

export default App;
