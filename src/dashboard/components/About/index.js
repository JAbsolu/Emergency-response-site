import './index.scss'
import Emergency1 from '../../images/emergency3.jpg'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className='text-zone'>
                <h2 id='about'> About Us </h2>
                <div className='about-us'>
                    <div className='image'>
                        <img src={Emergency1} />
                    </div>
                    <div className='about-msg'>
                        <p> <span class='text-red' >Med-ER</span> is a network of emergency response providers with professional
                            experience that provide urgent medical emergency care when you need
                            it the most. \n
                            We ensure you and your loved ones get access to proper medical care
                            when it matters the most with our swift response to your needs. 
                        </p>
                        <Link to='/dashboard' className='flat-button'> Get Started </Link>
                    </div>
                </div>
            </div>                   
        </>
    )
}

export default About