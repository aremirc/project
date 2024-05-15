import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './containers/Inicio';
import Session from './containers/Session';
import Principal from './containers/Principal';
import Allies from './pages/Allies';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Search from './pages/Search';
import NoPage from './pages/NoPage';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/project" element={<Inicio />} />
        <Route path="/login" element={<Session />} />
        <Route path="/services" element={<Principal />} />
        <Route path="/allies" element={< Allies />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;