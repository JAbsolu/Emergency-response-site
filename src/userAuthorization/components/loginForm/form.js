
const LoginForm = () => {
    return (
        <div className="login-form-container">
            <h2>Hello, Welcome Back</h2>
            <p>Login to access your account</p>
            <form className="login-form" action="#" method="post">
                <label htmlFor="Email" className="labels">Email</label> <br/> <span></span>
                <input type="text" name="Email" id="email" placeholder="Email"/>
                <br />
                <span></span>
                <label htmlFor="paswword" className="labels">Password</label> <br/>
                <input type="password" name="password" id="passwd" placeholder="Password"/>
                <br/>
                <span></span>
                <input type="submit" value="Login" id="login" />
        </form>
        </div>
    );
};

// form validation
//this code doesn't work yet
const email = document.getElementById('#email');
const password = document.getElementById('#passwd');

export default LoginForm;