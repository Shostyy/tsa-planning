import React, { useState } from 'react';
import "./RefreshPassword.scss"

export const RefreshPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRepeated, setNewPasswordRepeated] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'newPassword') {
            setNewPassword(value);
        } else if (id === 'newPasswordRepeated') {
            setNewPasswordRepeated(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword === newPasswordRepeated) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    }

    return (
        <main className="refresh-password">
            <h2 className="refresh-password__header">Відновити пароль</h2>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    value={newPassword}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="newPassword">Введіть пароль</label>
                <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="newPasswordRepeated">Повторіть новий пароль</label>
                <input
                    type="password"
                    id="newPasswordRepeated"
                    value={newPasswordRepeated}
                    onChange={handleInputChange}
                    required
                />
                {!passwordsMatch && (
                <p className="wrong-password">Паролі повинні співпадати</p>
                )}
                <button type="submit">Відправити</button>
            </form>
        </main>
    )
}
