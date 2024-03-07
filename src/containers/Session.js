import Login from './pages/Login';
import { useState } from 'react';

function Session() {
    
    const [showLogIn, setShowLogIn] = useState(false)

    const logIn = () => {
        setShowLogIn(true);
    }

    const hideLogIn = () => {
        setShowLogIn(false);
    }

    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    // const verify = () => {
    //     setIsLoggedIn(true);
    // }

    // const logOut = () => {
    //     setIsLoggedIn(false);
    // }
    
    sessionStorage.setItem("myKey", false);
    
    // localStorage.clear();

    return (
        <div className='session'>
            <Login />
        </div>
    )
}

export default Session;