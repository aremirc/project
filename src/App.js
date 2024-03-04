import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Main from './componentes/Main';
import Login from './componentes/Login';
import Footer from './componentes/Footer';
import { useState } from 'react';

function App() {

  const [showLogIn, setShowLogIn] = useState(false)

  const logIn = () => {
    setShowLogIn(true);
  }

  const hideLogIn = () => {
    setShowLogIn(false);
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const verify = () => {
    setIsLoggedIn(true);
  }

  const logOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <div className="App__principal">
        <Header logIn={logIn} isLoggedIn={isLoggedIn} logOut={logOut} />
        <main className='App__main'>
          { showLogIn ? (isLoggedIn ? ( <Main />) : (<Login verify={verify} hideLogIn={hideLogIn} />)) : (<Home />) }
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
