import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './containers/Inicio';
import Session from './containers/Session';
import Principal from './containers/Principal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project" element={<Inicio />} />
        <Route path="/login" element={<Session />} />
        <Route path="/central" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default App;