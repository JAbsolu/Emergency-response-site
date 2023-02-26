import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Handle form submission
      alert('Form submitted successfully!');
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const { firstName, lastName, email, message } = formData;

  return (
    <Container id='contact'>
        <Row>
            <Col md={6} className="contact-col1">
                <h2>Get in<span className='text-red'>contact</span> with us</h2>
                <p>
                    Fill out this form to write us a quick message,
                    We will get back to you within the next few hours.
                    If you have an emergency, please log in to your acount 
                    for a fast response.
                </p>
            </Col>
            <Col md={6} className="contact-col2">
                <Form onSubmit={handleSubmit} target="#" method='post'>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control className='form-control-custom' type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control className='form-control-custom' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control className='form-control-custom form-control-custom-textarea' as="textarea" rows={3} placeholder="Enter message" />
                    </Form.Group>

                    <Button className='sendform' variant="primary" type="submit" onSubmit={handleSubmit}>
                      Send
                    </Button>
                </Form>
                <br/>
                <span className='text-light login-link'>Already a member? <a href="../../authorizationPages/login/login.js" className='text-red contact-form-links'>Log in</a></span>
                <span className='text-light register-link'>New to MedER? <a href="../../authorizationPages/register/register.js" className='text-red contact-form-links'>Register</a></span>
            </Col>
        </Row>
    </Container>
  );
}

export default ContactForm;
