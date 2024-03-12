import '../estilos/PlantillaCentral.css';
import Header from '../organisms/Header';
import Main from '../organisms/Main';
import Footer from '../organisms/Footer';

function PlantillaCentral() {
    return (
        <div className='plantillaCentral'>
            <Header />
            <main className='plantillaCentral__main'>
                <Main />
            </main>
            <Footer />
        </div>
    )
}

export default PlantillaCentral;