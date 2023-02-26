
const RegisterForm = () => {
    return (
        <div id="register-form">
            <p>Enter your information to register for an account</p>
            <form method="post" action="#" id="register_form">
                    <label htmlFor="first name">First name</label>
                    <br />
                    <input type="text" name="first name" id="firstName" placeholder="First name"/>
                    <br/>
                    <label htmlFor="last name">Last name </label>
                    <br />
                    <input type="text" name="last name" id="lasttName" placeholder="Last name"/>
                    <br/>
                    <label htmlFor="phone number">Phone number</label>
                    <br />
                    <input type="text" name="phone number" id="phoneNumber" placeholder="Phone number"/>
                    <br/>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" name="email" id="email" placeholder="email"/>
                    <br/>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="text" name="password" id="registerPasswd" placeholder="Password"/>
                    <br />
                    <label htmlFor="password confirmation">Confirm password</label>
                    <br />
                    <input type="password" name="password confirmation" id="registerPasswd" placeholder="Confirm password"/>
                    <br></br>
                    <input type="submit" value="Register" id="register_submit"/>
            </form>
        </div>
    )
}

export default RegisterForm;