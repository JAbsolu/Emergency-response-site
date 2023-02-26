import '../userAuthorization/styles/register.scss';
import Footer from "../userAuthorization/components/footer/footer";
import RegisterLayout from "./components/layout/registerLayout";

const Register = () => {
    return (
        <div className='Register'>
            <RegisterLayout />
            <Footer />
        </div>
    );
};

export default Register;