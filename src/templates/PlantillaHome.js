import '../estilos/PlantillaHome.css';
import Header from '../organisms/Header';
import Main from '../organisms/Main';
import Footer from '../organisms/Footer';

function PlantillaHome() {
    return (
        <div className='plantillaHome'>
            <Header />
            {/* <Header logIn={logIn} isLoggedIn={isLoggedIn} logOut={logOut} /> */}
            <main className='plantillaHome__main'>
                {/* {showLogIn ? (isLoggedIn ? (<Main />) : (<Login verify={verify} hideLogIn={hideLogIn} />)) : (<Home />)} */}
            </main>
            <Footer />
        </div>
    )
}

export default PlantillaHome;