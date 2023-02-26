


import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './index.scss'


const Navbar = () => {
  return (
    <div className='nav-bar2'>
        <nav className='navbar'>
            <a href='http://localhost:3000/dashboard/about'> About </a>
            <a href='#'> Emergency </a>
            <a href='#'> Logout </a>
        </nav>
    </div>
  )
}

export default Navbar