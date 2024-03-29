import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './containers/Inicio';
import Session from './containers/Session';
import Principal from './containers/Principal';
import PlantillaAllies from './templates/PlantillaAllies';
import PlantillaClients from './templates/PlantillaClients';
import PlantillaContact from './templates/PlantillaContact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project" element={<Inicio />} />
        <Route path="/login" element={<Session />} />
        <Route path="/central" element={<Principal />} />
        <Route path="/allies" element={< PlantillaAllies />} />
        <Route path="/clients" element={<PlantillaClients />} />
        <Route path="/contact" element={<PlantillaContact />} />
      </Routes>
    </Router>
  );
}

export default App;