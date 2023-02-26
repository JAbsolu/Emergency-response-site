import './dashboard.css'
import LogoTitle from './images/logo-title.jpg'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return(
        <div className='text-zone'>
            <h1 className='text'> Welcome </h1>

            <img src={LogoTitle} alt='Meder Logo' />

            <h2>Get Medical Emergency at your fingertips</h2>
            
            <div className='btn-link'>
                <Link to="/dashboard/contact" className="flat-button">
                    Emergency Request
                </Link>
                <Link to="/track" className="flat-button">
                    Track Request
                </Link>
                {/* <Link to="/health" className="flat-button">
                    First Aid Kit
                </Link> */}
            </div>
            
        </div>
    )
}

