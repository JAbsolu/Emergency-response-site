import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from 'react-icons/fa';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin, FiPinterest} from 'react-icons/fi';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer className="text-white py-3">
                <Row>
                  <Col xs={12} md={6}>
                    <Nav className="ml-auto">
                        <Nav.Link href="/" className="mx-2"><b>MedER</b></Nav.Link>
                        <Nav.Link href="/faqs" target="_blank" className="mx-2">FAQs</Nav.Link>
                        <Nav.Link href="/about" className="mx-2">About</Nav.Link>
                        <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
                        <Nav.Link href="#terms" className="mx-2">Terms</Nav.Link>
                     </Nav>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="d-flex justify-content-end">
                      <a href="facebook.com" target="_blank" className="text-white mx-2"><FiFacebook size={22} /></a>
                      <a href="twitter.com" target="_blank" className="text-white mx-2"><FiTwitter size={22} /></a>
                      <a href="instagram.com" target="_blank" className="text-white mx-2"><FiInstagram size={22} /></a>
                      <a href="linkedin.com" target="_blank"  className="text-white mx-2"><FiLinkedin size={22} /></a>

                    </div>
                  </Col>
                </Row>
            </footer>
        </div>
    );
};

export default Footer;