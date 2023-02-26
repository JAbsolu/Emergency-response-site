import './index.scss'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Home from '../Home'
import About from '../About'


const Layout = () => {
    return(
        <div className='App'>
            <Sidebar />
            <div className='nav'>
                <Navbar />
                <Home />
            </div>
            {/* <div className='content'>
                <About />
            </div> */}
            {/* <div>
                <Home />
            </div> */}
        </div>
    )
}

export default Layout