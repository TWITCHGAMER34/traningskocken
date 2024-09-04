import { useState } from 'react';
import './styles.scss';

const RegisterAndLogin = () => {
    const [showLogin, setShowLogin] = useState(false);

    const toggleView = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className={`container ${showLogin ? 'show-login' : ''}`}>
            <div className="register">
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Register</button>
                </form>
            </div>
            <div className="login">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
            <button className="toggle-button" onClick={toggleView}>
                {showLogin ? 'Go to Register' : 'Go to Login'}
            </button>
        </div>
    );
};

export default RegisterAndLogin;