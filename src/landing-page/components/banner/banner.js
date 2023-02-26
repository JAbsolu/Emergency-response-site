import { WelcomeText } from '../texts/landing-text';
import illustration from '../../images/illustration.png';
import { Container, Row, Col } from 'react-bootstrap';


const Banner = () => {
    return (
        <Container className='BannerContainer'>
            <Row className="d-flex align-items-end justify-content-end banner-row">
                <Col md={7}>
                    <h1 className='h1 fw-bold'>Welcome to <span className="text-red">MedER</span></h1>
                    <WelcomeText />
                    <div className="design-bar"></div>
                </Col>
                <Col md={5}>
                    <img src={illustration} alt="emergency" id='banner-img'/>
                </Col>
            </Row>
        </Container>
    )
};

export default Banner;