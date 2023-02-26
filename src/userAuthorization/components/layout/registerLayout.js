import '../../styles/register.scss';
import { Link } from 'react-router-dom';
import RegisterForm from '../registerForm/registerForm';

import Login from '../../login';

const RegisterLayout = () => {
    return (
        <div id="register-layout">
            <div id="register-layout-first">
                <h1>MedER</h1>
            </div>
            <div id="register-layout-form">
                <div className='register-layout-form-div'>
                    <h2>Register</h2>
                    <Link to="/" className='text-red'>Back to home</Link>
                </div>
                <RegisterForm />
                <span>Already have an account? <Link to="/login" className='text-red'>Log in</Link></span>
            </div>
        </div>
    );
};

export default RegisterLayout;