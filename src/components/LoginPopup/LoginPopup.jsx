import React, { useState, useEffect } from "react";
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './LoginPopup.scss';

import showIcon from "../../icons/hide-pass.svg";
import hideIcon from "../../icons/show-pass.svg";

export const LoginPopup = () => {
    const { login, logout } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        const closePopup = () => {
            document.getElementById("close-button").click();
        };

        if (login) {
            closePopup();
        }
    }, [login]);

    const handleLogin = () => {
        login();
    };

    return (
        <>
            <a href="" className="login-pop-up__backgroud"></a>
            <div className="login-pop-up" id="login-form">
                <div className="login-pop-up__description-block">
                    <p className="login-pop-up__description-text">
                        Кабінет Клієнта
                    </p>
                    <a href="#" className="login-pop-up__close-button" id="close-button"></a>
                </div>
                <form action="#" className="login-pop-up__form">
                    <label htmlFor="login" className="login-pop-up__label">
                        Логін
                    </label>
                    <input type="text" id="login" name="login" className="login-pop-up__input" />

                    <label htmlFor="password" className="login-pop-up__label">
                        Пароль
                    </label>
                    <div className="password-input-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            id="password" 
                            name="password" 
                            className="login-pop-up__input" 
                        />
                        <button 
                            type="button" 
                            className="toggle-password-button" 
                            onClick={togglePasswordVisibility}
                        >
                            <img 
                                src={showPassword ? hideIcon : showIcon} 
                                alt={showPassword ? "Hide Password" : "Show Password"} 
                            />
                        </button>
                    </div>
                    <button type="submit" className="login-pop-up__button" onClick={handleLogin}>
                        Увійти
                    </button>
                </form>
                <Link to="/refreshPassword" className="login-pop-up__refresh-password">Відновити пароль</Link>
            </div>
        </>
    );
};

export default LoginPopup;
