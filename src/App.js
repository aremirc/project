import './App.css';
import Central from './pages/Central';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/central" element={<Central />} />
      </Routes>
    </Router>
  );
}

export default App;