import { FastResponseText } from '../texts/landing-text';
import { LocationDetectionText } from '../texts/landing-text';
import { MissionStatement } from '../texts/landing-text';
import patientImg from "../../images/patient.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import TestimonySlider from '../testimony/testimony';
import ContactForm from '../contact/contact';

const MainSection = () => {
    return (
        <div>
            <Container className='main-component'> 
                <Row className='features-row'>
                    <Col md={6}>
                        <FastResponseText />
                    </Col>
                    <Col md={6}>
                        <LocationDetectionText />
                    </Col>
                </Row>
                <TestimonySlider/>
                <Row className='aboutUs-row-custom'>
                    <Col md={9} className="d-flex align-items-end justify-content-end">
                        <MissionStatement/>
                    </Col>
                    <Col md={3}>
                        <img src={patientImg} alt="Emergency Patient" />
                    </Col>
                </Row>
                <ContactForm />
            </Container>
        </div>
    );
};


export default MainSection;