import React, { useState } from "react";
import styles from "./Autharization.module.css";

function Autharization() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = () => {
    if (login === "" || password === "") {
      setError("Все поля обязательны для заполнения");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5052/api/Auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
          body: JSON.stringify({
            username: login,
            password: password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Успешная авторизация:", data);

          // Сохранение токена в localStorage
          localStorage.setItem("token", data.token);
          

          // Сохранение роли в localStorage в зависимости от логина
          if (login === "Admin") {
            localStorage.setItem("role", "admin");
          } else if (login === "Accountant") {
            localStorage.setItem("role", "accountant");
          }

          // Дополнительные действия после успешной авторизации
        } else {
          const errorData = await response.json();
          setError(`Ошибка авторизации: ${errorData.message}`);
        }
      } catch (err) {
        setError(`Ошибка сети: ${err.message}`);
      }
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
        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Autharization;
