import '../landing-page/landing.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/umd/popper.min.js';
import Banner from './components/banner/banner';
import MainSection from './components/main/main';
import Footer from './components/footer/footer';
import Navigation from './components/nav/nav';

const LandingPage = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <MainSection/>
            <Footer/>
        </div>
    );
};

export default LandingPage;
