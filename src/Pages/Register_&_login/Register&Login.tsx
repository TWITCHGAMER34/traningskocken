// src/Pages/Register_%26_login/Register%26Login.tsx
import {FormEvent, useEffect, useState} from 'react';
import './styles.scss';
import {useNavigate} from "react-router-dom";

export default function RegisterAndLogin() {
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    const toggleView = () => {
        setShowLogin(!showLogin);
    };

    useEffect(() => {
        const mail = localStorage.getItem("loggedIn");
        if (mail) navigate("/profile")
    }, [navigate]);

    const handleRegister = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;
        const name = event.currentTarget.username.value;
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('name', name);
        alert('Registration successful! You can now log in.');
        setShowLogin(true)
    };

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        if (email === storedEmail && password === storedPassword) {
            localStorage.setItem("loggedIn", "true")
            navigate("/profile")
        } else {
            alert('Invalid email or password.');
        }
    };

    return (
        <div className="container-auth">
            <div className={`register ${showLogin ? 'hidden' : 'shown'}`}>
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="email" name="email" placeholder="John.Doe@example.com" required />
                    <input type="text" name="username" placeholder="Name" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="password" name="repeatPassword" placeholder="Repeat Password" required />
                    <div className="checkbox-container">
                        <div>
                            <input type="checkbox" id="promo" required />
                            <label htmlFor="promo">I agree to receiving promo emails and new product updates.</label>
                        </div>
                        <div>
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">I agree to the terms of service, conditions and privacy policy.</label>
                        </div>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
            <div className={`login ${showLogin ? 'shown' : 'hidden'}`}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
            <button className={`toggle-arrow ${showLogin ? 'right' : 'left'}`} onClick={toggleView}>
                ➔
            </button>
        </div>
    );
}