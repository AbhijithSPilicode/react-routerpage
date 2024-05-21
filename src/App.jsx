import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { About } from './pages/About';

function App() {
  return (
    <>
      <nav>
        <ul className="nav-left">
          <li><Link to='/'>Kalvium</Link></li>
        </ul>
        <ul className="nav-right">
          <li><Link to='/Contacts'>Contacts</Link></li>
          <li><Link to='/About'>About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
