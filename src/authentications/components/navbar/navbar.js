import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className='nav-list'>
            <li>
                    <Link className="home" to="../../">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="login" to="../../login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link className="register" to="/register" >
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
