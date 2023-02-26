import './dashboard.css'
import logo from './images/logomeder.jpg'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div className="header">
            <img 
                src={logo}
                alt="logo"
                className="logo"
                width="100rem"
            />
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/dashboard" className="login">Home</Link>
                    </li>

                    <li>
                        <Link to="/dashboard" className="register">Account</Link>
                    </li>

                    <li>
                        {/* <Link to="#contact" > */}
                        <a href="#contact" className="register">Contact</a>
                            {/* </Link> */}
                    </li>

                    <li>
                        <Link to="/dashboard" className="register">First Aid Kit</Link>
                    </li>

                    <li>
                        <li>
                        <Link to="/dashboard" className="register">Logout</Link>
                    </li>
                    </li>
                </ul>
            </nav>
        </div>
    )
}