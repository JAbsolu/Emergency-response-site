import '../../styles/login.scss';
import LoginForm from '../loginForm/form';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div id="login-layout">
            <div id="layout-first">
                <h1>MedER</h1>
\            </div>
            <div id="layout-form">
                <Link to="../../">Back to home</Link>
                <LoginForm />
                <span>New to MedER? <Link to="../userAuthorization/register">Register</Link></span>
            </div>
        </div>
    );
};

export default Layout;