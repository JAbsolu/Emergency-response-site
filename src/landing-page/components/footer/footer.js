import { Nav } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from 'react-icons/fa';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin, FiPinterest} from 'react-icons/fi';

const Footer = () => {
    return (
        <div>
            <footer className="text-white py-3">
                    <Nav className="ml-auto mr-0 pr-0">
                        <Nav.Link href="/" className="mx-2"><b>MedER</b></Nav.Link>
                        <Nav.Link href="/faqs" target="_blank" className="mx-2">FAQs</Nav.Link>
                        <Nav.Link href="/about" className="mx-2">About</Nav.Link>
                        <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
                        <Nav.Link href="#terms" className="mx-2">Terms</Nav.Link>
                        {/* <div>
                          <a href="facebook.com" target="_blank" className="text-white mx-2"><FiFacebook size={20} /></a>
                          <a href="twitter.com" target="_blank" className="text-white mx-2"><FiTwitter size={20} /></a>
                          <a href="instagram.com" target="_blank" className="text-white mx-2"><FiInstagram size={20} /></a>
                          <a href="linkedin.com" target="_blank"  className="text-white mx-2"><FiLinkedin size={20} /></a>
                        </div> */}
                     </Nav>                     
            </footer>
        </div>
    );
};

export default Footer;