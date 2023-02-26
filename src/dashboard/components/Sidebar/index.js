import './index.scss'
import logo from '../../images/logomeder.jpg'
import logoTitle from '../../images/medtext-2.jpg'
import { NavLink, Link } from 'react-router-dom'
// import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {
    return (
        <div className='nav-bar'>

            <Link className="logo" to="/">
                <img src={logo} alt="Logo" />
                <img className='sub-logo' src={logoTitle} alt="Logo Title" />
            </Link>

            <nav>
                <NavLink exact='true' activeclassname='active' to='/dashboard/home'>
                    <FontAwesomeIcon icon={faHome} color='#050a30' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='about-link' to='/account'>
                    <FontAwesomeIcon icon={faUser} color='#050a30' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='contact-link' to='/dashboard/ contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#050a30' />
                </NavLink>

            </nav>

            <ul>
                <li>
                    <a target='_blank' rel='noreferer' href='' />
                    <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' className='anchor-icon' />
                </li>

                <li>
                    <a target='_blank' rel='noreferer' href='' />
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' className='anchor-icon' />
                </li>
            </ul>

        </div>
    )
}

export default Sidebar