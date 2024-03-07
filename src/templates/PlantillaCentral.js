import '../estilos/PlantillaCentral.css';
import Header from '../organisms/Header';
import Main from '../organisms/Main';
import Footer from '../organisms/Footer';

function PlantillaCentral() {
    return (
        <div className='plantillaCentral'>
            <Header />
            {/* <Header logIn={logIn} isLoggedIn={isLoggedIn} logOut={logOut} /> */}
            <main className='plantillaCentral__main'>
                <Main />
                {/* {showLogIn ? (isLoggedIn ? (<Main />) : (<Login verify={verify} hideLogIn={hideLogIn} />)) : (<Home />)} */}
            </main>
            <Footer />
        </div>
    )
}

export default PlantillaCentral;