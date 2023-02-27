import '../../styles/login.css';
import LoginForm from '../loginForm/form';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div id="login-layout">
            <div id="layout-first">
                <h1>MedER</h1>
            </div>
            <div className="layout-form">
                <Link className='links text-red' to="/">Back to home</Link>
                <LoginForm />
                <span>New to MedER? <Link className='links text-red' to="/register">Register</Link></span>
            </div>
        </div>
    );
};

export default Layout;