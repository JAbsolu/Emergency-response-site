import './dashboard.css'
import { Navbar } from './Nav'
import { HomePage } from './Home'
// import { ContactPage } from './Contact'


const DashboardPage = () => {
    return (
        <div>
    <Navbar/>
            <HomePage/>
            {/* <ContactPage/> */}
            {/* // <Footer/> */}
        </div>
    );
}

export default DashboardPage;
