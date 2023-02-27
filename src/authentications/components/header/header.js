import { MobileMenu } from "../mobileMenu/mobileNav";
import { Nav } from "../navbar/navbar";
import logo from '../../../landing-page/images/logo.png';
export const Header = () => {
    return (
        <div className="header">
            <img 
                src={logo}
                alt="logo"
                className="logo web-logo"
                width="150rem"
            />
            <h2 className='mobile-logo'>MedER</h2>
            <MobileMenu />
            <Nav/>
        </div>
    )
};