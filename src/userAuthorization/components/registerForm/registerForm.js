import '../../styles/register.css';

const RegisterForm = () => {
    return (
        <div id="register-form">
            <p>Enter your information to register for an account</p>
            <form method="post" action="#" id="register_form">
                    <label htmlFor="first name" className='mb-1 mt-3'>First name</label>
                    <br />
                    <input className="p-2 rounded" type="text" name="first name" id="firstName" placeholder="First name"/>
                    <br/>
                    <label htmlFor="last name" className='mb-1 mt-3'>Last name </label>
                    <br />
                    <input className="p-2 rounded" type="text" name="last name" id="lasttName" placeholder="Last name"/>
                    <br/>
                    <label htmlFor="phone number" className='mb-1 mt-3'>Phone number</label>
                    <br />
                    <input className="p-2 rounded" type="text" name="phone number" id="phoneNumber" placeholder="Phone number"/>
                    <br/>
                    <label htmlFor="email" className='mb-1 mt-3'>Email</label>
                    <br />
                    <input className="p-2 rounded" type="text" name="email" id="email" placeholder="email"/>
                    <br/>
                    <label htmlFor="password" className='mb-1 mt-3'>Password</label>
                    <br />
                    <input className="p-2 rounded" type="text" name="password" id="registerPasswd" placeholder="Password"/>
                    <br />
                    <label htmlFor="password confirmation" className='mb-1 mt-3'>Confirm password</label>
                    <br />
                    <input className="p-2 rounded" type="password" name="password confirmation" id="registerPasswd" placeholder="Confirm password"/>
                    <br></br>
                    <input className="p-3 rounded mt-3" id='register_submit' type="submit" value="Register" />
            </form>
        </div>
    )
}

export default RegisterForm;