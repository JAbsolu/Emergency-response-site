import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h1>MedER</h1>
                <p className='copyright'>&copy; 2023 MedER</p>
            </div>
            <div className='socialLinks-div'>
                <h2>Stay in touch</h2>
                <a href='wwww.facebook.com' target="_blank" rel='noreferrer'>
                    Facebook
                </a>
                <br/>
                <a href='wwww.instagram.com' target="_blank" rel='noreferrer'>
                    Instagram
                </a>
            </div>
            <div>
                <h2>Get in touch</h2>
                <a href="mailto:info@medER.com" target="_blank" rel='noreferrer'>Info@MedER.com</a>
                <br />
                <Link className='contact' to="../../../dashboard/components/Contact">
                    Contact us
                </Link>
            </div>
         </div>
    );
};

export default Footer;