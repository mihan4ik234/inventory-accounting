import React, { useState } from 'react';
import styles from './Autharization.module.css';

function Autharization() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = () => {
    if (login === '' || password === '') {
      setError('Все поля обязательны для заполнения');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle the login logic here
      console.log('Логин:', login);
      console.log('Пароль:', password);
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2>Авторизация</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={handleLoginChange}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Sign In</button>
      </form>
    </div>
  );
}

export default Autharization;
