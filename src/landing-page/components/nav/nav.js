import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" className="mb-4 justify-content-space-between" >
                <Navbar.Brand href='/' className="mr-4"><b>MedER</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/" className="mx-2">Home</Nav.Link>
                    <Nav.Link href="#aboutUs" className="mx-2">About us</Nav.Link>
                    <Nav.Link href="#testimonials" className="mx-2">Testimonials</Nav.Link>
                    <Nav.Link href="#contact" className="mx-2">Contact us</Nav.Link>
                    <Nav.Link href="/login" className="mx-2">Log in</Nav.Link>
                    <Nav.Link href="/register" className="mx-2">Register</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;